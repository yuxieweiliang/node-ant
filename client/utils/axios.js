import axios from 'axios';
import config from '../config/config'


function createAjax() {
  const token = JSON.parse(localStorage.getItem("token"));
  const option = { "Content-Type": "application/json;charset=UTF-8", };

  // "Authorization": "Bearer ******"
  if(token) option.Authorization = `${token.token_type} ${token.access_token}`;

  return axios.create({
    baseURL: `${config.api}/api/`,
    timeout: 2000,
    // headers: {'X-Custom-Header': 'foobar'}
    headers: option
  })
}

export default createAjax();