// import 'babel-polyfill'
import Koa from 'koa'
import path from 'path'
import React from 'react'
// import func from '../func'
import serve from 'koa-static'
import router from './router'// 路由
import '../mongo';
import readMarked from '../docs'
import templatePug from './pug'
import koaWebpack from './koa-webpack'
import logger from './logger'

const app = new Koa();

app.use(serve(path.resolve(path.normalize(__dirname + '/../dist')), { extensions: ['js']}));

// 使用webpack编译前端项目
koaWebpack(app);

// 模板使用pug
templatePug(app);

// markdown获取 readme文件
app.use(readMarked);

// logger 当前路由信息
app.use(logger);

app.use(router.routes());

app.listen(3000);


