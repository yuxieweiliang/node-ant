import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sider from '../SiderMenu';
import SiderBookList from '../SiderBookList';
import axios from 'axios';
import styles from './style.less';
import { Begin_GET_POSTS, GET_ERROR } from '../../reducers';
import { Menu, Icon, Layout, Card, Form, Input, Tooltip, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import Container from '../../components/Container'
const FormItem = Form.Item;



class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }



  componentWillMount() {
    // this.props.dispatch(Begin_GET_POSTS());
  }

  submit() {
    this.props.dispatch({type: 'architecture/POST_ARCHITECTURE', payload: {fdsafdas: 'fdsafdsa'}});

    // this.props.history.push('/architecture/edit');
  }
  render() {
    const { getFieldDecorator } = this.props.form;

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
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };



    return (
      <Container {...this.props}>
        <Card title={
          <Button
            size="small"
            style={{fontSize: 12}}
            onClick={() => this.props.history.go(-1)}
          >
            上一步
          </Button>
        }
              style={{width: 1020, flex: 1}}
              extra={[/*<Button type="primary" size="small" style={{fontSize: 12}}>保存</Button>,*/
                <Button
                  type="primary"
                  size="small"
                  style={{fontSize: 12}}
                  key="new-architecture"
                  onClick={() => this.submit()}
                >创建架构</Button>
              ]}>

          <Row gytter={16}  style={{padding: '10px 15px 130px 15px', width: 800, height: '100%'}}>
            <Form onSubmit={this.handleSubmit}>
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
                  <Input.TextArea type="password" rows="5" onBlur={this.handleConfirmBlur} />
                )}
              </FormItem>

              <FormItem {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">Register</Button>
              </FormItem>
            </Form>
          </Row>
        </Card>

      </Container>
    );
  }
}

const mapStateToProps  = (state) => ({
  ...state.posts,
});

const WrappedPostListnForm = Form.create()(PostList);
export default connect(mapStateToProps)(WrappedPostListnForm);