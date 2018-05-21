const config = require('./config');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const paginate = require('koa-ctx-paginate');

const indexRoute = require('./routes/index');


const app = new Koa();
const PORT = config.env.port;
const cors = require('koa-cors');

app.use(async (ctx, next) => {
  const startDate = new Date();
  console.log(`method: ${ctx.method} url:${ctx.url}`);
  await next();
  console.log(`method: ${ctx.method} url:${ctx.url} code: ${ctx.status} time:${new Date() -startDate}ms`);
});
app.use(cors());
app.use(bodyParser({
  onerror: function (err, ctx) {
    ctx.throw('error on parsing body', 422);
  },
}));

app.use(paginate.middleware(10, 50));
app.use(indexRoute.routes());

// app.use(carouselRoutes.routes());

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;