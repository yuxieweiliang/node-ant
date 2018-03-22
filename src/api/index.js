
// 请求系统
const System = require('./system');

// 请求用户
const User = require('./user');

// 请求结构
const Setting = require('./setting');

const api = {};
const apiArr = [System, User, Setting];

for(let i in apiArr) {
  for(let key in apiArr[i]) {
    api[key] = apiArr[i][key]
  }
}

export default api
