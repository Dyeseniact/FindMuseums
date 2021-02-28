/*  Archivo controllers/usuarios.js
 *  Simulando la respuesta de objetos Usuario
 *  en un futuro aquí se utilizarán los modelos
 */

// importamos el modelo de usuarios
const Mascota = require('../models/Mascota')

function crearMascota(req, res) {
  // Instanciaremos un nuevo usuario utilizando la clase usuario
  var mascota = new Mascota(req.body)
  res.status(201).send(mascota)
}

function obtenerMascota(req, res) {
  // Simulando dos usuarios y respondiendolos
  
  let mascota1 = new Mascota(1, "scuby");
  let mascota2 = new Mascota(2, "snow");
  let mascota3 = new Mascota(3, "siler");
  res.send([mascota1, mascota2, mascota3])
}

function modificarMascota(req, res) {
  // simulando un usuario previamente existente que el cliente modifica
  
  let mascota1 = new Mascota(req.params.id, "holeon");
  var modificaciones = req.body
  mascota1 = { ...mascota1, ...modificaciones }
  res.send(mascota1)
}

function eliminarMascota(req, res) {
  // se simula una eliminación de usuario, regresando un 200
  res.status(200).send(`Mascota con el id: ${req.params.id} eliminado`);
}

// exportamos las funciones definidas
module.exports = {
crearMascota,
  obtenerMascota,
  modificarMascota,
  eliminarMascota
}