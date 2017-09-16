import Koa from 'koa';
import React from 'react';
import Pug from 'koa-pug';
import 'babel-polyfill';
import readMarked from '../docs'
import router from './router'// 路由


import '../mongodb';


const app = new Koa();

// 使用模板
const pug = new Pug({
  locals: {
    title: 'Koa Demo'
  },
  viewPath: './views/'
});

pug.use(app);
/**
 * markdown获取 readme文件
 */
app.use(readMarked);

// logger 当前路由信息
app.use(async  (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next()
});


// logger 这里进入又给中间件函数
app.use(async  (ctx, next) => {
  // (2) 进入 logger 中间件
  let start = new Date;
  await next();
  // (4) 再次进入 logger 中间件，记录2次通过此中间件「穿越」的时间
  let ms = new Date - start;
  console.log('%s %s - %s', ctx.method, ctx.url, ms);
  // console.log(ctx.request);
});

app.use(router.routes());

app.listen(3000);


