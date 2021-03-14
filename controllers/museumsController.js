const {
  Request,
  Response
} = require("express");
const Museum = require("../models/Museum");

const bcryptjs = require('bcryptjs');

const {
  validationResult
} = require('express-validator');
const jwt = require('jsonwebtoken');

const getMuseum = async (req, res) => {
  const museum = await Museum.default.findAll({
      where: {
          status: 2
      }
  });

  res.json(museum);
}



const getMuseumByID = async (req, res) => {

  const {
      id
  } = req.params;
  const museum = await Museum.default.findByPk(id);

  if (museum) {
      res.json(museum)
  } else {
      res.status(404).json({
          msg: `No existe un museo con el id: ${id}`
      })
  }

}

const postMuseum = async (req, res) => {

  const {
      body
  } = req;

  const {
    email,
    password
  } = req.body;

  try {

    var museum = await Museum.default.findOne({
      where: {
        email: email
      }
    });
    if (museum) {
      return res.status(400).json({
        msg: 'El usuario ya existe'
      });

    } else {
      // Hashear el password
      const salt = await bcryptjs.genSalt(10);
      body.password = await bcryptjs.hash(password, salt);

      // Guardar usuario
      museum = await Museum.default.create(body);
      
      // Crear y firmar el JWT
      const payload = {
        museum: {
          id: museum.id
        }
      };
      
      //Firmar del JWT
      jwt.sign(payload, process.env.SECRETA, {
        expiresIn: 3600000
      }, (error, token) => {
        if (error) throw error;

          res.json({
            museum,
            token
          });
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: `Favor de comunicarse con el administrador`
    });
  }
}



const putMuseum = async (req, res) => {

  const {
      id
  } = req.params;
  const {
      body
  } = req;
  try {

      const museum = await Museum.default.findByPk(id);
      if (!museum) {
          return res.status(404).json({
              msg: 'No existe un museum con el id: ' + id
          })
      }
      await museum.update(body);

      res.json(museum);

  } catch (error) {
      console.log(error);
      res.status(500).json({
          msg: `Favor de comunicarse con el administrador`
      })
  }
}


const deleteMuseum = async (req, res) => {
  const {
      id
  } = req.params;
  try {

      var museum = await Museum.default.findByPk(id);
      if (!museum) {
          return res.status(404).json({
              msg: 'No existe un museum con el id: ' + id
          })
      }
     
      await museum.update({
          status: 0
      });

      res.json(museum);

  } catch (error) {
      console.log(error);
      res.status(500).json({
          msg: `Favor de comunicarse con el administrador`
      })
  }
}


module.exports = {
  getMuseum,
  getMuseumByID,
  postMuseum,
  putMuseum,
  deleteMuseum
}