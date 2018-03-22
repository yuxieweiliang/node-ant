import fetch from 'isomorphic-fetch'
import method from './util'


export default function(option, data) {
  const token = this.cookie.get('token')
  const params = option ? method.createParams(option.params) : '';
  const url = option ? option.url : '';
  const urls = this.config.api + '/'+ url + '?token=' + token + params

  const response = data
    ? fetch(urls, {
      method: 'POST',
      headers: new Headers({"Content-Type": "text/plain"}),
      body: JSON.stringify(data)
    })
    : fetch(urls)

  return response.then(res => res.json())
}