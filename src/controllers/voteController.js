const Seq = require('sequelize');

const Vote = require('../models/vote');
const Dept = require('../models/department');
const getResponse = require('./responseController');

exports.voteAction = async function (ctx) {
  try {
    const params = ctx.request.body;
    const phone = params.phone;
    let voted = await Vote.findOne({
      attributes: ['created_at'],
      where: {
        phone: {
          [Seq.Op.eq]: phone
        }
      },
      order: [
        ['created_at', 'DESC']
      ]
    });
    voted = voted.dataValues;
    if (Date.now() - voted.created_at.getTime() < 24*60*60*100) {
      ctx.body = {
        status: 1001,
        message: '每天只能投票一次'
      };
    }
    else {
      const vote = await Vote.create(params);
      getResponse.getResponse(ctx, vote);
    }
  } catch (err) {
    console.log(err);
    ctx.body = error;
  }
};

exports.getDeptList = async function (ctx) {
  try {
    const params = ctx.request.body;
    const phone = params.phone;
    const deptId = params.deptId;
    let votedDept = await Vote.findAll({
      attributes: [['dept_id', 'deptId']],
      where: {
        phone: {
          [Seq.Op.eq]: phone
        }
      }
    });
    //console.log(votedDept);
    set = new Set();
    for (let i=0; i<votedDept.length; i++) {
      let dId = votedDept[i].dataValues.deptId;
      set.add(dId);
    }
    votedDept = Array.from(set);
    const deptList = await Dept.findAll({
      where: {
        id: {
          [Seq.Op.notIn]: votedDept
        }
      },
      order: [
        ['id']
      ],
    });
    getResponse.getResponse(ctx, deptList);
  } catch (err) {
    console.log(err);
    ctx.body = error;
  }
};


