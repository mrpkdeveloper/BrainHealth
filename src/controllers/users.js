const {Users} = require('../db/models')
const {getRandomUsername} = require('../utils/username')
const username = require('../utils/username')

async function createAnonUser(){
   const user = await Users.create({
      username: getRandomUsername
   })
   return user
}

module.exports = {
   createAnonUser
}