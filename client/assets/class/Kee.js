define(function(require, exports, module) {
  var Class = require('assets/class/Class');
  var Ajax = require('assets/class/fetch');
  var Kee = new Class();


  Kee.create({
    Ajax: Ajax
  })

  Kee.include({
    cookie: require('assets/class/cookie'),
    method: require('method'),
    console: require('assets/class/log'),
  })
  module.exports = Kee
})
/*


var hostJs = 'http://localhost:8021'
define(function(require, exports, module) {
  var core = hostJs + '/Class',
    cookie = hostJs + '/cookie',
    method = hostJs + '/util',
    fetch = hostJs + '/fetch',
    log = hostJs + '/log'


  require.async([core, cookie, method, fetch, log], function(Class, core, cookie, method, fetch, log) {
    var Kee = new Class();

    alert(cookie)
    /!*Kee.include({
     cookie: cookie,
     fetch: fetch,
     method: method,
     console: log,
     })*!/
  });

  module.exports = Kee
})*/
