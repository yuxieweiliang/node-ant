import path from 'path'
import fs from 'fs'
import Router from 'koa-router'
import graphqlHTTP from 'koa-graphql'
import oAuth2 from './OAuth2.0';// 认证
import schema from '../Schema'

const router = new Router();


function createRouter(type, path, func) {
  router[type](path, func)
}
// { 'GET /book': [Function: get_book],'POST /book': [Function: post_book] }
// { 'GET /hello/:name': [Function: fn_hello] }
function addMapping(router, mapping) {
  let type = { get: 'get', post: 'post', update: 'put', put: 'put', del: 'del', delete: 'del' };
  // console.log(mapping);
  for (let string in mapping) {
    // 解析类型已经API地址
    let [method, path] = string.replace(/\s+/g, ' ').trim().toLowerCase().split(' ');

    if(type[method] && router[type[method]]) {
      createRouter(type[method], path, mapping[string]);
    }
  }
}

/**
 * 递归获取制定目录下所有指定类型的页面
 * @param dirs // 指定目录
 * @param type // 指定类型
 * @returns {Array}
 */
function getAllFileOfPath(dirs, type) {
  const files = [];
  const getFiles = (dirs) => {
    const fileDir = fs.readdirSync(dirs);

    fileDir.map(file => {
      if(file.endsWith(type)) {
        files.push(dirs + '/' +  file)
      } else {
        if(!file.endsWith('.md')) {
          getFiles(dirs + '/' + file)
        }
      }
    })
  };
  getFiles(dirs);
  return files;
}

/**
 * 获取所有目录下文件的返回值
 * @param router
 * @param dirs
 */
function addControllers(router, dirs) {
  let apiPath = getAllFileOfPath(dirs, '.js');

  for (let f of apiPath) {
    let mapping = require(f);
    addMapping(router, mapping);
  }
}

module.exports = function(app) {
  const ctrl_dirs = path.join(process.cwd(), './server/controllers/');
  const unless = { ext: ['css'], path: [/\/register/, /\/login/,  /\/register/, /\/oauth2.0/,] };

  /**
   * 读取/server/containers 下的所有文件
   * 将其设为路由
   */
  addControllers(router, ctrl_dirs);

  /**
   * 这里时用来认证的
   * 检查auth : 头部是否含有 authorization
   * 检查login ： 检查是否登陆
   */
  app.use(oAuth2.oauth().unless(unless));
  app.use(oAuth2.login().unless(unless));

  /**
   * 设置 graphql 服务
   */
  router.all('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
  }));

  /**
   * 添加 路由
   */
  app.use(router.routes());
};