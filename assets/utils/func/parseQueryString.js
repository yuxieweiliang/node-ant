function toQueryParams(str){
  // 去掉开头和结尾的空格，并且从结尾匹配 "?"
  var search = str.replace(/^\s+/,'').replace(/\s+$/,'').match(/([^?#]*)(#.*)?$/);
  if(!search){
    return {};
  }
  var searchStr  = search[1];
  var searchHash = searchStr.split('&');

  var ret = {};
  searchHash.forEach(function(pair){
    var temp = '';
    if(temp = (pair.split('=',1))[0]){
      var key   = decodeURIComponent(temp);
      var value = pair.substring(key.length + 1);
      if(value != undefined){
        value = decodeURIComponent(value);
      }
      if(key in ret){
        if(ret[key].constructor != Array){
          ret[key] = [ret[key]];
        }
        ret[key].push(value);
      }else{
        ret[key] = value;
      }
    }
  });
  return ret;
}


function parseQueryString(url) {
  let reg_url = /^[^\?]+\?([\w\W]+)$/,
    reg_para = /([^&=]+)=([\w\W]*?)(&|$)/g, //g is very important
    arr_url = reg_url.exec(url),  // 匹配符合的参数段字符产
    ret = {};
  if (arr_url && arr_url[1]) {
    let str_para = arr_url[1], result;
    while ((result = reg_para.exec(str_para)) != null) { // 循环匹配每一个参数
      console.log(result)
      ret[result[1]] = result[2];
    }
  }
  return ret;
}

module.exports = parseQueryString;