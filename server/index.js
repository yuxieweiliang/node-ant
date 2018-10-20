import Koa from 'koa';
import path from 'path';
import http from 'http';
// 中间件
import koaWebpack from './middleware/koa-webpack'
import engineJsx from './middleware/engineJsx'
import staticServer from './middleware/static';
import controllers from './middleware/router';// 路由
import logger from './middleware/logger'

/**
 * 文档
 */
import readMarked from './docs'

/**
 * 长连接 服务
 */
import socketConnect from './socket';

/**
 * 数据库 & 缓存
 */
import database from './database'

/**
 * 创建 Koa 实例
 */
const app = new Koa();
const server = http.Server(app.callback());

/**
 * 设置cookie 使用 session 读取 cookie 时的密匙
 */
app.keys = ['Yu_Xie_Wei_Liang'];

/**
 * 使用模板
 * 使用webpack编译前端项目
 */
koaWebpack(app);
app.use(engineJsx({
  views: process.cwd() + '/client/app/src',
  extension: 'js',
  beautify: true // 是否美化
}));

/**
 * 添加 socket.io
 */
socketConnect(server);

/**
 * 创建静态资源服务器
 */
staticServer(app);

app.use(async function(ctx, next) {
  if(ctx.path.indexOf('api') > -1) {
    ctx.set('Content-Type', 'text/plain; charset=utf-8');
  }
  await next();
});

// markdown获取 readme文件
// app.use(readMarked);

// logger 当前路由信息
app.use(logger);

// logger 当前路由信息
// app.use(koaBody());
// app.use(koaBetterBody({textLimit: '300kb'}));

/**
 * 添加数据库 & 缓存
 */
database(app);


app.use(controllers());
server.listen(3000);


