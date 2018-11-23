import Component from './view';//视图


if(typeof document !== 'undefined') {
  require('../../style/root.less');// 视图样式
  require('./style.less');// 视图样式
  render(<Component/>, document.getElementById('root'));
}


export default Component;
