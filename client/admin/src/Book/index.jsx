import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon, Layout, Table, Row, Col, Button, Card, Select } from 'antd';
import Sider from '../SiderMenu';
import SiderBookList from '../SiderBookList';
import axios from 'axios';
import styles from './style.less';
import Container from '../../components/Container'
import { Begin_GET_POSTS, GET_ERROR } from '../../reducers';
import { columns, data } from './data'

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
            <Card title="Card title"
                  extra={[/*<Button type="primary" size="small" style={{fontSize: 12}}>保存</Button>,*/
                  <Button
                    type="primary"
                    size="small"
                    style={{fontSize: 12}}
                    key="new-book"
                    onClick={() => this.props.history.push('/book-new')}
                  >新建</Button>
                  ]}>
              <Row><Col>新建作品</Col></Row>
              <Table
                rowKey="key"
                dataSource={data}
                columns={columns}
              />
            </Card>
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