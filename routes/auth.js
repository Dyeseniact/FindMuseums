//rutas para autenticar usuarios

const express = require('express');
const router = express.Router();
const {
    check
} = require('express-validator');
const authController = require('../controllers/authController');

router.post('/',
    [
        check('email', 'El email es obligatorio').not().isEmpty(),
        check('email', 'Agregar un email válido').isEmail(),
        check('password', "El password debe de ser mínimo de 6 caracteres").isLength({
            min: 6
        })
    ],
    authController.authenticateUser
)


module.exports = router;