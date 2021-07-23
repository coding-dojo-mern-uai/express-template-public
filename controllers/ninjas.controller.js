const ninjasService = require('../services/ninjas.service')

module.exports = {
  findByBelt: async ({ params: { beltColor } }, res) => {
    const validBelts = ['black', 'orange', 'red']

    if (!validBelts.includes(beltColor)) {
      res.send('Invalid Belt')
    } else {
      const ninjas = await ninjasService.findByBelt(beltColor)
      res.send(ninjas)
    }
  }
}
