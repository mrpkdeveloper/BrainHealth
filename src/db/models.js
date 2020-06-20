const Sequelize = require('sequelize')

const db = new Sequelize({
   dialect: 'mysql',
   database: 'healthdb',
   username: 'healthuser',
   password: 'healthpass'
})

const COL_ID_DEF = {
   type: Sequelize.DataTypes.INTEGER,
   autoIncrement: true,
   primaryKey: true
}

const COL_TITLE_DEF = {
   type: Sequelize.DataTypes.STRING(140),
   allowNull: false
}

const COL_USERNAME_DEF = {
   type: Sequelize.DataTypes.STRING(30),
   unique: true,
   allowNull: false
}

const Users = db.define('user',{
   id: COL_ID_DEF,
   username: COL_USERNAME_DEF 
})

const Articles = db.define('article',{
   id: COL_ID_DEF,
   title: COL_TITLE_DEF,
   body: {
      type: Sequelize.DataTypes.TEXT,
      allowNull: false
   }
})

const Comments = db.define('comment',{
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

module.exports = {
   db, Users, Articles, Comments
}