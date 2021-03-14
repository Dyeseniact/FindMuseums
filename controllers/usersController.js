const {
    Request,
    Response
} = require("express");
const Usuario = require("../models/Users");

const bcryptjs = require('bcryptjs');
const {
    validationResult
} = require('express-validator');
const jwt = require('jsonwebtoken');

const getUsuarios = async (req, res) => {
    const usuarios = await Usuario.default.findAll({
        where: {
            status: [1, 2]
        }
    });

    res.json(usuarios);
}



const getUsuario = async (req, res) => {

    const {
        id
    } = req.params;
    const usuario = await Usuario.default.findByPk(id);

    if (usuario) {
        res.json(usuario)
    } else {
        res.status(404).json({
            msg: `No existe un usuario con el id: ${id}`
        })
    }

}

const postUsuario = async (req, res) => {

    const {
        body
    } = req;

    const {
        email,
        password
    } = req.body;
    try {

        const project = await Usuario.default.findOne({ where: { email: email } });
        if (project) {
            return res.status(400).json({
                msg: 'El usuario ya existe'
            });
            
          } else {
            //console.log(project instanceof Project); // true
            //console.log(project.title); // 'My Title'
          //crear el nuevo usuario
        //hashear el password
        const salt = await bcryptjs.genSalt(10);
        body.password = await bcryptjs.hash(password, salt);        
        //guardar usuario
        const user = await Usuario.default.create(body);
        //firma del jwt
        const payload = {
            usuario: {
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



const putUsuario = async (req, res) => {

    const {
        id
    } = req.params;
    const {
        body
    } = req;
    try {

        const usuario = await Usuario.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id: ' + id
            })
        }
        await usuario.update(body);

        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `Favor de comunicarse con el arministrador`
        })
    }
}


const deleteUsuario = async (req, res) => {
    const {
        id
    } = req.params;
    try {

        const usuario = await Usuario.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id: ' + id
            })
        }
        await usuario.update({
            status: 0
        });

        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `Favor de comunicarse con el arministrador`
        })
    }
}


module.exports = {
    getUsuarios,
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario
}