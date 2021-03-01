const router = require('express').Router();

const {
    createVisitor,
    editVisitor,
    deleteVisitor,
    getVisitor
} = require('../controllers/visitor')

router.get('/', getVisitor)
router.post('/', createVisitor)
router.put('/:id', editVisitor)
router.delete('/:id', deleteVisitor)

module.exports = router;