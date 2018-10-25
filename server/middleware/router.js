import path from 'path'
import fs from 'fs'
import Router from 'koa-router'
import oAuth2 from './OAuth2.0';// 认证


const router = new Router();


function createRouter(type, path, func) {
  router[type](path, func)
}
// { 'GET /book': [Function: get_book],'POST /book': [Function: post_book] }
// { 'GET /hello/:name': [Function: fn_hello] }
function addMapping(router, mapping) {
  let type = { get: 'get', post: 'post', update: 'put', put: 'put', del: 'del', delete: 'del' };

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




router.post('/login', function(ctx, next) {
  // console.log('post/login', req.body)
  // res.writeHead(303, {Location: req.body.next || '/'});
  // res.end();
});



module.exports = function(app) {
  const ctrl_dirs = path.join(process.cwd(), './server/controllers/');
  addControllers(router, ctrl_dirs);



  app.use(oAuth2.oauth().unless({ ext: ['css'] }));
  app.use(oAuth2.login().unless({ ext: ['css'] }));
  app.use(router.routes());
};