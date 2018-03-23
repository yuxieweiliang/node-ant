import fetch from 'isomorphic-fetch'
import method from './util'


export default function(url, data) {
  // const token = this.cookie.get('token');
  // const params = option ? method.createParams(option.params) : '';
  // const url = option ? option.url : '';
  // const urls = this.config.api + '/'+ url + '?token=' + token + params

  const response = data
    ? fetch(url, {
      method: 'POST',
      headers: new Headers({"Content-Type": "multipart/form-data; boundary=----WebKitFormBoundary9jAf7CuDdcOpaB1z"}),
      body: data
    })
    : fetch(url, {
      method: 'GET',
      headers: new Headers({"Content-Type": "application/json"})
    });

  return response
}