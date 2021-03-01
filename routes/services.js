const router = require('express').Router();
const {
    createService,
    getService,
    updateService,
    deleteService
} = require('../controllers/services')

router.get('/', getService)
router.post('/', createService)
router.put('/:id', updateService)
router.delete('/:id', deleteService)

module.exports = router;