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
        check('idMuseum', 'El idMuseum es oblgatoria').not().isEmpty(),
        check('idMuseum', 'idMuseum debe ser un numero').isNumeric(),
        check('idService', 'El idService es oblgatoria').not().isEmpty(),
        check('idService', 'idMuseum debe ser un numero').isNumeric(),
        check('price', 'price es oblgatoria').not().isEmpty(),
        check('price', 'price debe ser un numero').isFloat(),
        check('limitVisitors', 'limitVisitors es oblgatoria').not().isEmpty(),
        check('limitVisitors', 'limitVisitors debe ser un numero').isNumeric(),
        check('timeService', 'timeService es oblgatoria').not().isEmpty(),
        check('timeService', 'timeService debe ser un numero').isFloat()
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