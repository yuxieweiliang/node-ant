// import 'babel-polyfill'
import Koa from 'koa';
import path from 'path';
import React from 'react';
import http from 'http';
// import func from '../func'
import serve from 'koa-static';
import router from './router';// 路由
import Socket from 'socket.io';
import '../mongo';
import readMarked from '../docs'
import templatePug from './pug'
import koaWebpack from './koa-webpack'
import logger from './logger'
import connection from './socket';

const app = new Koa();
const server = http.Server(app.callback());
const io = new Socket(server);

io.on('connection', connection);
io.on('messages', function(data) {
  console.log('-|-|-|-|-|-|-|-|-|-|-|-', data)
});
io.on('leave', function () {

  console.log('-----------');
  io.emit('disconnect');
});

app.use(serve(path.resolve(path.normalize(__dirname + '/../dist')), { extensions: ['js']}));
app.use(serve(path.resolve(path.normalize(__dirname + '/../assets/images')), { extensions: ['ico']}));
app.use(serve(path.resolve(path.normalize(__dirname + '/../node_modules')), { extensions: ['js']}));

// 使用webpack编译前端项目
koaWebpack(app);

// 模板使用pug
templatePug(app);

// markdown获取 readme文件
app.use(readMarked);

// logger 当前路由信息
app.use(logger);

app.use(router.routes());
server.listen(3000);


