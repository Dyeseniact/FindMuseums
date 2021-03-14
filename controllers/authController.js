const User = require("../models/Users");
const bcryptjs = require('bcryptjs');
const {
    validationResult
} = require('express-validator');
const jwt = require('jsonwebtoken');
const {
    json
} = require('express');

exports.authenticateUser = async (req, res) => {

    // Revisar si hay errores

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }



    // Extraer email y password
    const {
        email,
        password
    } = req.body;

    try {
        //Revisar que el usuario registrado sea único
        let user = await User.default.findOne({
            where: {
                email: email
            }
        });

        if (!user) {
            return res.status(400).json({
                msg: "El usuario noexiste"
            });
        }

        // Revisa el password
        const correctPass = await bcryptjs.compare(password, user.password);
        if (!correctPass) {
            return res.status(400).json({
                msg: "Password incorrecto"
            });
        }
        // Crear y firmar el JWT
        const payload = {
            user: {
                id: user.id
            }
        };

        // Firmar el JWT
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