const Seq = require('sequelize');

const sequelize = require('../db/pgConnection');

const Admin = sequelize.define('admin', {
  id: {
    type: Seq.UUID,
    primaryKey: true,
    defaultValue: Seq.UUIDV1
  },
  username: {
    type: Seq.TEXT,
    allowNull: false
  },
  password: {
    type: Seq.TEXT,
    allowNull: false
  }
},  {
  underscored: true,
  freezeTableName: true,
  createdAt: true,
  updatedAt: false
});

module.exports = Admin;
