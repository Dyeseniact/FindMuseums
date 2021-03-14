
const sequelize_1 = require("sequelize");
const conection_1 = require("../config/db");
const Service = conection_1.default.define('service', {
    description: {
        type: sequelize_1.DataTypes.STRING
    },
	status: {
        type: sequelize_1.DataTypes.NUMBER
    }
});

exports.default = Service;

