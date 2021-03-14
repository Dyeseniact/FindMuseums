const Usuario = require("../models/Users");
const bcryptjs = require('bcryptjs');
const {
    validationResult
} = require('express-validator');
const jwt = require('jsonwebtoken');
const {
    json
} = require('express');
exports.autenticarUsuario = async (req, res) => {

    //revisar si hay errores

    const errores = validationResult(req);

    if (!errores.isEmpty()) {
        return res.status(400).json({
            errores: errores.array()
        })
    }



    //extraer el email y el password
    const {
        email,
        password
    } = req.body;

    try {
        //revisar que sea un usuario registrado
        let usuario = await Usuario.default.findOne({ where: { email: email } });
        if (!usuario) {
            return res.status(400).json({
                msg: "El usuario noexiste"
            });
        }
        //revisar el password
        const passCorrecto = await bcryptjs.compare(password, usuario.password);
        if (!passCorrecto) {
            return res.status(400).json({
                msg: "Password incorrecto"
            });
        }
        //firma del jwt
        const payload = {
            usuario: {
                id: usuario.id
            }
        };
        //firmar el jwt
        jwt.sign(payload, process.env.SECRETA, {
            expiresIn: 3600000
        }, (error, token) => {
            if (error) throw error;

            res.json({
                token
            });
        });

    } catch (error) {
        console.log(error);
    }
}