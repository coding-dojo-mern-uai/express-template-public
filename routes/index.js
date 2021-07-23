const { Router } = require('express')

const router = Router()

/* Rutas principales */
router.use('/users', require('./users'))
router.use('/companies', require('./companies'))
router.use('/ninjas', require('./ninjas'))

module.exports = router
