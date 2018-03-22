import Component from './view';//视图


if(typeof document !== 'undefined') {
  request('../../style/root.less');// 视图样式
  request('./style.less');// 视图样式
  render(<Component/>, document.getElementById('root'));
}


export default Component;
