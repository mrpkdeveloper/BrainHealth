const { Router } = require('express')

//We wont access db directly from here but from controllers
const { createAnonUser, getUserById, getUserByUsername } = require('../../controllers/users') 

const route = Router()

route.get('/:id', async (req, res)=>{              //async here or it will give error: await is only valid in async functions
   let user;
   if (isNaN(parseInt(req.params.id))){            //when param is username
      user = await getUserByUsername(req.params.id)
   } else {
      user = await getUserById(req.params.id)      //when param is user id
   }

   if(user){
      res.status(200).send(user)
   } else{
      res.status(404).send({
         error: "No such id or username"
      })
   }

})

route.post('/', async (req, res)=>{
   const user = await createAnonUser()
   res.status(201).send(user)
})

module.exports = {
   usersRoute: route
}