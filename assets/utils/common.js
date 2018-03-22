/* eslint no-console: 0  */
import XUE from './xue';

class Cookie extends XUE {
  constructor() {
    super();
  }
  getCookie(key) {
    if (typeof key !== 'string') return '';
    const cookie = document.cookie;
    if (cookie.length > 0) {
      let start = cookie.indexOf(key + '=');
      if (start > -1) {
        start = start + key.length + 1;
        let end = cookie.indexOf(';', start);
        if (end < 0) {
          end = cookie.length;
        }
        return decodeURIComponent(cookie.substring(start, end));
      }
    }
    return '';
  }
  setCookie(key, value, options) {
    //设置有效期
    let date = new Date();
    let timer = 1, expires, path, domain, secure;

    //如果值为null, 删除cookie
    if (value === null) {
      console.error('value cannot be null, you can used delete to remove cookie');
    }

    if(typeof options === 'object') {
      timer = options.expires;
      path = ';path=' + options.path;
      domain = ';domain=' + options.domain;
      secure = options.secure ? ';secure=true' : '';
    }

    // 默认为一天 或者 options 直接传一个时间
    if (typeof timer === 'number' || typeof options === 'number') {
      date.setTime(date.getTime() + (timer * 24 * 60 * 60 * 1000));
      expires = ';expires=' + date.toGMTString();
    }


    //设置cookie     encodeURIComponent :函数可把字符串作为 URI 组件进行编码。
    document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
  }
  delCookie(key) {
    if (typeof key !== 'undefined') {
      this.set(key, '', -1);
    } else {
      console.error('any arguments in function');
    }
  }
}

export default {
  cookie: new Cookie()
};






