const express = require('express')
const mongoose = require('mongoose')
const socketIO = require('socket.io')

const routes = require('./routes')

// Iniciar express
const app = express()
const port = 8001
const mongoUrl =
  'mongodb+srv://condingdojo:codingdojo@cluster0.pnqka.mongodb.net/codingdojo?retryWrites=true&w=majority'

// Conectar a la base de datos
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })

// Refleja el error de conexion base de datos
mongoose.connection.on('error', (err) => {
  console.log('err on db connection', err)
})
// Despega mensaje conexion exitosa
mongoose.connection.on('connected', (err, res) => {
  console.log('mongoose is connected')
})

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', routes)

const server = app.listen(port, () => console.log(`Listening on port: ${port}`))
const io = socketIO(server, { cors: true })

const room = 'general'
const NEW_MESSAGE_EVENT = 'new-message'
let messages = []

io.on('connection', (socket) => {
  console.log('connected', socket.id)
  socket.join(room)

  socket.on(NEW_MESSAGE_EVENT, (data) => {
    messages.push(data)
    io.in(room).emit(NEW_MESSAGE_EVENT, messages)
  })

  socket.on('disconnect', () => {
    socket.leave(room)
  })
})
