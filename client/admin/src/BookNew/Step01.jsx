import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Begin_GET_POSTS, GET_ERROR } from '../../reducers';
import { Menu, Icon, Layout, Radio, Form, Input, Select, Row, Col, Checkbox, Button } from 'antd';
const FormItem = Form.Item;
import { bookType } from './data'


class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      website: '中文网',
      classify: 20001,
      type: '独家首发',
    };
  }

  componentWillMount() {
    // this.props.dispatch(Begin_GET_POSTS());
  }
  onWebsiteChange = (e) => {
    this.setState({website: e.target.value});
  };
  onNameChange = (e) => {
    this.setState({name: e.target.value});
  };
  onClassifySelect = (classify, option) => {
    // console.log(option);
    bookType.map((item, i) => {
      if(item.label === classify) {
        this.setState({
          bookSubType: bookType[i].children
        });
      }
    });
    this.setState({classify});
  };
  onClassifySubSelect = (classifySub, option) => {
    this.setState({classifySub});
  };
  onTypeChange = (e) => {
    this.setState({type: e.target.value});
  };
  onIntroductionChange = (e) => {
    this.setState({introduction: e.target.value});
  };
  onTitleMessageChange = (e) => {
    this.setState({title_message: e.target.value});
  };
  render() {
    const { website, classify, bookSubType, type } = this.state;
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
    // console.log(this.state);
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

        <FormItem {...formItemLayout} label="作品名称">
          <Input onChange={this.onNameChange} />
        </FormItem>

        <FormItem {...formItemLayout} label="作品类型">
          <Row gutter={10}>
            <Col span="6">
              <Select value={classify} onSelect={this.onClassifySelect}>
                {
                  bookType.map((item, key) => (
                    <Select.Option
                      key={key}
                      value={item.label}
                    >
                      {item.value}
                    </Select.Option>
                  ))
                }
              </Select>
            </Col>
            <Col span="18">
              <Select placeholder="请先选择分类" onSelect={this.onClassifySubSelect}>
                {
                  bookSubType && bookSubType.map((item, key) => (
                    <Select.Option
                      key={key}
                      value={key}
                    >
                      {item.value}
                    </Select.Option>
                  ))
                }
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

const mapStateToProps  = (state) => {
  console.log(state);
  return ({
    posts: state.posts
  })
};

const WrappedPostListnForm = Form.create()(PostList);
export default connect(mapStateToProps)(WrappedPostListnForm);