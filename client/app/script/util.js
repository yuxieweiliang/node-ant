
  function subscribe(ev, callback) {
    // 创建 _callbacks 对象， 除非它已经存在
    var calls = this._callbacks || (this._callbacks = {});

    (this._callbacks[ev] || (this._callbacks[ev] = []).push(callback));
  }

  function publish() {
    var args = Array.prototype.slice.call(arguments, 0);

    // 拿出第一个参数，即事件名称
    var ev = args.shift();
    var list, calls, i, l;
    if(!(calls = this._callbacks)) return this;
    if(!(list = this._callbacks[ev])) return this;

    for(i = 0, l = list.length; i < l; i++) {
      list[i].apply(this, args);
    }
    return this
  }

  /**
   * 获取当前值的类型
   * @param obj
   * @param target
   * @returns {*}
   */
  function typeOf(obj, target) {
    var _obj = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();

    if (target) {
      return _obj === target
    }
    return _obj
  }

  /**
   * 将字符串转换为 base64    -> 不支持  encodeURIComponent
   * @param str
   * @returns {string}
   */
  function toBase64(str) {
    return btoa(str)
  }

  /**
   * 将base64转为中文    -> 不支持  decodeURIComponent
   * @param str
   * @returns {string}
   */
  function unBase64(str) {
    return atob(str)
  }


  /**
   * 将字符串转换为 base64    -> 不支持  encodeURIComponent
   * @param str
   * @returns {string}
   */
  function b64Encode(str) {
    return btoa(encodeURIComponent(str)
      .replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode('0x' + p1);
      })
    );
  }
  /**
   * 将base64转为中文    -> 不支持  decodeURIComponent
   * @param str
   * @returns {string}
   */
  function b64Decode(str) {
    return decodeURIComponent(atob(str)
      .split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
  }
  /**
   * 获取元素的绝对位置
   * @param element
   * @returns {{left: (number|Number), top: (Number|number)}}
   */
  function getOffset(element) {
    var actualLeft = element.offsetLeft;
    var actualTop = element.offsetTop;
    var current = element.offsetParent;

    while (current !== null) {
      actualLeft += current.offsetLeft;
      actualTop += current.offsetTop;
      current = current.offsetParent;
    }
    return {
      left: actualLeft,
      top: actualTop
    }
  }

  function createParams(params) {
    var string = ''

    // 如果是 字符串
    if(typeOf(params, 'string')) {
      string += ('&' + params)
    } else if(typeOf(params, 'object')) {
      // 如果是 对象
      for(var i in params) {
        string += ( '&' + i + '=' + params[i])
      }
    } else {
      console.log('params is no string or object')
    }
    return string
  }

  function extend(object, methods) {
    for(var i in methods) {
      object[i] = methods[i]
    }
  }

  function _extend(object, methods, key) {
    if(key) object[key] = object[key] || {};
    const ext = function(i) {
      return function() {
        return methods[i].apply(object, arguments)
      }
    };

    for(var i in methods) {
      if(typeOf(methods[i]) === 'function') {
        if(key) {
          object[key][i] = ext(i)
        } else {
          object[i] = ext(i)
        }
      } else {
        object[i] = methods[i]
      }
    }
  }
module.exports = {
  extend: extend,
  _extend: _extend,
  subscribe: subscribe,
  publish: publish,
  typeOf: typeOf,
  toBase64: toBase64,
  unBase64: unBase64,
  b64Encode: b64Encode,
  b64Decode: b64Decode,
  getOffset: getOffset,
  createParams: createParams,
};


