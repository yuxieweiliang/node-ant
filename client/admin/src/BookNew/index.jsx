import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './style.less';
import { Begin_GET_POSTS, GET_ERROR } from '../../reducers';
import { Menu, Icon, Layout, Card, Form, Input, Select, Row, Col, Checkbox, Button } from 'antd';
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
    // this.props.dispatch(Begin_GET_POSTS());
  }

  renderStep() {
    switch(this.state.step) {
      case 1: return <Step01/>;
      case 2: return <Step02/>;
      default: return <Step01/>;
    }
  }
  render() {
    return (
      <Container {...this.props}>
        <Card title={<Button size="small" style={{fontSize: 12}}>上一步</Button>}
              style={{width: 1020, flex: 1}}
              extra={[/*<Button type="primary" size="small" style={{fontSize: 12}}>保存</Button>,*/
                <Button
                  type="primary"
                  size="small"
                  style={{fontSize: 12}}
                  key="new-book"
                  onClick={() => this.props.history.push('/book/edit')}
                >创建作品</Button>
              ]}>
          <Row gytter={16} style={{padding: '10px 15px 130px 15px', width: 800, height: '100%'}}>

            { this.renderStep()}

          </Row>
        </Card>


      </Container>
    );
  }
}

const mapStateToProps  = (state) => ({
  posts: state.posts
});

const WrappedPostListnForm = Form.create()(PostList);
export default connect(mapStateToProps)(WrappedPostListnForm);