const express = require('express');
const router = express.Router();
const {
  check
} = require('express-validator');

const {

  getTicketsByUser,
  getTicketUserByid,
  getTicketMusseumByid,
  getTicketsByMusseum,
  calncelTicketByUser,
  postTicketByUser  
} = require('../controllers/ticketsController');
const aunt = require('../middleware/auth');


router.get('/user',
  aunt,
  getTicketsByUser
)
router.get('/user/:id',
  aunt,
  getTicketUserByid
)

router.delete('/user/:id',
  calncelTicketByUser
);

router.post('/user',
    aunt,
    [
        check('idVisitor', 'idVisitor es oblgatoria').not().isEmpty(),
        check('idVisitor', 'idVisitor debe ser un numero').isNumeric(),
        check('idMuseumService', 'idMuseumService es oblgatoria').not().isEmpty(),
        check('idMuseumService', 'idMuseumService debe ser un numero').isNumeric(),        
    ],
    postTicketByUser
);

router.get('/musseum',
  aunt,
  getTicketsByMusseum

)
router.get('/musseum/:id',
  aunt,
  getTicketMusseumByid
)

module.exports = router;