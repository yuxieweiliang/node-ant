import Koa from 'koa';
import path from 'path';
import http from 'http';
import serve from 'koa-static';
import controllers from './router';// 路由
import Socket from 'socket.io';
import '../mongo';
import readMarked from '../docs'
import templatePug from './pug'
import koaWebpack from './koa-webpack'
import logger from './logger'
import connection from './socket';
import redis from './redis'
import method from '../assets/method'
import koaBody from 'koa-body'
import koaBetterBody from 'koa-better-body'

const app = new Koa();
// 设置cookie 使用 session 读取 cookie 时的密匙
app.keys = ['Yu_Xie_Wei_Liang'];

// 添加socket.io
const server = http.Server(app.callback());
const io = new Socket(server);



// webSocket
io.on('connection', connection);

io.on('leave', function () {
  console.log('-----------');
  io.emit('disconnect');
});

app.use(serve(method.assemblyPath(__dirname, '/../dist'), { extensions: ['js']}));
app.use(serve(method.assemblyPath(__dirname, '/../assets/images'), { extensions: ['ico']}));
app.use(serve(method.assemblyPath(__dirname, '/../node_modules'), { extensions: ['js']}));

app.use(async function(ctx, next) {
  if(ctx.path.indexOf('api') > -1) {
    ctx.set('Content-Type', 'text/plain; charset=utf-8');
  }
  await next();
});
// 使用webpack编译前端项目
koaWebpack(app);

// 模板使用pug
templatePug(app);

// markdown获取 readme文件
app.use(readMarked);

// logger 当前路由信息
app.use(logger);

// logger 当前路由信息
// app.use(koaBody());
// app.use(koaBetterBody({textLimit: '300kb'}));

// redis
redis(app);


app.use(controllers());
server.listen(3000);


