import React, { Component } from 'react'
import { render } from 'react-dom'
import View from './view.jsx'

if(typeof document !== 'undefined') {
  require('../../style/root.less');// 视图样式
  require('./style.less');// 视图样式

  render(<View/>, document.getElementById('root'));
}

module.exports = View;