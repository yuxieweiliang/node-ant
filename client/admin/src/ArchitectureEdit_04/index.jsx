import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Begin_GET_POSTS, GET_ERROR } from '../../reducers';
import { Menu, Icon, Layout, Breadcrumb, Form, Input, Tabs, List, Modal, Select, Row, Col, Collapse, Button, AutoComplete, Card, Tag, Divider  } from 'antd';
import Header from '../../components/Header'
import Sider from '../SiderMenu';
import styles from './style.less';

const FormItem = Form.Item;
const Panel = Collapse.Panel;
const TabPane = Tabs.TabPane;
const data = [
  {
    title: '性别：',
    value: '男',
    type: 'text',
  },
  {
    title: '年龄：',
    type: 'text',
    value: '16',
  },
  {
    title: '武器：',
    type: 'select',
    value: ['未知', '未知', '未知'],
  },
  {
    title: '契灵：',
    type: 'text',
    value: '冰精灵契灵：冰精灵契灵：冰精灵契灵：冰精灵契灵：冰精灵契灵：冰精灵契灵：冰精灵契灵：冰精灵契灵：冰精灵',
  },
];

const text = (
  <p style={{ paddingLeft: 24 }}>
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  </p>
);

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openKeys: ['sub1'],
      confirmDirty: false,
      collapsed: true,
      autoCompleteResult: [],
    };
  }
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

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

  componentWillMount() {
    this.props.dispatch(Begin_GET_POSTS());
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
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
    return (
      <Layout style={{flexDirection: 'row'}}>
        <Sider collapsed={this.state.collapsed}/>
        <Layout>
          <Header/>
          <Layout>
            <div className="card-container">
              <Tabs defaultActiveKey="1" tabPosition="left">
                <TabPane tab="基本信息" key="1">
                  <Row style={{padding: '10px 15px'}}>
                    <Col span={18}>
                      fdsa
                    </Col>
                    <Col span={6} style={{textAlign: 'right'}}>
                      <Button type="primary" size="small" style={{fontSize: 12}}>保存</Button>
                      <Button type="primary" size="small" style={{fontSize: 12}}>发布</Button>
                    </Col>
                  </Row>
                  <Row gytter={16}>
                    <Col span="18">
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
                            <Input.TextArea  rows="10" type="password" onBlur={this.handleConfirmBlur} />
                          )}
                        </FormItem>
                      </Form>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tab="主要人物" key="2">
                  <Row style={{padding: '10px 15px'}}>
                    <Col span={18}>
                      <Button size="small" style={{fontSize: 12}}>模板</Button>
                      <Button size="small" style={{fontSize: 12}}>设置</Button>
                    </Col>
                    <Col span={6} style={{textAlign: 'right'}}>
                      <Button size="small" style={{fontSize: 12}}>预览</Button>
                      <Button type="primary" size="small" style={{fontSize: 12}}>新增</Button>
                    </Col>
                  </Row>
                  <Collapse accordion bordered={false} defaultActiveKey={['2-1']}>
                    <Panel
                      header={
                        <div style={{paddingRight:15}}>
                          林莫锋
                          <span style={{float: 'right'}} onClick={(e) => {
                            e.stopPropagation();
                            this.setState({visible: true})}
                          }>编辑</span>
                        </div>
                      } key="2-1">


                      <Row>
                        <Col span="16">
                          <List
                            style={{ paddingLeft: 24 }}
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                              <List.Item
                                /*actions={[<a>×</a>]}*/
                                onClick={() => console.log('ffff')}>
                                {
                                  item.type === 'text' ? (
                                    item.title + item.value
                                  ) : item.type === 'select' ? (
                                    <div>
                                      {item.title}
                                      { item.value.map(_item => <Tag color="blue">{_item}</Tag>) }
                                    </div>
                                  ) : ''
                                }

                              </List.Item>
                            )}
                          />
                        </Col>
                        <Col span="8">
                          <Card
                            hoverable
                            style={{ width: 140, float: 'right' }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                          >
                            <Card.Meta  style={{textAlign: 'center'}}
                                        title="李清柔"
                            />
                          </Card>
                        </Col>
                      </Row>
                    </Panel>
                    <Panel header="李清柔" key="2-2">
                      {text}
                    </Panel>
                  </Collapse>
                </TabPane>
                <TabPane tab="排行榜" key="3">

                  <Layout.Content style={{background: '#fff', overflowY: 'auto'}}>
                    <Breadcrumb style={{background: '#fff', borderBottom: '1px solid #eee', paddingLeft: 24}}>
                      <Breadcrumb.Item><a href="">作品管理</a></Breadcrumb.Item>
                      <Breadcrumb.Item>《绝世》</Breadcrumb.Item>
                    </Breadcrumb>
                    <Row style={{padding: '10px 15px'}}>
                      <Col span={18}>
                        <Button size="small" style={{fontSize: 12}}>模板</Button>
                        <Button size="small" style={{fontSize: 12}}>设置</Button>
                      </Col>
                      <Col span={6} style={{textAlign: 'right'}}>
                        <Button size="small" style={{fontSize: 12}}>预览</Button>
                        <Button
                          type="primary"
                          size="small"
                          onClick={() => this.setState({visible: true})}
                          style={{fontSize: 12}}>新增</Button>
                        <Button
                          type="primary"
                          size="small"
                          onClick={() => this.setState({visibleModal: true})}
                          style={{fontSize: 12}}>新增</Button>
                      </Col>
                    </Row>


                    <Collapse accordion bordered={false} defaultActiveKey={['3-1']}>
                      <Panel
                        header={
                          <div style={{paddingRight:15}}>
                            寒霜刃
                            <span style={{float: 'right'}} onClick={(e) => {
                              e.stopPropagation();
                              this.setState({visible: true})}
                            }>编辑</span>
                          </div>
                        } key="3-1">

                        <div style={{paddingLeft: 24, display: 'flex'}}>
                          <Tag>级别</Tag>
                          <p>一阶</p>
                        </div><div style={{paddingLeft: 24, display: 'flex'}}>
                        <Tag>咒语</Tag>
                        <p>Sed nonne merninisti licere mihi ista probare</p>
                      </div><div style={{paddingLeft: 24, display: 'flex'}}>
                        <Tag>效果</Tag>
                        <p>Refert tamen, quo modo.</p>
                      </div><div style={{paddingLeft: 24, display: 'flex'}}>
                        <Tag>形态</Tag>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                      </div>
                      </Panel>
                      <Panel header="李清柔" key="3-2">
                        <div style={{paddingLeft: 24, display: 'flex'}}>
                          <Tag>级别</Tag>
                          <p>一阶</p>
                        </div><div style={{paddingLeft: 24, display: 'flex'}}>
                        <Tag>咒语</Tag>
                        <p>Sed nonne merninisti licere mihi ista probare</p>
                      </div><div style={{paddingLeft: 24, display: 'flex'}}>
                        <Tag>效果</Tag>
                        <p>Refert tamen, quo modo.</p>
                      </div><div style={{paddingLeft: 24, display: 'flex'}}>
                        <Tag>形态</Tag>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                      </div>
                      </Panel>
                    </Collapse>
                  </Layout.Content>
                </TabPane>
                <TabPane tab="其他设定" key="4">
                  <p>Content of Tab Pane 3</p>
                  <p>Content of Tab Pane 3</p>
                  <p>Content of Tab Pane 3</p>
                </TabPane>
              </Tabs>
            </div>
          </Layout>
        </Layout>
        <Modal
          title="添加字段"
          visible={this.state.visible}
          onOk={() => this.setState({visible: false})}
          onCancel={() => this.setState({visible: false})}
        >
          <Form onSubmit={this.handleSubmit}
                className="ant-advanced-search-form">
            <Row gutter={24}>
              <Col span={12}/>
              <Col span={12} style={{textAlign: 'right', paddingBottom: 24}}>
                <Button size="small">
                  新增
                </Button>
              </Col>
            </Row>
            <Row gutter={24}> {/*   style={{borderBottom: '1px solid #ccc'}}  */}
              <Col span={12}>
                <FormItem label={`字段名称`}>
                  <Input placeholder="例如：武器/宠物" />
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label={`字段类型`}>
                  <Select>
                    <Select.Option value="text">文字</Select.Option>
                    <Select.Option value="select">列表</Select.Option>
                    <Select.Option value="time">时间</Select.Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
          </Form>
        </Modal>
      </Layout>
    );
  }
}

const mapStateToProps  = (state) => ({
  posts: state.posts
});

const WrappedPostListnForm = Form.create()(PostList);
export default connect(mapStateToProps)(WrappedPostListnForm);