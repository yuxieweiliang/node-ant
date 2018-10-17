/**
 * 获取当前值的类型
 * @param obj
 * @param target
 * @returns {*}
 */
export let typeOf = function(obj, target) {
  const _obj = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();

  if(target) {
    return _obj === target
  }
  return _obj
};

/**
 * 将字符串转换为 base64
 * @param str
 * @returns {string}
 */
export const b64Encode =(str) => {

  return btoa(encodeURIComponent(str)
    .replace(/%([0-9A-F]{2})/g, (match, p1) => {
      return String.fromCharCode('0x' + p1);
    })
  );
};

/**
 * 将base64转为中文
 * @param str
 * @returns {string}
 */
export const  b64Decode = (str) => {

  return decodeURIComponent(atob(str)
    .split('').map(c => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
};


export function extend(object, methods) {
  for(var i in methods) {
    object[i] = methods[i]
  }
}

/**
 * 获取元素的绝对位置
 * @param element
 * @returns {{left: (number|Number), top: (Number|number)}}
 */
export let getOffset = function(element) {
  let actualLeft = element.offsetLeft;
  let actualTop = element.offsetTop;
  let current = element.offsetParent;

  while (current !== null) {
    actualLeft += current.offsetLeft;
    actualTop += current.offsetTop;
    current = current.offsetParent;
  }
  return {
    left: actualLeft,
    top: actualTop
  }
};
