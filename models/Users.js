const sequelize_1 = require("sequelize");
const conection_1 = require("../config/db");
const User = conection_1.default.define('user', {
    fullName: {
        type: sequelize_1.DataTypes.STRING
    },
    password: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    address: {
        type: sequelize_1.DataTypes.STRING
    },
    phoneNumber: {
        type: sequelize_1.DataTypes.STRING
    },
    status: {
        type: sequelize_1.DataTypes.NUMBER
    },
    foto: {
        type: sequelize_1.DataTypes.STRING
    }
});

exports.default = User;