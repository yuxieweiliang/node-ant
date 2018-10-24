import React from 'react'
import ReactDOM from 'react-dom'
import RenderView from './view'
import behavior from './behavior'
var ReactDOMServer = require('react-dom/server');
import RootView from '../../script/common'
import Container from '../../views'

// 进行组装
class ServerView extends RootView {
  constructor(props) {
    super(props);
    this.method._extend(this, behavior);
  }

  render() {
    var {
      settings, // 设置
      _locals, // 本地地址
      cache, // 缓存
      script, // 缓存
      ...param // 其他参数
    } = this.props;

    // var cmd = 'var __props=' + safeStringify(param) + ';';

    // console.log(cmd);

    // render the content as a dynamic react component
    var contentHtml = ReactDOMServer.renderToString(<RenderView />);

    return(
      <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"
        />
      </head>
      <body>
      <div id="root" dangerouslySetInnerHTML={{__html: contentHtml}} />
      </body>
      {
        script && script.map((item, key) => <script src={item} key={key}/>)
      }
      </html>
    );


    return (<Container {...this.props}>
      <RenderView />

    </Container>);
  }
}


// 进行组装
class View extends RootView {
  constructor(props) {
    super(props);
    this.method._extend(this, behavior);
  }
  render() {
    return (<RenderView />);
  }
}




// 值检查
View.propTypes = {

};

/*if (typeof window !== 'undefined') { //client rendering
  var component = React.createFactory(View);
  ReactDOM.render(component(__props), document);
}*/

// 如果是webpack打包
if(typeof document !== 'undefined') {
  // require('./style.less');
  ReactDOM.render(<View/>, document.getElementById('root'));
}
export default ServerView;
