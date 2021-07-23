const { Router } = require('express')

const companiesController = require('../controllers/companies.controller')

const router = Router()

router.get('/new', companiesController.createCompany)

module.exports = router
