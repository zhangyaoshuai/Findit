exports.getResponse = function (ctx, params) {
  if (params) {
    ctx.body = {
      status: 0,
      data: params
    };
  } else {
    ctx.body = {
      status: 999,
      message: 'Database error'
    };
  }
};
