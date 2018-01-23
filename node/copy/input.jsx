const React = require('react');


class MyComponent extends React.Component {
  _input() {
    console.log('aaaa')
  }
  render() {
    return (<input  value={this.props.number} onInput={() => this._input()}/>);
  }
}


module.exports = MyComponent;