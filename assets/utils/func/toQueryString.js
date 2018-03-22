
/**
 * 对象转url参数
 * @param obj
 * @returns {*}
 */
function toQueryString(obj) {
  var ret = [];
  function toQueryPair(key, value) {
    if (typeof value == 'undefined'){
      return key;
    }
    return key + '=' + encodeURIComponent(value === null ? '' : String(value));
  }

  for(var key in obj){
    key = encodeURIComponent(key);
    var values = obj[key];
    if(values && values.constructor == Array){//数组
      var queryValues = [];
      for (var i = 0, len = values.length, value; i < len; i++) {
        value = values[i];
        queryValues.push(toQueryPair(key, value));
      }
      ret = ret.concat(queryValues);
    }else{ //字符串
      ret.push(toQueryPair(key, values));
    }
  }
  return ret.join('&');
}

module.exports = toQueryString