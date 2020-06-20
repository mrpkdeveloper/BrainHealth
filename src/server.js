const express = require('express')

const { db } = require('./db/models')
// const models = require('./db/models')
// const db = models.db
const { usersRoute } = require('./routes/users')
const { articlesRoute } = require('./routes/articles')


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// app.use('/hello', (req,res)=>{
//    res.send("HELLo")
// })

app.use('/api/users', usersRoute)
app.use('/api/articles', articlesRoute)
app.use('/', express.static(__dirname + '/public'))

db.sync().then(()=>{
   app.listen(2323, ()=>[
      console.log("Server started at http://localhost:2323")
   ])
}).catch((err)=>{
   console.log(new Error("Could not start database"))
})