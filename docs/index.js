const path = require('path');
const fs = require('fs');
const  Koa = require('koa');
const markdown = require('marked');
const func = require('../func/index');
// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();
let app = new Koa();


// logger 当前路由信息
app.use(async  (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next()
});

// 获取所在目录下的文件列表
app.use(async  (ctx, next) => {
  // 获取存放组建的目录
  const data = await func.readFile(path.join(__dirname + '/config.json'), 'utf-8');
  let url = path.join(__dirname + '/../' + JSON.parse(data).path);

  // 读取组建存放目录下的文件
  const files = await func.readDir(url);
  // 获取文件夹中的每一个组件
  const fileList = files.map(item => path.join(url + '/' + item));
  // 获取所有组件中的文件 -> 二维数组
  const fileData = await func.getFilesPath(fileList);
  fileData.map(items => {
    items.map(item => {
      console.log(item)
    })
  });


  await  next();
});





/*
app.use(async (ctx, next) => {
  // 进入时间
  let start = new Date;
  next();
  // 再次进入时间
  let ms = new Date - start;
  ctx.set('X-Response-Time', ms + 'ms');
  const data = await readFile('other.md', 'utf-8');
  ctx.body = markdown(data.toString());

  console.log('%s %s - %s', ctx.method, ctx.url, ms);
  // console.log(ctx.request);

});*/

router.get('/hello/:name', async (ctx, next) => {
  let name = ctx.params.name;
  ctx.body = `<h1>Hello, ${name}!</h1>`;
});

router.get('/', async (ctx, next) => {
  ctx.body = '<h1>Index</h1>';
});

router.get('/docs', async (ctx, next) => {
  ctx.body = '<h1>docs</h1>';
});

router.get('/example', async (ctx, next) => {
  ctx.body = '<h1>example</h1>';
});

app.use(router.routes());



app.listen(3000);


