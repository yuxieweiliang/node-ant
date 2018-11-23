import { system } from './root'

/**
 * 登陆
 */
export default {
  login: function (option) {
    const api = system.login + '?query=message&auth=anyone';
    console.log(option, api);

    return fetch(api, {
      method: 'post',
      credentials: "same-origin", // 只允许同源cookie，不允许跨域
      headers:{
        "Content-Type": "application/json;charset=UTF-8",
        // "Authorization": "Bearer fdsafdsafdsa"
      },
      body: JSON.stringify(option)
    }).then(res => res.json())
  },
  /*login2: function (option) {
   const api = system.login2 + '?query=message&auth=anyone';
    console.log(option, api);

    return fetch(api, {
      method: 'post',
      credentials: "same-origin",
      headers:{
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify({username: 'xueyufei', password: 'xyf.3342'})
    }).then(res => {
      console.log(res);
      return res
    })
  },*/
  allow: function (option) {
    const query = {
      client_id: 1,
      redirect_uri: 'http://localhost:3000',
      x_user_id: 'zeB_608grQbCkgeSESH4y7rwqaY%3DKcNtqI2p7f06cb29926ce1718c002c6b9c11eb56',
    };
   const api = '/oauth/authorize?client_id=1&redirect_uri=http://localhost:3000&x_user_id=IhbbXv4LY-TEnWAMHRZ1T8PDFhs%3D-4FZ2NTp20acb04c7aa6cb3fc01053ed164388ab';

    // /oauth/authorize?client_id=1&redirect_uri=http://localhost:3000&x_user_id=
    return fetch(api, {
      method: 'post',
      credentials: "same-origin",
      headers:{
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify({allow: 'xueyufei'})
    }).then(res => {
      return res.json();
    }).then(res => {
      console.log(res);
      return res;
    })
  },
  allow2: function (option) {
    const query = {
      client_id: 1,
      redirect_uri: 'http://localhost:3000',
      x_user_id: 'zeB_608grQbCkgeSESH4y7rwqaY%3DKcNtqI2p7f06cb29926ce1718c002c6b9c11eb56',
    };
   const api = '/oauth2.0/authorize?client_id=1&redirect_uri=http://localhost:3000&x_user_id=IhbbXv4LY-TEnWAMHRZ1T8PDFhs%3D-4FZ2NTp20acb04c7aa6cb3fc01053ed164388ab';

    // /oauth/authorize?client_id=1&redirect_uri=http://localhost:3000&x_user_id=
    return fetch(api, {
      method: 'post',
      credentials: "same-origin",
      headers:{
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify({allow: 'xueyufei'})
    }).then(res => {
      return res.json();
    }).then(res => {
      console.log(res);
      return res;
    })
  },
  deny: function (option) {
   const api = system.login2 + '?query=message&auth=anyone';
    console.log(option, api);

    return fetch(api, {
      method: 'post',
      credentials: "same-origin",
      headers:{
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify({username: 'xueyufei', password: 'xyf.3342'})
    }).then(res => {
      console.log(res);
      return res
    })
  },
  register: function (option) {
   const api = system.register;
    console.log(option, api);

    return fetch(api, {
      method: 'post',
      credentials: "same-origin",
      headers:{
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify(option)
    }).then(res => {
      console.log(res);
      return res
    })
  },
}