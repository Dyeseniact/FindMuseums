const express = require("express");
const user = require("../routes/users");
const auth = require("../routes/auth");
const cors = require("cors");
const conection = require("../config/db");

class Server {
    //apiPath = {
        //users: '/api/users',
        //auth: '/api/auth'
    //}
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3010';

        //metodos iniciales
        //this.dbConection();
        this.middleweres();
        //definir mis rutas
        this.routes();
    }

    //todo conectar base de datos
   

    //funciones que se ejecutan antes que otros procesos
    middleweres () {
        // CORS
        this.app.use(cors());
        // lectura del body
        this.app.use(express.json());
        // Carpeta publica
        this.app.use(express.static('public'));
    }

    routes() {        
        //this.app.use(this.apiPath.users, user);
        //this.app.use(this.apiPath.auth, auth);        
    }
    
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servido corriendo por el puerto: C: ' + this.port);
        })
    }
}

module.exports = Server;