import React from 'react'
import { render } from 'react-dom'
import RenderView from './view'
import behavior from './behavior'
import RootView from '../../script/common'
import Container from '../../views'

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
      contentHtml,
      ...param, // 其他参数
    } = this.props;

    // var cmd = 'var __props=' + safeStringify(param) + ';';

    console.log(this.props);

    // console.log(React.createFactory(<div>fdsafdasfda</div>));


    // console.log(cmd);
    return (<Container param={param} contentHtml={contentHtml}><RenderView {...this.props} /></Container>);
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
