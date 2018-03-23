import _ from 'lodash';
import queryString from 'query-string'


/**
 * 登录
 */
var login = async (ctx) => {
  let data = ctx.request.body ? JSON.parse(ctx.request.body) : {};
  let params = ctx.request.query || ctx.query;
  console.log(data, params);
  ctx.body = JSON.stringify({
    data:  '用户不存在'
  });
};



module.exports = {
  'GET /api/login': login
};