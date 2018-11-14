import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Icon, Input, Row, Col, Button, Card, Select } from 'antd';
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
        <Layout.Content style={{width: '100%'}}>
          <Row gutter={10}>
            <Col md={12} xl={8}>
              <Card></Card>
            </Col>
            <Col md={12} xl={8}>
              <Card></Card>
            </Col>
          </Row>
        </Layout.Content>
      </Container>
    );
  }
}

const mapStateToProps  = (state) => ({
  posts: state.posts
});

export default connect(mapStateToProps)(PostList);