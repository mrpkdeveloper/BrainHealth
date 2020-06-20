const express = require('express')

const { db } = require('./db/models')
// const models = require('./db/models')
// const db = models.db

const app = express()

// app.use('/hello', (req,res)=>{
//    res.send("HELLo")
// })

db.sync().then(()=>{
   app.listen(2323, ()=>[
      console.log("Server started at http://localhost:2323")
   ])
}).catch((err)=>{
   console.log(new Error("Could not start database"))
})