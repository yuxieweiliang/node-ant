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


    return (
      <Layout style={{flexDirection: 'row'}}>
        <LeftMenu {...this.props} collapsed={this.state.collapsed}/>
        <Layout>
          <Header toggleCollapsed={this.toggleCollapsed}/>
          { this.props.children }
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps  = (state) => ({
  posts: state.posts
});

export default connect(mapStateToProps)(PostList);