
const Sequelize = require('sequelize');
const config = require('../config')

const sequelize = new Sequelize('jkjw', 'postgres', 'jkjw_2018',
Object.assign({}, config.pg, {
  dialect: 'postgres',
}));

module.exports = sequelize;
