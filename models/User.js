const faker = require('faker')

class User {
  constructor() {
    this.name = faker.name.firstName()
    this.lastName = faker.name.firstName()
    this.phone = faker.phone.phoneNumber()
    this.email = faker.internet.email()
    this.password = faker.internet.password()
  }
}

module.exports = User
