const dotenv  = require('dotenv');
const Server  = require('./models/server');
//configurar dotenv
dotenv.config();

const server = new Server;


server.listen();