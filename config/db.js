
require('dotenv').config({
    path: 'variables.env'
});
const sequelize = require("sequelize");
const db = new sequelize.Sequelize(process.env.TABLE, process.env.USER, process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    //logging: false,
});


db.authenticate()
.then(() => {
  console.log('Its alive!!!!');
})
.catch(err => {
  console.log('No se conecto :(')
})
exports.default = db;

//# sourceMappingURL=conection.js.map