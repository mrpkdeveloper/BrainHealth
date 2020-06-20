const { Router } = require('express')
const {findAllArticles, createNewArticle} = require('../../controllers/articles')

const route = Router()

route.get('/',async (req, res)=>{
   const articles = await findAllArticles()
   res.status(200).send(articles)
})

route.post('/', async (req, res)=>{
   const { userId, title, body } = req.body
   if((!userId) || (!title) || (!body)){
      return res.status(400).send({
         error: 'Need userId, title and body to create article'
      })
   }
   const article = await createNewArticle(userId, title, body)
   res.status(201).send(article)
})

module.exports = {
   articlesRoute: route
}