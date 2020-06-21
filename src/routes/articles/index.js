const { Router } = require('express')
const { findAllArticles, createNewArticle, findByIdArticles } = require('../../controllers/articles')

const route = Router()

route.get('/', async (req, res) => {
   const articles = await findAllArticles()
   res.status(200).send(articles)
})

route.get('/:id', async (req, res) => {              //async here or it will give error: await is only valid in async functions
   const myarticles = await findByIdArticles(req.params.id)
   res.status(200).send(myarticles)

})

route.post('/', async (req, res) => {
   const { userId, title, body } = req.body
   if ((!userId) || (!title) || (!body)) {
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