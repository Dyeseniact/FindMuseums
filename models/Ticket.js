const sequelize = require("sequelize");
const conection = require("../config/db");
const Ticket = conection.default.define('ticket', {
    idVisitor: {
        type: sequelize.DataTypes.NUMBER
    },
    idMuseumService: {
        type: sequelize.DataTypes.NUMBER
    },     
    status: {
        type: sequelize.DataTypes.NUMBER
    }    
});

exports.default = Ticket;