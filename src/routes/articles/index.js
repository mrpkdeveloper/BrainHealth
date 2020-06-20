const { Router } = require('express')

const route = Router()

route.get('/',(req,res)=>{
   res.send('TODO: ALL ARTICLES')
})


module.exports = {
   articlesRoute: route
}