import React from 'react'
import ReactDOM from 'react-dom'
import RenderView from './view'
import behavior from './behavior'
import RootView from '../../script/common'


// 进行组装
class View extends RootView {
  constructor(props) {
    super(props);
    this.method._extend(this, behavior);
  }
  render() {
    var data = {a:'a'};
    return (<RenderView {...data} />);
  }
}

// 值检查
View.propTypes = {

};


ReactDOM.render(<RenderView/>, document.getElementById('root'));
