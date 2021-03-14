const {
    Request,
    Response
} = require("express");
const User = require("../models/Users");

const bcryptjs = require('bcryptjs');

const {
    validationResult
} = require('express-validator');
const jwt = require('jsonwebtoken');

const getUsers = async (req, res) => {
    const users = await User.default.findAll({
        where: {
            status: [1, 2]
        }
    });

    res.json(users);
}



const getUserByID = async (req, res) => {

    const {
        id
    } = req.params;
    const user = await User.default.findByPk(id);

    if (user) {
        res.json(user)
    } else {
        res.status(404).json({
            msg: `No existe un usuario con el id: ${id}`
        })
    }

}

const postUser = async (req, res) => {

    const {
        body
    } = req;

    const {
        email,
        password
    } = req.body;

    try {

        var user = await User.default.findOne({
            where: {
                email: email
            }
        });
        if (user) {
            return res.status(400).json({
                msg: 'El usuario ya existe'
            });

        } else {
            // Hashear el password
            const salt = await bcryptjs.genSalt(10);
            body.password = await bcryptjs.hash(password, salt);
            // Guardar usuario
             user = await User.default.create(body);
            // Crear y firmar el JWT
            const payload = {
                user: {
                    id: user.id
                }
            };
            //Firmar del JWT
            jwt.sign(payload, process.env.SECRETA, {
                expiresIn: 3600000
            }, (error, token) => {
                if (error) throw error;

                res.json({
                    user,
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



const putUser = async (req, res) => {

    const {
        id
    } = req.params;
    const {
        body
    } = req;
    try {

        const user = await User.default.findByPk(id);
        if (!user) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id: ' + id
            })
        }
        await user.update(body);

        res.json(user);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `Favor de comunicarse con el administrador`
        })
    }
}


const deleteUser = async (req, res) => {
    const {
        id
    } = req.params;
    try {

        const user = await User.default.findByPk(id);
        if (!user) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id: ' + id
            })
        }
        await user.update({
            status: 0
        });

        res.json(user);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `Favor de comunicarse con el administrador`
        })
    }
}


module.exports = {
    getUsers,
    getUserByID,
    postUser,
    putUser,
    deleteUser
}