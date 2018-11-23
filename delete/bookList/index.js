import ViewComponent from './view';//视图


if(typeof document !== 'undefined') {



  require('./style.less')// 视图样式

  render(<ViewComponent/>, document.getElementById('root'));
}

export default ViewComponent;
