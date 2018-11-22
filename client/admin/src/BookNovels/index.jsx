import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import Container from '../../components/Container'
import { Begin_GET_POSTS, GET_ERROR } from '../../reducers';
import styles from './style.less';



class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentWillMount() {
    // this.props.dispatch(Begin_GET_POSTS());
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

    return (
      <Container {...this.props}>
        <Table rowKey="id" dataSource={this.props.posts} columns={columns} />
      </Container>
    );
  }
}

const mapStateToProps  = (state) => ({
  posts: state.posts
});

export default connect(mapStateToProps)(PostList);