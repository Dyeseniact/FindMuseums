const router = require('express').Router();

const {
    makeVisitor,
    editVisitor,
    deleteVisitor,
    viewVisitor
} = require('../controllers/visitor')

router.get('/', viewVisitor)
router.post('/', makeVisitor)
router.put('/:id', editVisitor)
router.delete('/:id', deleteVisitor)

module.exports = router;