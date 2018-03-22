/**
 * cookie 相关操作
 * @constructor Cookies
 */
define({
  get: function(url, params) {
    var token = this.cookie.get('token')
    url = this.config.api + url + '?token=' + token

    // 如果存在
    if(params) {
      url += this.method.createParams(params)
    }

    // 获取get数据，始用 promise 方式。
    return $.ajax(url);
  },
  post: function(url, data) {

  }
})
