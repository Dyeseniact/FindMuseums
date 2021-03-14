const express = require('express');
const router = express.Router();
const {
    check
} = require('express-validator');


const {
    deleteUsuario,
    getUsuario,
    getUsuarios,
    postUsuario,
    putUsuario
} = require('../controllers/usersController');


router.get('/',    
    getUsuarios
)


router.get('/:id',
    getUsuario
);
router.post('/',
    [
        check('nombre', 'El nombre es oblgatorio').not().isEmpty(),
        check('email', 'El email es oblgatorio').not().isEmpty(),
        check('email', 'Agrega un email valido').isEmail(),
        check('password', 'El password debe ser minimo de 6 caracteres').isLength({
            min: 6
        })
    ],
    postUsuario
);

router.put('/:id',
    [
        check('password', 'El password debe ser minimo de 6 caracteres').isLength({
            min: 6
        })
    ],
    putUsuario
);

router.delete('/:id',
    deleteUsuario
);


module.exports = router;