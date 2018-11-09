import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sider from '../SiderMenu';
import SiderBookList from '../SiderBookList';
import axios from 'axios';
import styles from './style.less';
import { Begin_GET_POSTS, GET_ERROR } from '../../reducers';
import { Menu, Icon, Layout, Breadcrumb, Form, Input, Tabs, List, Modal, Select, Row, Col, Collapse, Button, AutoComplete, Card, Tag, Affix  } from 'antd';

const SubMenu = Menu.SubMenu;
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
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
const siderData = [
  {
    title: '基本信息',
  },
  {
    title: '模板',
  },
  {
    title: '设置',
  },
  {
    title: '其他',
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

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
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
    return (
      <Layout style={{flexDirection: 'row'}}>
        <Sider collapsed={this.state.collapsed}/>
        <Layout>
          <Layout.Header className={styles.header}
                         style={{ background: '#fff', padding: 0 }}>
            <div className={styles.button} onClick={this.toggleCollapsed}>
              <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
            </div>
            <div className={styles.headerRight}>
              <div className={styles.button}>
                <Icon type="mail" />
              </div>
              <Menu mode="horizontal" onClick={this.handleClickMenu}>
                <Menu.SubMenu
                  /*className={styles['ant-menu-submenu-title']}*/
                  style={{float: 'right',}}
                  title={<span><Icon type="user" />fdsa</span>}>
                  <Menu.Item key="logout">
                    Sign out
                  </Menu.Item>
                </Menu.SubMenu>
              </Menu>
            </div>
          </Layout.Header>
          <Layout>
            <Breadcrumb>
              <Breadcrumb.Item><a href="">作品管理</a></Breadcrumb.Item>
              <Breadcrumb.Item>《绝世》</Breadcrumb.Item>
            </Breadcrumb>
            <Layout>
              {/*<Layout.Sider id="leftMenu" style={{background: '#fff'}}>
                <div style={{height: 40, lineHeight: '40px', borderBottom: '1px solid #ccc'}}>共100章</div>
                <List
                  style={{ width: 200 }}
                  itemLayout="horizontal"
                  dataSource={siderData}
                  mode="inline"
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        title={item.title}
                      />
                    </List.Item>
                  )}
                />
              </Layout.Sider>*/}
              <Layout.Sider id="leftMenu" style={{background: '#fff'}}>
                <Menu
                  mode="inline"
                  openKeys={this.state.openKeys}
                  onOpenChange={this.onOpenChange}
                  style={{ width: 200 }}
                >
                  <Menu.Item>
                    基本设置
                  </Menu.Item>
                  <SubMenu key="sub1" title={<span>主要角色</span>}>
                    <Menu.Item key="5">选择模板</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub2" title="Submenu">
                      <Menu.Item key="7">Option 7</Menu.Item>
                      <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                  </SubMenu>
                  <SubMenu key="sub3" title={<span>设定</span>}>
                    <Menu.Item key="9">魔法</Menu.Item>
                    <Menu.Item key="10">武器</Menu.Item>
                    <Menu.Item key="11">地域</Menu.Item>
                    <Menu.Item key="12">其他</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub4" title={<span>排行榜</span>}>
                    <Menu.Item key="13">契灵</Menu.Item>
                    <Menu.Item key="14">武器</Menu.Item>
                    <Menu.Item key="15">地域</Menu.Item>
                    <Menu.Item key="16">其他</Menu.Item>
                  </SubMenu>
                </Menu>
              </Layout.Sider>
              <Layout>
                <div className="card-container">
                  <Tabs defaultActiveKey="3" tabPosition="left">
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
                        <Col span="12">
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
                      <Collapse accordion bordered={false} defaultActiveKey={['1']}>
                        <Panel
                          header={
                            <div style={{paddingRight:15}}>
                              林莫锋
                              <span style={{float: 'right'}} onClick={(e) => {
                                e.stopPropagation();
                                this.setState({visible: true})}
                              }>编辑</span>
                            </div>
                          } key="1">


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
                        <Panel header="李清柔" key="2">
                          {text}
                        </Panel>
                      </Collapse>
                    </TabPane>
                    <TabPane tab="排行榜" key="3">
                      <Collapse accordion bordered={false} defaultActiveKey={['1']}>
                        <Panel
                          header={
                            <div style={{paddingRight:15}}>
                              林莫锋
                              <span style={{float: 'right'}} onClick={(e) => {
                                e.stopPropagation();
                                this.setState({visible: true})}
                              }>编辑</span>
                            </div>
                          } key="1">
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
                        <Panel header="李清柔" key="2">
                          {text}
                        </Panel>
                      </Collapse>
                    </TabPane>
                    <TabPane tab="其他设定" key="4">
                      <p>Content of Tab Pane 3</p>
                      <p>Content of Tab Pane 3</p>
                      <p>Content of Tab Pane 3</p>
                    </TabPane>
                  </Tabs>
                </div>
              </Layout>
              {/*<Layout.Sider id="leftMenu" style={{background: '#fff', textAlign: 'right'}}>
                <Affix offsetTop={220} style={{display: 'flex', flexDirection: 'column'}}>
                  <List
                    style={{ width: 80, float: 'right' }}
                    itemLayout="horizontal"
                    dataSource={siderData}
                    mode="inline"
                    renderItem={item => (
                      <List.Item style={{ paddingRight: 15 }}>
                        <List.Item.Meta
                          title={item.title}
                        />
                      </List.Item>
                    )}
                  />
                </Affix>
              </Layout.Sider>*/}
            </Layout>
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