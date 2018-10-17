import { common } from './type/type'
/**
 * 登陆
 */
export default {
  postImg: function (option) {
    var _this = this;

    console.log(this);
    return this.fetch(common.postImg, option)
      .then(function(data) {

        return data
      })
  },
  postImg2: function (option) {
    var _this = this;

    console.log(this);
    return this.fetch(common.postImg2, option)
      .then(function(data) {

        return data
      })
  }
}

