import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sider from '../SiderMenu';
import SiderBookList from '../SiderBookList';
import axios from 'axios';
import styles from './style.less';
import { Begin_GET_POSTS, GET_ERROR } from '../../reducers';
import { Menu, Icon, Layout, Breadcrumb, Form, Input, Tabs, Divider, Modal, Select, Row, Col, Collapse, Button, AutoComplete, Popover, Card, Tag  } from 'antd';

const SubMenu = Menu.SubMenu;
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const Panel = Collapse.Panel;
const TabPane = Tabs.TabPane;

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
      collapsed: true,
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
              <Layout>
                <div className="card-container">
                  <Tabs defaultActiveKey="3" tabPosition="left">
                    <TabPane tab="主要人物" key="2">
                      <Layout.Content style={{background: '#fff', overflowY: 'auto'}}>
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

                        <Row style={{padding: '0 15px'}}>
                          <Divider orientation="left">幻影诅咒·暗</Divider>
                          <div style={{paddingLeft: 40, display: 'flex'}}>
                            <Tag>级别</Tag>
                            <p>一阶</p>
                          </div><div style={{paddingLeft: 40, display: 'flex'}}>
                            <Tag>咒语</Tag>
                            <p>Sed nonne merninisti licere mihi ista probare</p>
                          </div><div style={{paddingLeft: 40, display: 'flex'}}>
                            <Tag>效果</Tag>
                            <p>Refert tamen, quo modo.</p>
                          </div><div style={{paddingLeft: 40, display: 'flex'}}>
                            <Tag>形态</Tag>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                          </div>
                        </Row>
                        <Row style={{padding: '0 15px'}}>
                          <Divider orientation="left">幻影诅咒·暗</Divider>
                          <div style={{paddingLeft: 40, display: 'flex'}}>
                            <Tag>级别</Tag>
                            <p>一阶</p>
                          </div><div style={{paddingLeft: 40, display: 'flex'}}>
                            <Tag>咒语</Tag>
                            <p>Sed nonne merninisti licere mihi ista probare</p>
                          </div><div style={{paddingLeft: 40, display: 'flex'}}>
                            <Tag>效果</Tag>
                            <p>Refert tamen, quo modo.</p>
                          </div><div style={{paddingLeft: 40, display: 'flex'}}>
                            <Tag>形态</Tag>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                          </div>
                        </Row>
                        <Row style={{padding: '0 15px'}}>
                          <Divider orientation="left">幻影诅咒·暗</Divider>
                          <div style={{paddingLeft: 40, display: 'flex'}}>
                            <Tag>级别</Tag>
                            <p>一阶</p>
                          </div><div style={{paddingLeft: 40, display: 'flex'}}>
                            <Tag>咒语</Tag>
                            <p>Sed nonne merninisti licere mihi ista probare</p>
                          </div><div style={{paddingLeft: 40, display: 'flex'}}>
                            <Tag>效果</Tag>
                            <p>Refert tamen, quo modo.</p>
                          </div><div style={{paddingLeft: 40, display: 'flex'}}>
                            <Tag>形态</Tag>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                          </div>
                        </Row>


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