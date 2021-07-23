const { Router } = require('express')

const userController = require('../controllers/users.controller')

const router = Router()

router.get('/new', userController.createUser)
router.get('/company', userController.createUserAndCompany)

module.exports = router
