const Visitor = require('../models/Visitor')


function makeVisitor(req, res) {
    var visitor = new Visitor(req.body)
    res.status(201).send(visitor)
}

function editVisitor(req, res) {
    
    let visitor1 = new Visitor(req.params.id, "holeon");
    var edits = req.body
    visitor1 = { ...visitor1, ...edits }
    res.send(visitor1)
    
}

function deleteVisitor(req, res) {
    // se simula una eliminación de Visitor, regresando un 200
    res.status(200).send(`Visitor con el id: ${req.params.id} fue eliminado`);
}

function viewVisitor(req, res) {
    let visitor1 = new Visitor(1, "Juan");
    let visitor2 = new Visitor(2, "Ana");
    let visitor3 = new Visitor(3, "Yesenia");
    res.send([visitor1, visitor2, visitor3])

}


// exportamos las funciones definidas
module.exports = {
    makeVisitor,
    editVisitor,
    deleteVisitor,
    viewVisitor
  }