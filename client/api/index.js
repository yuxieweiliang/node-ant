
// 请求系统
import System from './system';

// 请求用户
import User from './user';

// 请求结构
import Setting from './setting';

// 请求结构
import Img from './img';

const api = {};
const apiArr = [System, User, Setting, Img];

for(let i in apiArr) {
  for(let key in apiArr[i]) {
    api[key] = apiArr[i][key]
  }
}

export default api
