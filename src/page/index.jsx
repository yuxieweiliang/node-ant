const React = require('react');

class MyComponent extends React.Component {
  _input() {
    console.log('aaaa')
  }

  componentDidMount() {
    console.log('----------------', window);
  }
  _clickBtn() {
    console.log('fffffffff');
  }
  render() {
    var document, window;
    if(document) {
      var socket = io('http://localhost');
      socket.on('news', function (data) {
        console.log(data);
        socket.emit('my other event', { my: 'data' });
      });
    }


    console.log('----------------');
    return (<div>
      <input onInput={() => this._input()}/>
      <button onClick={() => this._clickBtn()}>dianji</button>
    </div>);
  }
}
var window;
if(window) {
  React.render(<MyComponent/>, document.getElementById('root'));
}

module.exports = MyComponent;