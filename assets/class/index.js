
  var config = require('../config');
  var Common = require('./Kee');
  var api = require('../../src/api/index');


  // 创建配置文件
  Common.include({
    config: config,
  });

  // 创建所有的api
  Common.create({
    api: api,
    // apiLogin: login
  });

  // 创建公共函数与属性
  Common.include({
    // 数据备份
    _data: {},
    // 第三方插件
    // immutable: immutable,
    // moment: moment,
    // 暂时没用
    /*initData: function(option) {
      for(var i in option) {
        this._data[i] = option[i]
      }
    },*/

    /*_init: function() {
      this.load()
    },*/
    _init: function() {
      var token = this.cookie.get('token')
      if(token) {
        // this.console.info('token -> ', token) // 不支持
      } else {
        // 如果找不到 token 就跳转到 登陆页
        if(window.location.href.indexOf('login') < 0) {
          window.location.href = '/login.html'
        }

        // 提示 token 找不到
        // this.console.warn('token is not defined')
      }

      $(document).on('keydown', function(e) {
        if(e.altKey && e.keyCode === 82) {
          window.location.reload()
        }
      })
    },

    /**
     * 加载模板
     * @param name 模板名称
     * @param callback 模板字符串
     * @returns {boolean}
     */
    loadTemplate: function(name, url, callback) {
      var template = document.getElementById('template-' + name);
      var $head = $('head');

      // 县创建一个空的
      $head.append('<script type="text/html" id="template-empty"></script>');
      // 建议添加一个独立的名字
      if(!name) {
        console.warn('template name is not fined')
      }

      // 如果模板已经存在
      if (template) {
        return true
      }

      // 如果传入了 temp
      return $.ajax(url).then(function(temp) {
        $head.append('<script type="text/html" id="template-' + name + '">'+ temp +'</script>');
        callback('template-' + name)
        return 'template-' + name
      })
    },

    /**
     * 加载数据
     * @param funcName
     * @returns {*}
     */
    getComData: function(funcName) {
      return $.map(funcName, function(item) {
        return {
          name: item,
          data: this.api[item]()
        }
      })
    }
  });

  module.exports = Common;

