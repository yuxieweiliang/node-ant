'use strict';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Html from './html';
import Head from './header';
import Body from './body';

export default class HelloMessage extends React.Component{

  constructor(props) {
    super(props);
    this.state = {count: 0 };
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    const { script } = this.props;
    // const cmd = 'var __props=' + safeStringify(param) + ';';

    return (
      <Html>
        <Head>
          {/*<link href='/css/style.css' rel='stylesheet'/>*/}
          {/*<script dangerouslySetInnerHTML={{__html: cmd}}/>*/}
        </Head>
        <Body>
        <div id="root">
          { this.props.children }
        </div>
        {
          script && script.map((item, key) => <script src={item} key={key}/>)
        }
        </Body>
      </Html>
    )
  }
};

function safeStringify(obj) {

  console.log(JSON.stringify(obj));

  return JSON.stringify(obj)
    .replace(/<\/(script)/ig, '<\\/$1')
    .replace(/<!--/g, '<\\!--')
    .replace(/\u2028/g, '\\u2028') // Only necessary if interpreting as JS, which we do
    .replace(/\u2029/g, '\\u2029') // Ditto
}

