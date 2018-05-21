const Seq = require('sequelize');

const Dept = require('../models/department');
const Admin = require('../models/user');
const Vote = require('../models/vote');
const getResponse = require('./responseController');

exports.addDept = async function (ctx) {
  try {
    const params = ctx.request.body;
    console.log(params);
    const dept = await Dept.create(params)
    getResponse.getResponse(ctx, dept);
  } catch (err) {
    console.log(err);
    ctx.body = error;
  }
};

exports.getVotes = async function (ctx) {
  try {
    const votes = await Vote.findAll({});
    getResponse.getResponse(ctx, votes);
  } catch (err) {
    console.log(err);
    ctx.body = error;
  }
};



