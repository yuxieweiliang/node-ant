import React from 'react'
import { render } from 'react-dom'
import renderView from './view'
import behavior from './behavior'
import RootView from '../../script/common'


// 进行组装
class View extends RootView {
  constructor(props) {
    super(props);
    this.method._extend(this, behavior);
  }
  render = renderView
}

// 值检查
View.propTypes = {

};


// 如果是webpack打包
if(typeof document !== 'undefined') {
  require('./style.less');
  render(<View/>, document.getElementById('root'));
}

export default View;
