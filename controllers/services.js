
// importamos el modelo de service
const Service = require('../models/Service')

function createService(req, res) {
  // Instanciaremos un nuevo usuario utilizando la clase usuario
  var service = new Service(req.body)
  res.status(201).send(service)
}

function getService(req, res) {
  // Simulando dos usuarios y respondiendolos
  var service1 = new Service(1, 'Tour', '13 de febrero ', '8:00', '$10', '15', 1)
  var service2 = new Service(2, 'Tour', '20 de marzo ', '10:00', '$80', '10',1)
  res.send([service1, service2])
}

function updateService(req, res) {
  // simulando un usuario previamente existente que el cliente modifica
  var service1 = new Service(req.params.id,'Recorrido')
  var modificaciones = req.body
  service1 = { ...service1, ...modificaciones }
  res.send(service1)
}

function deleteService(req, res) {
  // se simula una eliminación de usuario, regresando un 200
  res.status(200).send(`Service ${req.params.id} eliminado`);
}

// exportamos las funciones definidas
module.exports = {
  createService,
  getService,
  updateService,
  deleteService
}