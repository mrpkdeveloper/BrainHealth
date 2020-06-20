const {Articles, Users} = require('../db/models')

async function createNewArticle(userId, title, body){
   const article = await Articles.create({
      title, 
      body, 
      userId
   })

   return article
}

/*Whether you want to do it this way
showAllArticles({username: ''})
or this way
showAllArticles({title: ''})
it will work
*/

async function findAllArticles(query){
   const articles = await Articles.findAll({
      include: [ Users ]                  //We can only do this because of the relation we've provided before
   })
   return articles         //todo: handle query params
}

module.exports = { 
   createNewArticle,
   findAllArticles
}

//test
// async function task(){
   // console.log(await createNewArticle(1, 'Sample Article','Body of sample article'))
   // console.log(await createNewArticle(2, 'Another Sample Article','Body of Another sample article'))

//    const articles = await showAllArticles()
//    for (let a of articles){
//       console.log(`${a.title}\nAuthor: Anon_${a.user.username}\n${a.body}\n===============\n `)
//    }
// }
// task();