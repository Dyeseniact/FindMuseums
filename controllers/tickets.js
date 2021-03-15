// Importamos el modelo de tickets
const Ticket = require('../models/Ticket')

function createTicket(req, res) {
  // Instanciaremos un nuevo ticket utilizando la clase Ticket
  var ticket = new Ticket(req.body)
  res.status(201).send(ticket)
}

function getTicket(req, res) {
  // Simula dos tickets y respondiéndolos
  var ticket1 = new Ticket(2, 2, 2, 2, 20.5, '2021-02-28', '09:00')
  var ticket2 = new Ticket(3, 3, 3, 3, 10.5, '2021-02-28', '10:30')
  res.send([ticket1, ticket2])
}

function editTicket(req, res) {
  // Simula un ticket previamente existente que el cliente modifica
  var ticket1 = new Ticket(req.params.id, 2, 2, 2, 20.5, '2021-02-28', '09:00')
  var modificaciones = req.body
  ticket1 = { ...ticket1, ...modificaciones }
  res.send(ticket1)
}

function deleteTicket(req, res) {
  // Simula una eliminación de ticket, regresando un 200
  res.status(200).send(`Ticket ${req.params.id} eliminado`);
}

// Exportamos las funciones definidas
module.exports = {
  createTicket,
  getTicket,
  editTicket,
  deleteTicket
}