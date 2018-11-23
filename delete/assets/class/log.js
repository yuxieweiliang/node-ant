'use strict';

var color = {
  style: 'font-size:14px;color:#3EAF0E;border-bottom:1px solid #3EAF0E;padding:5px;',
  error: ['f50c0c','FFE1E3'],
  warn: ['9E8F10','F6F5DC'],
  info: ['3EAF0E','DFFFDF'],
}

var style = function(col) {
  return 'color:#' + col[0] +';background-color:#' + col[1] +';width: 100%'
}

define({
  log: function() {
    console.log(Array.prototype.slice.call(arguments).join(' '))
  },
  /**
   * 错误
   */
  error: function() {
    var args = Array.prototype.slice.call(arguments).join(' ')
    console.log('%c[Wisdom-error]:' + args, style(color.error))
  },

  /**
   * 警告
   */
  warn: function(arr) {
    var args = Array.prototype.slice.call(arguments).join(' ')
    console.log('%c[Wisdom-warn]:' + args, style(color.warn))
  },

  /**
   * 信息
   */
  info: function(arr) {
    var args = Array.prototype.slice.call(arguments).join(' ')
    console.log('%c[Wisdom-info]:' + args, style(color.info))
  },

  /**
   * 信息
   */
  table: function(arr) {
    // console.table('Data Table', arguments.join(' '));
    console.table('Data Table', arr);
  }
})