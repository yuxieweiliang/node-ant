import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Begin_GET_POSTS, GET_ERROR } from '../../reducers';
import { Menu, Icon, Layout, Radio, Form, Input, Select, Row, Col, Checkbox, Button } from 'antd';
const FormItem = Form.Item;

const Option = Select.Option;
const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 8 }, },
  wrapperCol: { xs: { span: 24 }, sm: { span: 16 },},
};


class PostList extends Component {
  componentWillMount() { }
  onWebsiteChange = (e) => {
    this.props.dispatch({ type: 'book/websiteChange',payload: e.target.value });
  };
  onNameChange = (e) => {
    this.props.dispatch({ type: 'book/nameChange',payload: e.target.value });
  };
  onClassifySelect = (classify) => {
    this.props.dispatch({ type: 'book/bookSubTypeChange',payload: classify });
  };
  onClassifySubSelect = (classifySub) => {
    this.props.dispatch({ type: 'book/classifySubChange',payload: classifySub });
  };
  onTypeChange = (e) => {
    this.props.dispatch({ type: 'book/typeChange',payload: e.target.value });
  };
  onIntroductionChange = (e) => {
    this.props.dispatch({ type: 'book/introductionChange',payload: e.target.value });
  };
  onTitleMessageChange = (e) => {
    this.props.dispatch({ type: 'book/titleMessageChange',payload: e.target.value });
  };

  createOption = (option) => (
    option && option.map((item, key) => (
      <Option key={key} value={item.label} >{ item.value }</Option>
    ))
  );

  render() {
    const { website, classify, classifySub, type, bookRootType, bookSubType } = this.props;
    console.log(this.props);
    const children = [];
    for (let i = 10; i < 36; i++) {
      children.push(<Select.Option key={i.toString(36) + i}>{i.toString(36) + i}</Select.Option>);
    }
    return (
      <Form>

        <FormItem {...formItemLayout} label="首发站点">
          <Radio.Group onChange={this.onWebsiteChange} value={website}>
            <Radio value="中文网">中文网</Radio>
            <Radio value="其他">其他</Radio>
          </Radio.Group>
        </FormItem>

        <FormItem {...formItemLayout} label="作品名称"  placeholder="请输入作品名称">
          <Input onChange={this.onNameChange} />
        </FormItem>

        <FormItem {...formItemLayout} label="作品类型">
          <Row gutter={10}>
            <Col span="6">
              <Select value={classify} onSelect={this.onClassifySelect}>
                { this.createOption(bookRootType) }
              </Select>
            </Col>
            <Col span="18">
              <Select value={classifySub} onSelect={this.onClassifySubSelect}>
                { this.createOption(bookSubType) }
              </Select>
            </Col>
          </Row>
        </FormItem>

        <FormItem {...formItemLayout} label="作品标签">

          <Row gutter={10}>
            <Col span="6">
              <Select placeholder="文风类型">{children}</Select>
            </Col>
            <Col span="6">
              <Select placeholder="写作手法">{children}</Select>
            </Col>
            <Col span="6">
              <Select placeholder="故事情节">{children}</Select>
            </Col>
            <Col span="6">
              <Select placeholder="作品类型">{children}</Select>
            </Col>
          </Row>
        </FormItem>

        <FormItem {...formItemLayout} label="授权类型">
          <Radio.Group  onChange={this.onTypeChange}  value={type}>
            <Radio value="独家首发">独家首发</Radio>
            <Radio value="驻站作品">驻站作品</Radio>
          </Radio.Group>
        </FormItem>

        <FormItem
          {...formItemLayout} label="作品简介">
          <Input.TextArea rows="5" onChange={this.onIntroductionChange} />
        </FormItem>

        <FormItem {...formItemLayout} label="扉页寄语">
          <Input.TextArea rows="5" onChange={this.onTitleMessageChange} />
        </FormItem>
      </Form>
    );
  }
}

const WrappedPostListnForm = Form.create()(PostList);
export default PostList;