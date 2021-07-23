const Ninja = require('../models/Ninja')

module.exports = {
  findByBelt: async beltColor => {
    // const ninjasWithPromises = Ninja.find({ belt: 'orange' })
    //   .exec()
    //   .then(res => console.log(res))

    // const ninjasWithCallback = Ninja.find({ belt: 'orange' }, (err, docs) => console.log(docs))
    try {
      const ninjasWithAwait = await Ninja.find({ belt: beltColor })
      return ninjasWithAwait
    } catch (err) {
      console.log('error')
    }
  }
}
