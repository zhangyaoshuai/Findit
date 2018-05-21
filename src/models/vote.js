const Seq = require('sequelize');

const sequelize = require('../db/pgConnection');

const Vote = sequelize.define('vote', {
  id: {
    type: Seq.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  deptId: {
    type: Seq.INTEGER,
    field: 'dept_id',
    allowNull: false
  },
  voteType: {
    field: 'vote_type',
    type: Seq.SMALLINT,
    allowNull: false
  },
  phone: {
    type: Seq.BIGINT,
    allowNull: false
  }
}, {
  underscored: true,
  freezeTableName: true,
  updatedAt: false
});

module.exports = Vote;
