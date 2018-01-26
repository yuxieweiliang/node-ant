const React = require('react');
import { render } from 'react-dom'

class MyComponent extends React.Component {
  _room(e) {
    this.setState({
      room: e.target.value
    })
  }
  _input(e) {
    this.setState({
      userName: e.target.value
    })
  }
  _common(e) {
    this.setState({
      common: e.target.value
    })
  }
  componentDidMount() {
    var socket = io();
    this.setState({socket});


    // 会出发服务端的message 方法
    socket.on('connect', function () {
      socket.send('hi');
    });


    // 接受订阅消息
    socket.on('subscribe', function(data) {
      console.log('----------');
      console.log(data)
    });
  }

  /**
   * connect：连接成功
   * connecting：正在连接
   * disconnect：断开连接
   * connect_failed：连接失败
   * error：错误发生，并且无法被其他事件类型所处理
   * message：同服务器端message事件
   * anything：同服务器端anything事件
   * reconnect_failed：重连失败
   * reconnect：成功重连
   * reconnecting：正在重连
   * @private
   */
  _clickBtn() {
    var { socket } = this.state;

    // 发起订阅请求
    socket.emit('subscribe', {
      room: this.state.room,
      userId: this.state.userName,
      common: this.state.common
    }, function(msg) {
      // 订阅的回调方法
      console.log(msg)
    });
    console.log('----------socket');
  }
  _LeaveBtn() {
    var { socket } = this.state;

    // 发起退订请求
    socket.emit('unsubscribe', {
      room: this.state.room,
      userId: this.state.userName,
      common: this.state.common
    });
    console.log('----------socket');
  }
  render() {
    return (<div>
      <input onInput={this._room.bind(this)}/>
      <input onInput={this._input.bind(this)}/>
      <input onInput={this._common.bind(this)}/>
      <button onClick={this._clickBtn.bind(this)}>进入</button>
      <button onClick={this._LeaveBtn.bind(this)}>离开</button>
    </div>);
  }
}
if(typeof document !== 'undefined') {
  render(<MyComponent/>, document.getElementById('root'));
}

module.exports = MyComponent;