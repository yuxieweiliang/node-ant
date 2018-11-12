import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon, Layout } from 'antd';
import Sider from '../SiderMenu';
import axios from 'axios';
import styles from './style.less';
import { Begin_GET_POSTS, GET_ERROR } from '../../reducers';


import { Table } from 'antd';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentWillMount() {
    this.props.dispatch(Begin_GET_POSTS());
  }

  render() {
    const columns = [{
      title: '用户编号',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    }];

    console.log(styles);
    return (
      <Layout style={{flexDirection: 'row'}}>
          <Sider/>
          <Layout>
              <Layout.Header className={styles.header}
                             style={{ background: '#fff', padding: 0 }}>
                  <div className={styles.button}>
                    {/*<Icon type="menu-unfold" />*/}
                      <Icon type="menu-fold" />
                  </div>
                  <div className={styles.headerRight}>
                      <div className={styles.button}>
                          <Icon type="mail" />
                      </div>
                      <Menu mode="horizontal" onClick={this.handleClickMenu}>
                          <Menu.SubMenu
                            /*className={styles['ant-menu-submenu-title']}*/
                            style={{float: 'right',}}
                            title={<span><Icon type="user" />fdsa</span>}>
                              <Menu.Item key="logout">
                                  Sign out
                              </Menu.Item>
                          </Menu.SubMenu>
                      </Menu>
                  </div>
              </Layout.Header>
              <Table rowKey="id" dataSource={this.props.posts} columns={columns} />
          </Layout>
      </Layout>
    );
  }
}

const mapStateToProps  = (state) => ({
  posts: state.posts
});

export default connect(mapStateToProps)(PostList);