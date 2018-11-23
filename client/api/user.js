import { user } from './root'



export default {
  getUser: function (option) {
    const api = user.info;
    var token = JSON.parse(localStorage.getItem("token"));


  console.log(token);
    return fetch(api, {
      method: 'get',
      credentials: "same-origin", // 只允许同源cookie，不允许跨域
      headers:{
        "Content-Type": "application/json;charset=UTF-8",
        "Authorization": `${token.token_type} ${token.access_token}`
      }
    }).then(res => res.json())
  }
}

