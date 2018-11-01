import { book } from './root'

/**
 * 登陆
 */
export default {
  getBook: function () {
    const api = book.info + '?query=message&auth=anyone';
    var token = JSON.parse(localStorage.getItem("token"));
    console.log(book);

    return fetch(api, {
      credentials: "same-origin", // 只允许同源cookie，不允许跨域
      headers:{
        "Content-Type": "application/json;charset=UTF-8",
        "Authorization": `${token.token_type} ${token.access_token}`
        // "Authorization": "Bearer fdsafdsafdsa"
      }
    }).then(res => res.json()).then(res => console.log(res))
  },
}