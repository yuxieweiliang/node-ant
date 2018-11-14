/**
 * Created by xueyufei on 2018/11/13.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon, Layout } from 'antd';
import LeftMenu from '../LeftMenu';
import Header from '../Header'
import styles from './style.less';


import { Table } from 'antd';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  componentWillMount() { }

  toggleCollapsed = () => {
    console.log(this.state.collapsed);
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    const width = window.innerWidth - 120;
    const background = 'url(/public/images/background_02.jpg)'; //  no-repeat
    console.log(window.innerWidth);
    return (
      <Layout style={{flexDirection: 'row'}}>
        <LeftMenu {...this.props} collapsed={this.state.collapsed}/>
        <Layout>
          <Header toggleCollapsed={this.toggleCollapsed}/>
          <Layout.Content
            className={styles.content}
            style={{
              ...this.props.style,
              background,
              backgroundSize: `${width}px auto`
            }}
          >

            { this.props.children }

          </Layout.Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps  = (state) => ({
  posts: state.posts
});

export default connect(mapStateToProps)(PostList);