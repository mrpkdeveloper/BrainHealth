const Sequelize = require('sequelize')

const db = new Sequelize({
   dialect: 'mysql',
   database: 'healthdb',
   username: 'healthuser',
   password: 'healthpass'
})

const COL_ID_DEF = {                      //general column id
   type: Sequelize.DataTypes.INTEGER,
   autoIncrement: true,
   primaryKey: true
}

const COL_TITLE_DEF = {                   //general column title
   type: Sequelize.DataTypes.STRING(140),
   allowNull: false
}

const COL_USERNAME_DEF = {                //general column username
   type: Sequelize.DataTypes.STRING(30),
   unique: true,
   allowNull: false
}

const Users = db.define('user', {          //users table
   id: COL_ID_DEF,
   username: COL_USERNAME_DEF
})

const Articles = db.define('article', {    //articles table
   id: COL_ID_DEF,
   title: COL_TITLE_DEF,
   body: {
      type: Sequelize.DataTypes.TEXT,
      allowNull: false
   }
})

const Comments = db.define('comment', {    //comments table
   id: COL_ID_DEF,
   title: COL_TITLE_DEF,
   body: {
      type: Sequelize.DataTypes.TEXT('tiny')
   }
})

//setting up a relation between users, articles and comments
Users.hasMany(Articles)
Articles.belongsTo(Users)

Users.hasMany(Comments)
Comments.belongsTo(Users)

Articles.hasMany(Comments)
Comments.belongsTo(Articles)
db.sync().then(() => {

}).catch((err) => {
   console.log(new Error("Could not start database"))
})
module.exports = {
   db, Users, Articles, Comments
}