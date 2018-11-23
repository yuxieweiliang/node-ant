/*eslint no-console:0, no-empty:0, no-unused-vars:0*/
import fetch from 'isomorphic-fetch';

function iFetch() {
  this.config = {
    method: 'GET',
    header: {

    },
    body: {}
  }
}
// searchToJson  jsonToSearch

class InitFetch {
  constructor() {
    this.method = 'GET';
    this.config = null;
    this.request = {};
    this.body = null;
    return this._init();
  }
  _init() {
    let headers = new Headers();
    this.config = {
      root: 'http://localhost:1337/',
      // root: 'http://113.200.60.140:8010/'
    };

    headers.append('x-pass-access', 'fetch');
    this.request.headers = headers;

    return this;
  }
  get(url) {
    this.method = 'GET';
    return this._fetch(url);
  }
  post(url, params) {
    this.method = 'POST';
    this.body = params;
    return this._fetch(url);
  }
  put(url, params) {
    this.method = 'PUT';
    this.body = params;
    return this._fetch(url);
  }
  delete(url) {
    this.method = 'DELETE';
    return this._fetch(url);
  }
  start() {
    console.log('request is init');
  }
  load() {
    console.log('request is load');
  }
  error(error) {
    return error;
  }

  _fetch(url) {
    const _this = this;
    let { config, method, body } = this;
    this.request.method = method;

    if(body) this.request.body = JSON.stringify(body);

    return new Promise(function(resolve, reject) {
      // 请求之前
      _this.start(false);
      return fetch(config.root + url, _this.request)

        .catch(error => reject(error))
        .then(response => {
          if(response && response.ok) {
            resolve(response);
          } else {
            reject(response);
          }
        });
    })
      .then(response => {
        _this.body = null;
        _this.request.body = null;
        _this.load(true);
        return response.json();
      })
      .catch(error => {
        console.error(error);
        return this.error(error);
      });
  }
}
export default new InitFetch();


//   console.log("Key: %s, Value: %s", key, value);
/*
Vue.http.interceptors.push((request,next)=>{
 //request.credentials = true; // 接口每次请求会跨域携带cookie
 //request.method= 'POST'; // 请求方式（get,post）
 //request.headers.set('token','111') // 请求headers携带参数

 next(function(response){
 return response;

 });
 })
 */


function fet() {
  return fetch('')
}

fet.before = function() {

};



var arr = [];
function interceptors(request) {

}
interceptors({}, function(response) {
  return response;
});


fet.before(function(request, response) {

//  设置头部
  fet.set('Content-Type', 'application/javascript');

  fet.root('http://47.94.97.210:8001/')
});


fet('abc', {data: 'a'}).then();




