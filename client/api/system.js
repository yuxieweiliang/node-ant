import { system } from './root'

/**
 * 登陆
 */
export default {
  login: function (option) {
    const api = system.login;
    console.log(option, api);

    return fetch(api, {
      method: 'post',
      credentials: "same-origin", // 只允许同源cookie，不允许跨域
      headers:{
      "Content-Type": "application/json;charset=UTF-8",
    },
      body: JSON.stringify(option)
    }).then(res => {
      console.log(res);
      return res
    })
  },
  login2: function (option) {
    const api = system.login2;
    console.log(option, api);

    return fetch(api, {
      method: 'get',
      credentials: "same-origin",
      headers:{
      "Content-Type": "application/json;charset=UTF-8",
    }
    }).then(res => {
      console.log(res);
      return res
    })
  }
}

