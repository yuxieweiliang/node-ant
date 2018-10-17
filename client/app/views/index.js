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
    var { param, contentHtml} = this.props;
    var cmd = 'var __props=' + safeStringify(param) + ';';
    console.log(this.props);
    return (
      <Html>
        <Head>
          {/*<link href='/css/style.css' rel='stylesheet'/>*/}
          <script dangerouslySetInnerHTML={{__html: cmd}}/>
          <script dangerouslySetInnerHTML={{__html: contentHtml}}/>
        </Head>
        <Body>
          {
           param.script && param.script.map((item, key) => <script src={item} key={key}/>)
          }

          {/*<script src="/component/index.js"/>*/}
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

