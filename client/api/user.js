/**
 * 登陆
 * ACTIVE:"Y"
 DATE_OF_BIRTH:"1985-01-21T00:00:00+08:00"
 DEPT_CODE:"54"
 DEPT_NAME:"产二科"
 EMAIL:null
 FLAG:"2"
 GENDER:"女"
 LOGIN_NAME:"0132"
 LOGIN_PASS:"CNZ43Q8F5bMdpsLZixfcKg=="
 PHONE_NUMBER:null
 SIGNATURE: null
 USERTYPE:"0"
 USER_ID:"0195"
 USER_NAME: "闫利娜"
 */
/*
*   setCookie( "RestServerUrl=" + RestServerUrl);
 setCookie( "HospitalCode=" + HospitalCode);
 setCookie( "LoginUserName=" + $.base64.btoa(data.Data.USER_NAME, true));
 setCookie( "token=" + UserToken);
 setCookie( "LoginName=" + self.UserName());
 setCookie( "DEPT_CODE=" + data.Data.DEPT_CODE);
 setCookie( "DEPT_NAME=" + $.base64.btoa(data.Data.DEPT_NAME, true));
 setCookie("PatientIndex=0");
 //JsCallAndroid_Speak("登录成功");
 setCookie("Ann_Login_Time=" + (Date.parse(new Date()) + (3 * 60 * 1000)));
 */

import { common } from './type/type'

export default {
  getUser: function (option) {
    var _this = this;

    return this.Ajax.get(common.getHISUserInfo, option)
      .then(function(res) {
        var data = res.Data,
          userName = _this.method.b64Encode(data.USER_NAME),
          deptCode = data.DEPT_CODE,
          deptName = _this.method.b64Encode(data.DEPT_NAME)
        // loginTime =
        _this.cookie.set('username', userName, 1)
        _this.cookie.set('deptCode', deptCode, 1)
        _this.cookie.set('deptName', deptName, 1)
        return res
      })
  }
}

