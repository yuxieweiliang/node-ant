'use strict';
import React from 'react';

export default class Html extends React.Component{
  render(){
    return (<html>{this.props.children}</html>);
  }
};
