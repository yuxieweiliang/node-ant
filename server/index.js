const  Koa = require('koa');
require('node-jsx').install();
// Javascript required hook
//const router = require('./router');
let app = new Koa();
const router = require('./router');
const Pug = require('koa-pug');

let pug = new Pug({
  locals: {
    title: 'Koa Demo'
  },
  viewPath: './views/'
});

pug.use(app);

// logger
/*app.use(async  (ctx, next) => {
  // (2) 进入 logger 中间件
  let start = new Date;
  await next();
  // (4) 再次进入 logger 中间件，记录2次通过此中间件「穿越」的时间
  let ms = new Date - start;
  console.log('%s %s - %s', ctx.method, ctx.url, ms);
  // console.log(ctx.request);
});*/

/*app.use(ctx => {
  ctx.body = 'Hello word';
});*/
app.use(router.routes());

app.listen(3000);


