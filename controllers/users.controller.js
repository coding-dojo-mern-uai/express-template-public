const userService = require('../services/users.service')
const companiesService = require('../services/companies.service')

module.exports = {
  createUser: (req, res) => {
    const user = userService.createUser()
    res.send({ user })
  },
  createUserAndCompany: (req, res) => {
    const user = userService.createUser()
    const company = companiesService.createCompany()
    res.send({ user, company })
  }
}
