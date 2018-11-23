import { book } from './root'
import axios from '../utils/axios'

/**
 * 登陆
 */
export default {
  getBook: function () {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(book);
    return axios.get('book').then(res => console.log(res));
  },
  getBookById: function (id = '121212') {
    const api = book.info + '/121321321?query=message&auth=anyone';
    var token = JSON.parse(localStorage.getItem("token"));
    console.log(book);

    return axios.get('book', {params: { id}}).then(res => console.log(res));
    return fetch(api, {
      credentials: "same-origin", // 只允许同源cookie，不允许跨域
      headers:{
        "Content-Type": "application/json;charset=UTF-8",
        "Authorization": `${token.token_type} ${token.access_token}`
        // "Authorization": "Bearer fdsafdsafdsa"
      }
    }).then(res => {
      console.log(res);
      return res.status === 200 ? res.json() : {}
    }).then(res => console.log(res))
  },
}