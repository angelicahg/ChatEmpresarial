const { usuarioConectado, usuarioDesconectado, getUsuarios, grabarMensaje } = require('../controllers/sockets');
const { comprobarJWT } = require('../helpers/jwt.js')

class Sockets {

    constructor(io) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', async (socket) => {

            const [valido, uid] = comprobarJWT(socket.handshake.query['x-token']);

            if (!valido) {
                console.log('socket no identificado');
                return socket.disconnect();
            }

            await usuarioConectado(uid);
            // Unir al usuario a una sala de socket.io
            socket.join(uid); //uid de mongo


            //TODO:VALIDAR EL  JWT 
            // SI EL TOKEN NO ES VALIDO,DESCONECTAR 
            // SABER QUE USUARIO ESTA ACTIVO MEDIANTE EL UID
            //TODO:EMITIR TODOS LOS USUARIOS CONECTADOS 

            this.io.emit('lista-usuarios', await getUsuarios())
            //TODO SOCKER JOIN 
            //TODO:ESCUCHAR CUANDO CLIENTE ENVIA MENSAJE PERSONAL
            socket.on('mensaje-personal', async (payload) => {
                const mensaje = await grabarMensaje(payload);
                this.io.to(payload.para).emit('mensaje-personal', mensaje);
                this.io.to(payload.de).emit('mensaje-personal', mensaje);
            });
            //TODO:DISCONECT
            //MARCAR EN LA DB  QUE EL USUARIO SE DESCONECTO 
            //TODO:EMITIS TODOS LOS USUIARIOS  CONECTADOS 

            socket.on('disconnect', async () => {
                await usuarioDesconectado(uid);
                this.io.emit('lista-usuarios', await getUsuarios())
            })


        });
    }


}


module.exports = Sockets;