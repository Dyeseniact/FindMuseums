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
    const user = await getIdByToken(req, res);
    try {
        if (user.status == 3) {
            const users = await User.default.findAll({
                where: {
                    status: [1, 2]
                }
            });
            res.json(users);
        } else {
            return res.status(404).json({
                msg: `Esta peticion solo puede ser realizada por el super usuario`
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `Favor de comunicarse con el administrador`
        });
    }
}

const getUserByID = async (req, res) => {

    const user = await getIdByToken(req, res);
    try {
        if (user.status == 3) {

            const {
                id
            } = req.params;
            const user = await User.default.findAll({
                where: {
                    status: 1,
                    id: id
                }
            });

            if (user.length > 0) {
                res.json(user)
            } else {
                res.status(400).json({
                    msg: `No existe un usuario con el id: ${id}`
                })
            }
        } else {
            return res.status(404).json({
                msg: `Esta peticion solo puede ser realizada por el super usuario`
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `Favor de comunicarse con el administrador`
        });
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

                res.status(201).json({
                    user,
                    token
                });
            });

        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `Error, favor de comunicarse con el administrador`
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

    const userToken = await getIdByToken(req, res);
    try {
        console.log(userToken)
        var user = await User.default.findOne({
            where: {
                id: id,
                email: userToken.email,
                status: 1
            }
        });

        if (body.email) {
            return res.status(400).json({
                msg: 'No se puede cambiar el email'
            })
        }
        if (body.password) {
            const salt = await bcryptjs.genSalt(10);
            body.password = await bcryptjs.hash(body.password, salt);
        }

        if (!user) {
            return res.status(400).json({
                msg: 'No tienes los permisos para editar al usuario con el id: ' + id
            })
        }
        await user.update(body);

        res.json(user);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `Error, favor de comunicarse con el administrador`
        })
    }
}


const deleteUser = async (req, res) => {
    const {
        id
    } = req.params;
    const user = await getIdByToken(req, res);
    try {
        if (user.status == 3) {

            const user = await User.default.findByPk(id);
            if (!user) {
                return res.status(400).json({
                    msg: 'No existe un usuario con el id: ' + id
                })
            }
            await user.update({
                status: 0
            });

            res.json(user);
        } else {
            return res.status(404).json({
                msg: `Esta peticion solo puede ser realizada por el super usuario`
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `Error, favor de comunicarse con el administrador`
        })
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
    getUsers,
    getUserByID,
    postUser,
    putUser,
    deleteUser
}