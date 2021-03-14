// Estructura del CRUD
const express = require('express');
const router = express.Router();
const {
    check
} = require('express-validator');


const {
    getMuseum,
    getMuseumByID,
    postMuseum,
    putMuseum,
    deleteMuseum
} = require('../controllers/museumsController');


router.get('/',
    getMuseum

)


router.get('/:id',
    getMuseumByID
);
router.post('/',
    [
        check('name', 'El nombre es oblgatorio').not().isEmpty(),
        check('adress', 'La direccion es obligatoria').not.isEmpty(),
        check('phoneNumber', 'El numero telefonico es obligatorio').not().isEmpty().length({ 
            min:10 
        }),
        check('email', 'El email es oblgatorio').not().isEmpty(),
        check('email', 'Agrega un email valido').isEmail(),
        check('password', 'El password debe ser minimo de 6 caracteres').isLength({
            min: 6
        })
    ],
    postMuseum
);

router.put('/:id',
    [
        check('password', 'El password debe ser minimo de 6 caracteres').isLength({
            min: 6
        })
    ],
    putMuseum
);

router.delete('/:id',
    deleteMuseum
);


module.exports = router;