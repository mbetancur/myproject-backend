require('dotenv').config()
const http = require('http')
const express = require('express')
const app = express()
const socketio = require('socket.io')

const PORT = process.env.PORT
let server = http.createServer(app)
const io = socketio(server)
app.get('/', (req, res) => {
  res.status(200).send('NodeJs sever up!')
})

io.on('connection', () => {
  console.log('Socket connected')
})

module.exports = {
  app,
  listen: async () => {
    server = await app.listen(PORT, () => {
      console.log(`Listening port ${PORT}`)
    })
  },
  close: async () => {
    await server.close(() => {
      console.log('Closed connection')
    })
  }
}
