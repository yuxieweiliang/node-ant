import { common } from './type/type'
/**
 * 登陆
 */
export default {
  getToken: function (option) {
    var _this = this;

    return this.Ajax.get(common.getLoginToken, option)
      .then(function(data) {
        _this.cookie.set('token', data.Data, 1)

        return data
      })
  }
}

