//rutas para autenticar usuarios

const express = require('express');
const router = express.Router();
const {
    check
} = require('express-validator');
const authController = require('../controllers/authController');

//crea un usuario

// api/auth
//sintaxis de express
// router.post('/', () => {
//     console.log(`creando usuario`)
// });

router.post('/',
    [
        check('email', 'El email es obligatorio').not().isEmpty(),
        check('email', 'Agregar un email valido').isEmail(),
        check('password', "El password debe de ser minimode 6 caracteres").isLength({min: 6})
    ],
    authController.autenticarUsuario
)


module.exports = router;