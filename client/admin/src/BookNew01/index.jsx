import React, { Component } from 'react';
import { connect } from 'react-redux';
import SiderBookList from '../SiderBookList';
import styles from './style.less';
import { Begin_GET_POSTS, GET_ERROR } from '../../reducers';
import { Menu, Icon, Layout, Radio, Form, Input, Select, Row, Col, Checkbox, Button } from 'antd';
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

  componentWillMount() {
    // this.props.dispatch(Begin_GET_POSTS());
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
          {/*<SiderBookList/>*/}
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
              <Form>

                <FormItem {...formItemLayout} label="首发站点">
                  <Radio.Group>
                    <Radio value="a">中文网</Radio>
                    <Radio value="b">其他</Radio>
                  </Radio.Group>
                </FormItem>

                <FormItem {...formItemLayout} label="作品名称">
                  <Input />
                </FormItem>
                <FormItem {...formItemLayout} label="作品类型">
                  <Row gutter={10}>
                    <Col span="6">
                      <Select placeholder="Please select favourite colors">
                        <Option value="red">Red</Option>
                        <Option value="green">Green</Option>
                        <Option value="blue">Blue</Option>
                      </Select>
                    </Col>
                    <Col span="18">
                      <Select placeholder="Please select favourite colors">
                        <Option value="red">Red</Option>
                        <Option value="green">Green</Option>
                        <Option value="blue">Blue</Option>
                      </Select>
                    </Col>
                  </Row>
                </FormItem>

                <FormItem {...formItemLayout} label="作品标签">
                  <Input />
                </FormItem>

                <FormItem {...formItemLayout} label="授权类型">
                  <Radio.Group>
                    <Radio value="a">独家首发</Radio>
                    <Radio value="b">驻站作品</Radio>
                  </Radio.Group>
                </FormItem>

                <FormItem
                 {...formItemLayout} label="作品简介">
                  <Input />
                </FormItem>

                <FormItem {...formItemLayout} label="扉页寄语">
                  <Input  />
                </FormItem>

              </Form>
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