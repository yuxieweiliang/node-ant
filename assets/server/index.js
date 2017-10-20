import _ from 'lodash'
import 'whatwg-fetch'
import { lowerKeyCase } from '../method'


class KN {
  constructor() {}
  creatUrl({url, option}) {
    let _url = url + '?'
    if(typeof option != 'undefined') {
      _.each(option, (opt, key) => {
      //   console.log(option)
        _url += key + '=' + opt + '&'
      })
      return _url.substring(0, _url.length-1)
    } else {
      return url
    }
  }
  fetch (option) {

    // console.log(this.creatUrl(option))
    return fetch(this.creatUrl(option))
    .then((response) => response.json())
    .then((response) => lowerKeyCase(response))
  }
//     "text/plain"  'multipart/form-data'   "application/x-www-form-urlencoded; charset=UTF-8"
  post ({url, option}, data) {
    const myHeaders = new Headers({"Content-Type": "text/plain"});
    const myInit = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(data)
    }
    // console.log(url)
    url = this.creatUrl({url, option})

    return fetch(url, myInit)
    .then((response) => response.json())
    .then((response) => lowerKeyCase(response))
  }
}
export default new KN()






