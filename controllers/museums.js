/*  Archivo controllers/museums.js
 *  Simulando la respuesta de objetos Museum
 *  en un futuro aquí se utilizarán los modelos
 */

// importamos el modelo de museums
const Museum = require('../models/Museum')

function createMuseum(req, res) {
  // Instanciaremos un nuevo museum utilizando la clase museum
  var museum = new Museum(req.body)
  res.status(201).send(museum)
}

function getMuseums(req, res) {
  // Simulando dos museums y respondiendolos
  var museum1 = new Museum('Moneda', 'Peralvillo No. 24', 5547512454, '10:00', 2, 'monedamuseo@gmail.com')
  var museum2 = new Museum('Medicina', 'Centro', 5500000000, '09:00', 3, 'medicinamuseo@gmail.com')
  res.send([museum1, museum2])
}

function editMuseum(req, res) {
  // simulando un museum previamente existente que el cliente modifica
  var museum1 = new Museum(req.params.id, 'Juan', 'Vega', 'juan@vega.com')
  var modificaciones = req.body
  museum1 = { ...museum1, ...modificaciones }
  res.send(museum1)
}

function deleteMuseum(req, res) {
  // se simula una eliminación de museum, regresando un 200
  res.status(200).send(`Museum ${req.params.id} eliminado`);
}

// exportamos las funciones definidas
module.exports = {
  createMuseum,
  getMuseums,
  editMuseum,
  deleteMuseum
}