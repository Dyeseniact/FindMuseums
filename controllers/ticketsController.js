const {
  Request,
  Response
} = require("express");
const MuseumService = require("../models/MuseumService");
const Ticket = require("../models/Ticket");
const jwt = require('jsonwebtoken');
const conection = require("../config/db");

const {
  validationResult
} = require('express-validator');
const {
  QueryTypes
} = require('sequelize');


const getTicketsByUser = async (req, res) => {

  const visitor = await getIdByToken(req, res);

  try {
    if (visitor.status == 1) {
      const visitorTickets = await conection.default.query('SELECT a.id, b.fullName as visitor, e.fullName as museum, d.description, c.price, a.createdAt as buy FROM tickets AS a LEFT JOIN users AS b ON a.idVisitor = b.id LEFT JOIN museumServices AS c ON a.idMuseumService = c.id LEFT JOIN services AS d ON c.idService = d.id LEFT JOIN users AS e ON c.idMuseum = e.id WHERE a.idVisitor = ' + visitor.id + ' and a.status = 1;', {
        type: QueryTypes.SELECT
      });

      if (visitorTickets.length > 0) {
        res.json(visitorTickets);
      } else {
        return res.status(404).json({
          msg: `El museo: '${visitor.userName}' No tiene ningun tickt disponible`
        });
      }
    } else {
      return res.status(404).json({
        msg: `Esta peticion solo puede ser realizada por usuaios`
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: `Favor de comunicarse con el administrador`
    });
  }

}


const getTicketUserByid = async (req, res) => {

  const {
    id
  } = req.params;

  const visitor = await getIdByToken(req, res);

  try {
    if (visitor.status == 1) {
      const visitorTickets = await conection.default.query('SELECT a.id, b.fullName as visitor, e.fullName as museum, d.description, c.price, a.createdAt as buy FROM tickets AS a LEFT JOIN users AS b ON a.idVisitor = b.id LEFT JOIN museumServices AS c ON a.idMuseumService = c.id LEFT JOIN services AS d ON c.idService = d.id LEFT JOIN users AS e ON c.idMuseum = e.id WHERE a.idVisitor = ' + visitor.id + ' and a.id = ' + id + ' and a.status = 1;', {
        type: QueryTypes.SELECT
      });

      if (visitorTickets.length > 0) {
        res.json(visitorTickets);
      } else {
        return res.status(404).json({
          msg: `El usuario: '${visitor.userName}' no tiene ningun tickt disponible para el id ${id}`
        });
      }
    } else {
      return res.status(404).json({
        msg: `Esta peticion solo puede ser realizada por usuaios`
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: `Favor de comunicarse con el administrador`
    });
  }

}

const postTicketByUser = async (req, res) => {
  //revisar si hay errores
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({
          errors: errors.array()
      })
  }
  const {
      body
  } = req;
  const visitor = await getIdByToken(req, res);
  try {
      if (visitor.status == 1) {
          if (visitor.id == body.idVisitor) {              
              //save tickt
              tickt = await Ticket.default.create(body);
              res.json({
                tickt
              });
          } else {
              res.status(300).json({
                  msg: `No cuentas con los permisos de esa cuenta`
              });
          }
      }

  } catch (error) {
      console.log(error);
      res.status(500).json({
          msg: `Favor de comunicarse con el administrador`
      });
  }
}


const calncelTicketByUser = async (req, res) => {
  const {
    id
  } = req.params;

  const visitor = await getIdByToken(req, res);
  try {
    if (visitor.status == 1) {
      var visitorTicket = await Ticket.default.findOne({
        where: {
          id: id,
          idVisitor: visitor.id,
          status: 1
        }
      });
      
      if (!visitorTicket) {
        return res.status(404).json({
          msg: `No existe un ticket con el id: ${id} disponible Para el usuario: '${visitor.userName}'`
        });
      }
      await visitorTicket.update({
        status: 0
      });
      res.json(visitorTicket);

    }


  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: `Favor de comunicarse con el administrador`
    })
  }
}


