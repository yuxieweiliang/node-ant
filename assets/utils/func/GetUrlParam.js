

// 从url 中提取某一个值
function GetUrlParam(name) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); //构造一个含有目标参数的正则表达式对象
  let r = window.location.search.substr(1).match(reg); //匹配目标参数
  if (r !== null) {
    return decodeURI(r[2]);
  } else {
    return null; //返回参数值
  }
}
module.exports = GetUrlParam;
