/**
 * cookie 相关操作
 * @constructor Cookies
 */

export default({
  /**
   * 获取一条cookie
   * @param {string} key 名称
   */
  get: function(key) {
    if (typeof key !== 'string') return '';
    var cookie = (typeof document !== 'undefined') ? document.cookie : '';
    if (cookie.length > 0) {
      var start = cookie.indexOf(key + '=');
      if (start > -1) {
        start = start + key.length + 1;
        var end = cookie.indexOf(';', start);
        if (end < 0) {
          end = cookie.length;
        }
        return cookie.substring(start, end);
        // return decodeURIComponent(cookie.substring(start, end));
      }
    }
    return '';
  },

  /**
   * 新增一条cookie
   * @param {string} key 名称
   * @param {string} value 值
   * @param {number} time 过期时间
   */
  set: function(key, value, time) {
    var timer = time || 1
    if (typeof key === 'number') return;
    if (typeof value === 'string') {
      var expires = '';
      var date = new Date();
      date.setTime(date.getTime() + (timer * 24 * 60 * 60 * 1000));
      expires = ';expires=' + date.toGMTString();

      document.cookie = [key, '=', value, expires].join('');
      // document.cookie = [key, '=', encodeURIComponent(value), expires].join('');
    }
  },

  /**
   * 删除指定名称的cookie
   * @param {string} key
   */
  remove: function(key) {
    if (typeof key !== 'undefined' && this.get(key) !== '') {
      this.set(key, '', -1);
    }
  },

  /**
   * 清空本地所有cookie
   */
  clear: function() {
    var regExp = new RegExp('[^ =;]+(?=\=)', 'g');
    var keys = document.cookie.match(regExp);
    if (keys) {
      for (var i in keys) {
        this.remove(keys[i]);
      }
    }
  }
})
