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



app.use(async (ctx, next) => {
  // 允许来自所有域名请求
  ctx.set("Access-Control-Allow-Origin", "*");
  // 这样就能只允许 http://localhost:8080 这个域名的请求了
  // ctx.set("Access-Control-Allow-Origin", "http://localhost:8080");

  // 设置所允许的HTTP请求方法
  ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");

  // 字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段.
  ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");

  // 服务器收到请求以后，检查了Origin、Access-Control-Request-Method和Access-Control-Request-Headers字段以后，确认允许跨源请求，就可以做出回应。

  // Content-Type表示具体请求中的媒体类型信息
  ctx.set("Content-Type", "application/json;charset=utf-8");

  // 该字段可选。它的值是一个布尔值，表示是否允许发送Cookie。默认情况下，Cookie不包括在CORS请求之中。
  // 当设置成允许请求携带cookie时，需要保证"Access-Control-Allow-Origin"是服务器有的域名，而不能是"*";
  ctx.set("Access-Control-Allow-Credentials", true);

  // 该字段可选，用来指定本次预检请求的有效期，单位为秒。
  // 当请求方法是PUT或DELETE等特殊方法或者Content-Type字段的类型是application/json时，服务器会提前发送一次请求进行验证
  // 下面的的设置只本次验证的有效时间，即在该时间段内服务端可以不用进行验证
  ctx.set("Access-Control-Max-Age", 300);

  /*
   CORS请求时，XMLHttpRequest对象的getResponseHeader()方法只能拿到6个基本字段：
   Cache-Control、
   Content-Language、
   Content-Type、
   Expires、
   Last-Modified、
   Pragma。
   */
  // 需要获取其他字段时，使用Access-Control-Expose-Headers，
  // getResponseHeader('myData')可以返回我们所需的值
  // ctx.set("Access-Control-Expose-Headers", "myData");

  await next();
});















/**
 * markdown获取 readme文件
 */
// app.use(readMarked);

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


