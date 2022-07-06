const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://b0c4ec725b23ce:1c9ea6d7@eu-cdbr-west-03.cleardb.net/heroku_3f2851a2fe214ee?reconnect=true',
  {
    host: 'eu-cdbr-west-03.cleardb.net',
    dialect: 'mysql',
  })

module.exports = sequelize;