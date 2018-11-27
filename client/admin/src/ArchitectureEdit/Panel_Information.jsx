import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Begin_GET_POSTS, GET_ERROR } from '../../reducers';
import { Menu, Icon, Layout, Breadcrumb, Form, Input, Tabs, List, Modal, Select, Row, Col, Collapse, Button, AutoComplete, Card, Tag, Dropdown  } from 'antd';
import Header from '../../components/Header'
import Sider from '../SiderMenu';
import Container from '../../components/Container'
import styles from './style.less';

const FormItem = Form.Item;

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


class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 添加排行榜
      modal_add_ranking: false,
      openKeys: ['sub1'],
      confirmDirty: false,
      collapsed: true,
      autoCompleteResult: [],
    };
  }

  componentWillMount() {  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Layout.Content style={{background: '#fff', overflowY: 'auto'}}>
        <Row style={{paddingBottom: '15px'}}>
          <Col span={18}/>
          <Col span={6} style={{textAlign: 'right'}}>
            <Button size="small" style={{fontSize: 12}} onClick={this.handleSubmit}>保存</Button>
          </Col>
        </Row>
        <Row gytter={16}>
          <Col span="18">
            <Form>
              <FormItem
                {...formItemLayout}
                label="架构名称"
              >
                {getFieldDecorator('email', {
                  rules: [{
                    required: true, message: 'Please input your E-mail!',
                  }],
                })(
                  <Input type="text" />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="架构详情"
              >
                {getFieldDecorator('password', {
                  rules: [{
                    required: true, message: 'Please input your password!',
                  }, {
                    validator: this.validateToNextPassword,
                  }],
                })(
                  <Input type="text" />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="世界背景"
              >
                {getFieldDecorator('confirm', {
                  rules: [{
                    required: true, message: 'Please confirm your password!',
                  }, {
                    validator: this.compareToFirstPassword,
                  }],
                })(
                  <Input.TextArea  rows="10" type="password" onBlur={this.handleConfirmBlur} />
                )}
              </FormItem>
            </Form>
          </Col>
        </Row>
      </Layout.Content>
    );
  }
}

const mapStateToProps  = (state) => ({
  posts: state.posts
});

const WrappedPostListnForm = Form.create()(PostList);
export default connect(mapStateToProps)(WrappedPostListnForm);