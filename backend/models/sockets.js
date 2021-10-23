const { usuarioConectado, usuarioDesconectado } = require('../controllers/sockets');
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


            //TODO:VALIDAR EL  JWT 
            // SI EL TOKEN NO ES VALIDO,DESCONECTAR 
            // SABER QUE USUARIO ESTA ACTIVO MEDIANTE EL UID
            //TODO:EMITIR TODOS LOS USUARIOS CONECTADOS 
            //TODO SOCKER JOIN 
            //TODO:ESCUCHAR CUANDO CLIENTE ENVIA MENSAJE 
            //MENSAJE PERSONAL 
            //TODO:DISCONECT
            //MARCAR EN LA DB  QUE EL USUARIO SE DESCONECTO 
            //TODO:EMITIS TODOS LOS USUIARIOS  CONECTADOS 

            socket.on('disconnect', async () => {
                await usuarioDesconectado(uid);
                console.log('cliente conectado');
            })


        });
    }


}


module.exports = Sockets;