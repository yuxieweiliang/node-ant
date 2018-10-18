import React from 'react'
import RenderView from './view'
import behavior from './behavior'
var ReactDOMServer = require('react-dom/server');
import RootView from '../../script/common'

// 进行组装
class View extends RootView {
  constructor(props) {
    super(props);
    this.method._extend(this, behavior);
  }

  render() {
    var {
      settings, // 设置
      _locals, // 本地地址
      cache, // 缓存
      ...param, // 其他参数
    } = this.props;

    // var cmd = 'var __props=' + safeStringify(param) + ';';

    // console.log(cmd);
    return (<div id="content">
      <RenderView {...this.props} />
    </div>);
  }
}

// 值检查
View.propTypes = {

};

/*if (typeof window !== 'undefined') { //client rendering
  var component = React.createFactory(HelloMessage);
  ReactDOM.render(component(__props), document);
}*/

// 如果是webpack打包
/*if(typeof document !== 'undefined') {
  require('./style.less');
  render(<View/>, document.getElementById('root'));
}
 */
export default View;
