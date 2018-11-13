import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon, Layout, Input, Row, Col, Button, Breadcrumb, Select } from 'antd';
import Sider from '../SiderMenu';
import SiderBookList from '../SiderBookList';
import axios from 'axios';
import styles from './style.less';
import Container from '../../components/Container'
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
    console.log(styles);
    return (
      <Container {...this.props}>
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
      </Container>
    );
  }
}

const mapStateToProps  = (state) => ({
  posts: state.posts
});

export default connect(mapStateToProps)(PostList);