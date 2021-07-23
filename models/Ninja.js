const Mongoose = require('mongoose')

const ninjaSchema = new Mongoose.Schema({
  name: { type: String },
  belt: { type: String },
  status: { type: Boolean },
  score: { type: Number }
})

module.exports = Mongoose.model('Ninjas', ninjaSchema)
