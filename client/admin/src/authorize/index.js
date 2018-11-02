import React from 'react'
import ReactDOM from 'react-dom'
import RenderView from './view'
import ReactDOMServer from 'react-dom/server'
import RootView from '../../script/common'
import Container from '../../views'

// 进行组装
class ServerView extends RootView {
  render() {
    const contentHtml = ReactDOMServer.renderToString(<RenderView />);

    return(
      <Container
        {...this.props}
        dangerouslySetInnerHTML={{__html: contentHtml}}
      />
    );
  }
}

// 值检查
ServerView.propTypes = {

};

if(typeof document !== 'undefined'){
  ReactDOM.hydrate(<RenderView/>, document.getElementById('root'));
}

export default ServerView;
