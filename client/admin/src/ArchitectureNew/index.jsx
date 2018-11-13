import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sider from '../SiderMenu';
import SiderBookList from '../SiderBookList';
import axios from 'axios';
import styles from './style.less';
import { Begin_GET_POSTS, GET_ERROR } from '../../reducers';
import { Menu, Icon, Layout, Breadcrumb, Form, Input, Tooltip, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import Container from '../../components/Container'
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

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

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }

  componentWillMount() {
    this.props.dispatch(Begin_GET_POSTS());
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

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
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));
    return (
      <Container {...this.props}>
        <Layout>
          <SiderBookList/>
          <Layout>
            <Breadcrumb>
              <Breadcrumb.Item><a href="">架构管理</a></Breadcrumb.Item>
              <Breadcrumb.Item>新建</Breadcrumb.Item>
            </Breadcrumb>
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

            <Row gytter={16}>
              <Form onSubmit={this.handleSubmit}>
                <FormItem
                  {...formItemLayout}
                  label="架构名称"
                >
                  {getFieldDecorator('email', {
                    rules: [{
                      type: 'email', message: 'The input is not valid E-mail!',
                    }, {
                      required: true, message: 'Please input your E-mail!',
                    }],
                  })(
                    <Input />
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
                    <Input type="password" />
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
                    <Input type="password" onBlur={this.handleConfirmBlur} />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label={(
                    <span>
                          Nickname&nbsp;
                      <Tooltip title="What do you want others to call you?">
                            <Icon type="question-circle-o" />
                          </Tooltip>
                        </span>
                  )}
                >
                  {getFieldDecorator('nickname', {
                    rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="Habitual Residence"
                >
                  {getFieldDecorator('residence', {
                    initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                    rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
                  })(
                    <Cascader options={residences} />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="Phone Number"
                >
                  {getFieldDecorator('phone', {
                    rules: [{ required: true, message: 'Please input your phone number!' }],
                  })(
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="Website"
                >
                  {getFieldDecorator('website', {
                    rules: [{ required: true, message: 'Please input website!' }],
                  })(
                    <AutoComplete
                      dataSource={websiteOptions}
                      onChange={this.handleWebsiteChange}
                      placeholder="website"
                    >
                      <Input />
                    </AutoComplete>
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="Captcha"
                  extra="We must make sure that your are a human."
                >
                  <Row gutter={8}>
                    <Col span={12}>
                      {getFieldDecorator('captcha', {
                        rules: [{ required: true, message: 'Please input the captcha you got!' }],
                      })(
                        <Input />
                      )}
                    </Col>
                    <Col span={12}>
                      <Button>Get captcha</Button>
                    </Col>
                  </Row>
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                  {getFieldDecorator('agreement', {
                    valuePropName: 'checked',
                  })(
                    <Checkbox>I have read the <a href="">agreement</a></Checkbox>
                  )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit">Register</Button>
                </FormItem>
              </Form>
            </Row>
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

const WrappedPostListnForm = Form.create()(PostList);
export default connect(mapStateToProps)(WrappedPostListnForm);