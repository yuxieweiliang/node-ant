const React = require('react');
let style = {
  width: '100px',
  height: '40px',
  border: '1px solid #ccc;'
};

class MyComponent extends React.Component {
  render() {
    return (<h2 style={style}>{this.props.number}</h2>);
  }
}


module.exports = MyComponent;