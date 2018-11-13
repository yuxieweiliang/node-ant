import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './style.less';
import { Begin_GET_POSTS, GET_ERROR } from '../../reducers';
import { Menu, Icon, Layout, Radio, Form, Input, Select, Row, Col, Checkbox, Button } from 'antd';
import Container from '../../components/Container'
import Step01 from './index_01'
import Step02 from './index_02'


class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  }

  componentWillMount() {
    this.props.dispatch(Begin_GET_POSTS());
  }

  renderStep() {
    switch(this.state.step) {
      case 1: return <Step01/>;
      case 2: return <Step02/>;
      default: return <Step01/>;
    }
  }
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    return (
      <Container {...this.props}>
        <Layout>
          <Row style={{padding: '10px 15px', width: 800}}>
            <Col span={18}>
              <Button size="small" style={{fontSize: 12}}>上一步</Button>
            </Col>
            <Col span={6} style={{textAlign: 'right'}}>
              <Button type="primary" size="small" style={{fontSize: 12}}>创建作品</Button>
            </Col>
          </Row>

          <Row gytter={16} style={{padding: '10px 15px', width: 800}}>

            { this.renderStep()}

          </Row>
        </Layout>
      </Container>
    );
  }
}

const mapStateToProps  = (state) => ({
  posts: state.posts
});

const WrappedPostListnForm = Form.create()(PostList);
export default connect(mapStateToProps)(WrappedPostListnForm);