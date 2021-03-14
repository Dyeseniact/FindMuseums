const express = require('express');
const router = express.Router();
const {
    check
} = require('express-validator');


const {
    deleteUser,
    getUser,
    getUser,
    postUser,
    putUser
} = require('../controllers/usersController');


router.get('/',
    getUser
)


router.get('/:id',
    getUser
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
    postUser
);

router.put('/:id',
    [
        check('password', 'El password debe ser minimo de 6 caracteres').isLength({
            min: 6
        })
    ],
    putUser
);

router.delete('/:id',
    deleteUser
);


module.exports = router;