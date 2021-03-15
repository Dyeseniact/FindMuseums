const express = require('express');
const router = express.Router();
const {
    check
} = require('express-validator');

const {

    getMuseumServices,
    getMuseumServiceByID,
    postMuseumServices,
    putMuseumServices,
    deleteMuseumServices
} = require('../controllers/museumsController');
const aunt = require('../middleware/auth');


router.get('/',
    aunt,
    getMuseumServices
)


router.get('/:id',
    getMuseumServiceByID
);


router.post('/',
    aunt,
    [
        check('idMuseum', 'El idMuseum es oblgatorio').not().isEmpty(),
        check('idMuseum', 'El idMuseum debe ser un numero').isNumeric(),
        check('idService', 'El idService es oblgatorio').not().isEmpty(),
        check('idService', 'El idMuseum debe ser un número').isNumeric(),
        check('price', 'El price es obligatorio').not().isEmpty(),
        check('price', 'El price debe ser un numero').isFloat(),
        check('limitVisitors', 'limitVisitors es oblgatorio').not().isEmpty(),
        check('limitVisitors', 'limitVisitors debe ser un número').isNumeric(),
        check('timeService', 'timeService es oblgatorio').not().isEmpty(),
        check('timeService', 'timeService debe ser un número').isFloat()
    ],
    postMuseumServices
);

router.put('/:id',
    putMuseumServices
);


router.delete('/:id',
    deleteMuseumServices
);

module.exports = router;