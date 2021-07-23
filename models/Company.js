const faker = require('faker')

class Company {
  constructor() {
    this.name = faker.company.companyName()
    this.address = {
      street: faker.address.streetName(),
      city: faker.address.cityName(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country()
    }
  }
}

module.exports = Company
