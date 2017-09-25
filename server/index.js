import 'babel-polyfill'
import Koa from 'koa'
import path from 'path'
import React from 'react'
import Pug from 'koa-pug'
import func from '../func'
import webpack from 'webpack'
import { devMiddleware, hotMiddleware } from 'koa-webpack-middleware'
import devConfig from '../webpack.config.js'
import serve from 'koa-static'
import router from './router'// 路由
import '../mongodb';
import readMarked from '../docs'

const compile = webpack(devConfig);

const app = new Koa();

// 使用模板
const pug = new Pug({
  locals: {
    title: 'Koa Demo'
  },
  viewPath: './views/'
});

pug.use(app);

app.use(serve(path.resolve(path.normalize(__dirname + '/../dist')), { extensions: ['js']}));


app.use(devMiddleware(compile, {
  // display no info to console (only warnings and errors)
  noInfo: false,

  // display nothing to the console
  quiet: false,

  // switch into lazy mode
  // that means no watching, but recompilation on every request
  lazy: true,

  // watch options (only lazy: false)
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },

  // public path to bind the middleware to
  // use the same as in webpack
  publicPath: devConfig.output.publicPath,

  // custom headers
  headers: { "X-Custom-Header": "yes" },

  // options for formating the statistics
  stats: {
    colors: true
  }
}));

app.use(hotMiddleware(compile, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}));

/**
 * markdown获取 readme文件
 */
// app.use(readMarked);

// logger 当前路由信息
app.use(async  (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  const data = await func.readDir(path.join(__dirname + '/../'));
  console.log(data);
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


