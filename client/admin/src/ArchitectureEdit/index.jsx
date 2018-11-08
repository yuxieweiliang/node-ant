import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon, Layout, Input, Row, Col, Button, Breadcrumb, Select } from 'antd';
import Sider from '../SiderMenu';
import SiderBookList from '../SiderBookList';
import axios from 'axios';
import styles from './style.less';
import { Begin_GET_POSTS, GET_ERROR } from '../../reducers';

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
      <Layout>
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
          <Layout>
            <Breadcrumb>
              <Breadcrumb.Item><a href="">作品管理</a></Breadcrumb.Item>
              <Breadcrumb.Item>《绝世》</Breadcrumb.Item>
            </Breadcrumb>
            <Layout>
              <SiderBookList/>
              <Layout>
                <Row style={{padding: '10px 15px'}}>
                  <Col span={18}>
                    <span>发布至</span>
                    <Select defaultValue="lucy">
                      <Select.Option value="jack">111111</Select.Option>
                      <Select.Option value="lucy">111111</Select.Option>
                      <Select.Option value="disabled">111111</Select.Option>
                    </Select>
                    <span>章节类型</span>
                    <Select defaultValue="lucy">
                      <Select.Option value="jack">111111</Select.Option>
                      <Select.Option value="lucy">111111</Select.Option>
                      <Select.Option value="disabled">111111</Select.Option>
                    </Select>
                  </Col>
                  <Col span={6} style={{textAlign: 'right'}}>
                    <Button type="primary" size="small" style={{fontSize: 12}}>保存</Button>
                    <Button type="primary" size="small" style={{fontSize: 12}}>发布</Button>
                  </Col>
                </Row>

                <Input />
                <Input.TextArea style={{display: 'flex', flex: 1}} />

                <Row gytter={16}>
                  <Col span={8}>字数：</Col>
                </Row>
              </Layout>
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps  = (state) => ({
  posts: state.posts
});

export default connect(mapStateToProps)(PostList);