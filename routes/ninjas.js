const { Router } = require('express')

const ninjasController = require('../controllers/ninjas.controller')

const router = Router()

router.get('/belts/:beltColor', ninjasController.findByBelt)

module.exports = router
