const router = require('express').Router();

const {
  createTicket,
  getTicket,
  editTicket,
  deleteTicket
} = require('../controllers/ticket')

router.get('/', getTicket)
router.post('/', createTicket)
router.put('/:id', editTicket)
router.delete('/:id', deleteTicket)

module.exports = router;