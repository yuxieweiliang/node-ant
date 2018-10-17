const React = require('react');

export default class MyComponent extends React.Component {
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
    let socket = io();
    this.setState({socket});


    // 会出发服务端的message 方法
    socket.on('connect', function () {
      // 在客户端链接到服务端后被添加，
      console.log(socket.id);
      socket.send('服务端的message hi');
    });
    /*socket.emit('login', {
     userId: room
     });
     */
    // 接受订阅消息
    socket.on('subscribe', function(data) {
      console.log('接受订阅消息: ----------');
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
    let { socket } = this.state;

    // 发起订阅请求
    socket.emit('subscribe', {
      room: this.state.room,
      userId: this.state.userName,
      common: this.state.common
    }, function(msg) {
      console.log('发起订阅请求: ----------socket');
      // 订阅的回调方法
      console.log(msg)
    });
  }
  _LeaveBtn() {
    let { socket } = this.state;

    console.log('退订: ', this.state);
    // 发起退订请求
    socket.emit('leave', {
      room: this.state.room,
      userId: this.state.userName,
      common: this.state.common
    }, function(msg) {
      console.log('发起退订请求: ----------socket');
      // 订阅的回调方法
      console.log(msg)
    });
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
