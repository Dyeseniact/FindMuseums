// Estructura del CRUD
const router = require('express').Router();
const {
    createMuseum,
    getMuseums,
    editMuseum,
    deleteMuseum
} = require('../controllers/museums')

router.get('/', getMuseums)
router.post('/', createMuseum)
router.put('/:id', editMuseum)
router.delete('/:id', deleteMuseum)

module.exports = router;