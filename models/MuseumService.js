const sequelize = require("sequelize");
const conection = require("../config/db");
const MuseumService = conection.default.define('museumService', {
    idMuseum: {
        type: sequelize.DataTypes.NUMBER
    },
    idService: {
        type: sequelize.DataTypes.NUMBER
    },
    price: {
        type: sequelize.DataTypes.FLOAT
    },
    limitVisitors: {
        type: sequelize.DataTypes.NUMBER
    },
    timeService: {
        type: sequelize.DataTypes.FLOAT
    },  
    status: {
        type: sequelize.DataTypes.NUMBER
    }    
});

exports.default = MuseumService;