const express = require('express');
const router = express.Router();
const {
    check
} = require('express-validator');


const {
    
    getService,
    getServiceByID,
    postService,
    putService,
    deleteService
} = require('../controllers/servicesController');


router.get('/',
    getService

)


router.get('/:id',
    getServiceByID
);


router.post('/',
    [
        check('description', 'La description es oblgatoria').not().isEmpty(),
        
    ],
    postService
);

router.put('/:id',
    [
        check('description', 'La description es oblgatoria').not().isEmpty(),
    ],
    putService
);

router.delete('/:id',
    deleteService
);


module.exports = router;