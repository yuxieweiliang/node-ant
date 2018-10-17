import { common } from './type/type'
/**
 * 登陆
 */
export default {
  login: function (option) {
    var _this = this;

    return this.Ajax.get(common.getLoginToken, option)
      .then(function(data) {

        return data
      })
  }
}

