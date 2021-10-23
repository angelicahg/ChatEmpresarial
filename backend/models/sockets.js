

class Sockets {

    constructor(io) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', (socket) => {

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


        });
    }


}


module.exports = Sockets;