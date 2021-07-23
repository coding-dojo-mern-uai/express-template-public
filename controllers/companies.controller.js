const companyService = require('../services/companies.service')

module.exports = {
  createCompany: (req, res) => {
    const company = companyService.createCompany()
    res.send({ company })
  }
}
