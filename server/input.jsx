const React = require('react');
let style = {
  width: '100px',
  height: '40px',
  border: '1px solid #ccc;'
};

class MyComponent extends React.Component {
  _input() {
    console.log('aaaa')
  }
  render() {
    return (<input style={style} value={this.props.number} onInput={() => this._input()}/>);
  }
}


module.exports = MyComponent;