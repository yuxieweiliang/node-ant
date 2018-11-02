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
    var {
      settings, // 设置
      _locals, // 本地地址
      cache, // 缓存
      styles,
      scripts, // 缓存
      ...param // 其他参数
    } = this.props;

    return (
      <Html>
        <Head>
          { styles && styles.map((item, key) => <link rel="stylesheet" href={item} key={key}/>) }
        </Head>
        <Body>
        <div id="root">
          { this.props.children }
        </div>
        </Body>
        { scripts && scripts.map((item, key) => <script src={item} key={key}/>) }
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

