const Seq = require('sequelize');

const sequelize = require('../db/pgConnection');

const Dept = sequelize.define('department', {
  id: {
    type: Seq.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    unique: true,
    type: Seq.TEXT,
    allowNull: false,
  },
  description: {
    type: Seq.TEXT,
    allowNull: true
  }
},  {
  underscored: true,
  freezeTableName: true,
  createdAt: false,
  updatedAt: false
});

module.exports = Dept;