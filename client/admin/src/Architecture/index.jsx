import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon, Layout, Table, Row, Col, Button, Card, Select } from 'antd';
import Sider from '../SiderMenu';
import SiderBookList from '../SiderBookList';
import axios from 'axios';
import styles from './style.less';
import Container from '../../components/Container'
import { columns, data } from './data'

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentWillMount() {
    this.props.dispatch({type: 'architecture/RECEIVE_ARCHITECTURES'});
  }

  render() {
    return (
      <Container {...this.props}>
        <Card title="架构管理"
              style={{width: 1020, flex: 1}}
              extra={[/*<Button type="primary" size="small" style={{fontSize: 12}}>保存</Button>,*/
                <Button
                  type="primary"
                  size="small"
                  style={{fontSize: 12}}
                  key="new-book"
                  onClick={() => this.props.history.push('/book/new')}
                >新建</Button>
              ]}>
          <Table
            rowKey="key"
            dataSource={data}
            columns={columns}
          />
        </Card>
      </Container>
    );
  }
}

const mapStateToProps  = (state) => ({
  posts: state.posts
});

export default connect(mapStateToProps)(PostList);