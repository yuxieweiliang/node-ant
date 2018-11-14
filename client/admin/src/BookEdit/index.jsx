import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon, Layout, Input, Row, Col, Button, Card, Select } from 'antd';
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
    return (
      <Container {...this.props}>
        <Card title="《 倾仙 》" bodyStyle={{padding: 0, paddingTop: 1, flex: 1}} style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
          <Layout style={{width: 1020}}>
            <SiderBookList/>
            <Layout>
              <Row style={{padding: '10px 15px', background: '#fff', borderBottom: '1px solid #ccc'}}>
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
                  <Button type="primary" style={{fontSize: 12}}>保存</Button>
                  <Button type="primary" style={{fontSize: 12}}>发布</Button>
                </Col>
              </Row>

              <Input placeholder="作品标题" style={{height: 50, border: 'none', borderBottom: '1px solid #ccc', borderRadius: 0}} />
              <Input.TextArea style={{display: 'flex', height: 'calc(100vh - 300px)', border: 'none', borderBottom: '1px solid #ccc', borderRadius: 0, overflowY: 'scroll', resize: 'none'}} placeholder="作品内容" rows="31" />

              <Row gytter={16} style={{padding: 15}}>
                <Col span={8}>字数：</Col>
              </Row>
            </Layout>
          </Layout>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps  = (state) => ({
  posts: state.posts
});

export default connect(mapStateToProps)(PostList);