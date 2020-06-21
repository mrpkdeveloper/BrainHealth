const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const app = express()

const { db } = require('./db/models')
// const models = require('./db/models')
// const db = models.db
const { usersRoute } = require('./routes/users')
const { articlesRoute } = require('./routes/articles')

const server = http.createServer(app)
const io = socketio(server)

io.on('connection', (socket) => {
   console.log('connected with socket Id: ', socket.id)

   socket.on('msg_send', (data) => {
      io.emit('msg_rcvd', data)
   })
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use('/hello', (req,res)=>{
//    res.send("HELLo")
// })

app.use('/api/users', usersRoute)
app.use('/api/articles', articlesRoute)
app.use('/', express.static(__dirname + '/public'))

const port = process.env.PORT || 2323

db.sync().then(() => {
   server.listen(port, () => [
      console.log("Server started at http://localhost:2323")
   ])
}).catch((err) => {
   console.log(new Error("Could not start database"))
})