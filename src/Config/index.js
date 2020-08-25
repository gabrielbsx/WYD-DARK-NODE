const Sequelize = require('sequelize');
const dbConfig = require('../Database/DBConfig')

const connection = new Sequelize(dbConfig);
module.exports = connection;