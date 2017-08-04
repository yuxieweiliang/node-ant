const  Koa = require('koa');
//const router = require('./router');
let app = new Koa();
const router = require('koa-router')();
const Pug = require('koa-pug');
const React = require('react');
const ReactServer = require('react-dom/server');

class Input extends React.Component {
  render() {
    return (
      <div>fdsafdsafdsa</div>
    )
  }
}

var pug = new Pug({
  locals: {
    title: 'Koa Demo'
  },
  viewPath: './views/'
});

pug.use(app);

const json = {
  a: 'a',
  b: 'b'
};

// 获取首页
router.get('/', async function(ctx, next) {
  console.log(Input);
  ctx.render('index', {
    name: 'name',
    json: JSON.stringify(json),
    script: ReactServer.renderToString(<Input/>)
  })
});

// 获取其他页面
router.get('/other', async function(ctx, next) {
  ctx.render('other')
});

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


