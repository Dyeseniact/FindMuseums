/*  Archivo controllers/museums.js
 *  Simulando la respuesta de objetos Museum
 *  en un futuro aquí se utilizarán los modelos
 */

// importamos el modelo de museums
const Museum = require('../models/Museum')

const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const getMuseums = async (req, res) => {
  const Museums = await Museum.default.findAll({
      where: {
          status: [2]
      }
  });

  res.json(museums);
}



const getMuseum = async (req, res) => {

  const {
      id
  } = req.params;
  const museum = await Museum.default.findByPk(id);

  if (museum) {
      res.json(museum)
  } else {
      res.status(404).json({
          msg: `No existe un museum con el id: ${id}`
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

      const project = await Museum.default.findOne({ where: { email: email } });
      if (project) {
          return res.status(400).json({
              msg: 'El museum ya existe'
          });
          
        } else {
        //crear el nuevo museum
      //hashear el password
      const salt = await bcryptjs.genSalt(10);
      body.password = await bcryptjs.hash(password, salt);        
      //guardar museum
      const user = await Museum.default.create(body);
      //firma del jwt
      const payload = {
          museum: {
              id: user.id
          }        
      };
      //firmar el jwt
       jwt.sign(payload, process.env.SECRETA, {
           expiresIn: 3600000
       }, (error, token) => {
           if(error) throw error;

           res.json({
              user,
              token
           });
       });
      }
  } catch (error) {
      console.log(error);
      res.status(500).json({
          msg: `Favor de comunicarse con el arministrador`
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
          msg: `Favor de comunicarse con el arministrador`
      })
  }
}


const deleteMuseum = async (req, res) => {
  const {
      id
  } = req.params;
  try {

      const museum = await Museum.default.findByPk(id);
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
          msg: `Favor de comunicarse con el arministrador`
      })
  }
}


module.exports = {
  getMuseums,
  getMuseum,
  postMuseum,
  putMuseum,
  deleteMuseum
}