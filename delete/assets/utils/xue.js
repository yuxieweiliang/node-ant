
export default class XUE {
  constructor() {}

  /**
   * 将base64转为中文
   * @param str
   * @returns {string}
   */
  b64DecodeUnicode(str) {
    // console.log(str)
    return decodeURIComponent(atob(str).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }

  /**
   * 将字符串转换为 base64
   * @param str
   * @returns {string}
   */
  b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str)
      .replace(/%([0-9A-F]{2})/g, (match, p1) => {
        return String.fromCharCode('0x' + p1);
      })
    );
  }
}