const getTicketsByMusseum = async (req, res) => {

  const musseun = await getIdByToken(req, res);

  try {
    if (musseun.status == 2) {
      const musseunTickets = await conection.default.query('SELECT a.id, b.fullName as visitor, e.fullName as museum, d.description, c.price, a.createdAt as buy FROM tickets AS a LEFT JOIN users AS b ON a.idVisitor = b.id LEFT JOIN museumServices AS c ON a.idMuseumService = c.id LEFT JOIN services AS d ON c.idService = d.id LEFT JOIN users AS e ON c.idMuseum = e.id WHERE c.idMuseum = ' + musseun.id + ' and a.status = 1;', {
        type: QueryTypes.SELECT
      });

      if (musseunTickets.length > 0) {
        res.json(musseunTickets);
      } else {
        return res.status(404).json({
          msg: `El museo: '${musseun.userName}' No tiene ningun tickt disponible`
        });
      }
    } else {
      return res.status(404).json({
        msg: `Esta peticion solo puede ser realizada por museos`
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: `Favor de comunicarse con el administrador`
    });
  }

}
const postMuseumServices = async (req, res) => {


  //revisar si hay errores
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({
          errors: errors.array()
      })
  }
  const {
      body
  } = req;
  const idMusseum = await getIdByToken(req, res);

  try {
      if (idMusseum.id > 0) {
          if (idMusseum.id == body.idMuseum) {
              var service = await MuseumService.default.findOne({
                  where: {
                      idService: body.idService,
                      idMuseum: idMusseum.id,
                      status: 1
                  }
              });

              if (service) {
                  return res.status(400).json({
                      msg: `El servicio ya existe para el museo: '${idMusseum.userName}'`
                  });
              }
              //save service
              service = await MuseumService.default.create(body);
              res.json({
                  service
              });
          } else {
              res.status(300).json({
                  msg: `No cuentas con los permisos de esa cuenta`
              });
          }
      }

  } catch (error) {
      console.log(error);
      res.status(500).json({
          msg: `Favor de comunicarse con el administrador`
      });
  }
}


const getTicketMusseumByid = async (req, res) => {

  const {
    id
  } = req.params;

  const musseun = await getIdByToken(req, res);
  try {
    if (musseun.status == 2) {
      const musseunTicket = await conection.default.query('SELECT a.id, b.fullName as visitor, e.fullName as museum, d.description, c.price, a.createdAt as buy FROM tickets AS a LEFT JOIN users AS b ON a.idVisitor = b.id LEFT JOIN museumServices AS c ON a.idMuseumService = c.id LEFT JOIN services AS d ON c.idService = d.id LEFT JOIN users AS e ON c.idMuseum = e.id WHERE c.idMuseum = ' + musseun.id + ' and a.id = ' + id + ' and a.status = 1;', {
        type: QueryTypes.SELECT
      });

      if (musseunTicket.length > 0) {
        res.json(musseunTicket);
      } else {
        return res.status(404).json({
          msg: `El museo: '${musseun.userName}' no tiene ningun tickt disponible para el id ${id}`
        });
      }
    } else {
      return res.status(404).json({
        msg: `Esta peticion solo puede ser realizada por museos`
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: `Favor de comunicarse con el administrador`
    });
  }

}


function getIdByToken(req, res) {
  try {
    const token = req.header('x-auth-token');
    const encryption = jwt.verify(token, process.env.SECRETA);
    return req.user = encryption.user;
  } catch (error) {
    return res.status(404).json({
      msg: `Token no valido`
    });
  }
}

module.exports = {
  getTicketsByUser,
  getTicketUserByid,
  getTicketMusseumByid,
  getTicketsByMusseum,
  calncelTicketByUser,
  postTicketByUser  
}