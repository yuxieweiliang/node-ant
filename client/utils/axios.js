import axios from 'axios';


// "Authorization": "Bearer fdsafdsafdsa"
function createAxios() {
  const token = JSON.parse(localStorage.getItem("token"));
  const option = { "Content-Type": "application/json;charset=UTF-8", };

  if(token) option.Authorization = `${token.token_type} ${token.access_token}`;

  return axios.create({
    baseURL: 'http://localhost:4000/api/',
    timeout: 2000,
    // headers: {'X-Custom-Header': 'foobar'}
    headers: option
  })
}

export default createAxios();