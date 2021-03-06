import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Layout, Breadcrumb, Form, Input, Tabs, Timeline, Modal, Select, Row, Col, Button,  Card, Tag  } from 'antd';
import Header from '../../components/Header'
import Sider from '../SiderMenu';
import styles from './style.less';

const FormItem = Form.Item;
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

  componentWillMount() { }

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
          <Header/>
          <Layout>

            <Layout>
              <div className="card-container">
                <Tabs defaultActiveKey="1" tabPosition="left">
                  <TabPane tab="主要人物" key="1" style={{height: '100%', background: '#fff', overflowY: 'auto', padding: '15px'}}>
                    <Layout.Content>
                      <Breadcrumb style={{background: '#fff', borderBottom: '1px solid #eee', paddingLeft: 24}}>
                        <Breadcrumb.Item><a href="">架构 - 绝世</a></Breadcrumb.Item>
                        <Breadcrumb.Item><a href="">主要人物</a></Breadcrumb.Item>
                        <Breadcrumb.Item>《绝世》</Breadcrumb.Item>
                      </Breadcrumb>
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

                      <Row style={{padding: '10px 15px'}}>
                        <Timeline className="time-line-root">
                          <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                            <Card title={<div>凝虚</div>} bordered={false} style={{ width: '100%', paddingRight: 10 }}>
                              <Timeline>
                                <Timeline.Item>
                                  <h4 style={{marginBottom: 20}}>
                                    契约
                                    <span style={{fontSize: 12, marginLeft: 10, color: '#666'}}>
                                        fdsafa
                                      </span>
                                  </h4>
                                  <Timeline style={{paddingLeft: 20}}>
                                    <Timeline.Item>
                                      感知
                                      <p style={{margin: 0, color: '#999'}}>感知灵魂海</p>
                                    </Timeline.Item>
                                    <Timeline.Item>
                                      灵雾
                                      <p style={{margin: 0, color: '#999'}}>牵引天地灵气进入灵魂海，凝聚契约灵雾</p>
                                    </Timeline.Item>
                                    <Timeline.Item>
                                      聚阵
                                      <p style={{margin: 0, color: '#999'}}>通过契灵卡，引入契约法阵，将契约灵雾在灵魂海中凝聚成契灵阵</p>
                                    </Timeline.Item>
                                    <Timeline.Item>
                                      契约
                                      <p style={{margin: 0, color: '#999'}}>契约，契灵阵中烙印契灵魂魄，不然会叛逃</p>
                                    </Timeline.Item>
                                    <Timeline.Item>
                                      契约<Tag style={{marginLeft: 5}}>修改</Tag>
                                      <p style={{margin: 0, color: '#999'}}>契约，契灵阵中烙印契灵魂魄，不然会叛逃</p>
                                    </Timeline.Item>

                                    <Timeline.Item dot={<Icon type="plus-circle" style={{ fontSize: '16px' }} />}>
                                      <Tag onClick={() => this.setState({visible: true})}>添加</Tag>
                                    </Timeline.Item>
                                  </Timeline>
                                </Timeline.Item>
                                <Timeline.Item>
                                  <h4 style={{marginBottom: 20}}>
                                    魂形
                                    <span style={{fontSize: 12, marginLeft: 10, color: '#666'}}>
                                        fdsafa
                                      </span>
                                  </h4>
                                  <Timeline style={{paddingLeft: 20}}>
                                    <Timeline.Item>
                                      感知
                                      <p style={{margin: 0, color: '#999'}}>感知灵魂海</p>
                                    </Timeline.Item>
                                    <Timeline.Item>
                                      灵雾
                                      <p style={{margin: 0, color: '#999'}}>牵引天地灵气进入灵魂海，凝聚契约灵雾</p>
                                    </Timeline.Item>
                                    <Timeline.Item>
                                      聚阵
                                      <p style={{margin: 0, color: '#999'}}>通过契灵卡，引入契约法阵，将契约灵雾在灵魂海中凝聚成契灵阵</p>
                                    </Timeline.Item>
                                    <Timeline.Item>
                                      契约
                                      <p style={{margin: 0, color: '#999'}}>契约，契灵阵中烙印契灵魂魄，不然会叛逃</p>
                                    </Timeline.Item>
                                    <Timeline.Item dot={<Icon type="plus-circle" style={{ fontSize: '16px' }} />}>
                                      <Tag>添加</Tag>
                                    </Timeline.Item>
                                  </Timeline>
                                </Timeline.Item>
                                <Timeline.Item dot={<Icon type="plus-circle" style={{ fontSize: '16px' }} />}>
                                  <Tag>添加</Tag>
                                </Timeline.Item>
                              </Timeline>
                            </Card>
                            {/*创建服务现场*/}
                          </Timeline.Item>
                          {/*<Timeline.Item dot={(
                           <Popover placement="rightTop" title="{text}" content="contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent" trigger="click">
                           <div className="ant-timeline-item-head ant-timeline-item-head-blue"/>
                           </Popover>
                           )}/>*/}
                          <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                            <Card title={<div>凝虚</div>} bordered={false} style={{ width: '100%', paddingRight: 10 }}>
                              <Timeline>
                                <Timeline.Item>
                                  <h4 style={{marginBottom: 20}}>
                                    契约
                                    <span style={{fontSize: 12, marginLeft: 10, color: '#666'}}>
                                        fdsafa
                                      </span>
                                  </h4>
                                  <Timeline style={{paddingLeft: 20}}>
                                    <Timeline.Item>
                                      感知
                                      <p style={{margin: 0, color: '#999'}}>感知灵魂海</p>
                                    </Timeline.Item>
                                    <Timeline.Item>
                                      灵雾
                                      <p style={{margin: 0, color: '#999'}}>牵引天地灵气进入灵魂海，凝聚契约灵雾</p>
                                    </Timeline.Item>
                                    <Timeline.Item>
                                      契约<Tag style={{marginLeft: 5}}>修改</Tag>
                                      <p style={{margin: 0, color: '#999'}}>契约，契灵阵中烙印契灵魂魄，不然会叛逃</p>
                                    </Timeline.Item>

                                    <Timeline.Item dot={<Icon type="plus-circle" style={{ fontSize: '16px' }} />}>
                                      <Tag>添加</Tag>
                                    </Timeline.Item>
                                  </Timeline>
                                </Timeline.Item>
                                <Timeline.Item dot={<Icon type="plus-circle" style={{ fontSize: '16px' }} />}>
                                  <Tag>添加</Tag>
                                </Timeline.Item>
                              </Timeline>
                            </Card>
                          </Timeline.Item>
                          <Timeline.Item dot={<Icon type="plus-circle" style={{ fontSize: '16px' }} />}>
                            <Tag>添加</Tag>
                          </Timeline.Item>
                        </Timeline>
                      </Row>


                    </Layout.Content>
                  </TabPane>
                  <TabPane tab="其他设定" key="2">
                    <p>Content of Tab Pane 3</p>
                    <p>Content of Tab Pane 3</p>
                    <p>Content of Tab Pane 3</p>
                  </TabPane>
                </Tabs>
              </div>
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
            <FormItem label={`名称`}>
              <Input placeholder="例如：武器/宠物" />
            </FormItem>
            <FormItem label={`简介`}>
              <Input placeholder="例如：武器/宠物" />
            </FormItem>
            <FormItem label={`类型`}>
              <Select defaultValue="new">
                <Select.Option value="new">新节点</Select.Option>
                <Select.Option value="child">子节点</Select.Option>
              </Select>
            </FormItem>
            <FormItem label={`排版`}>
              <Select defaultValue="text">
                <Select.Option value="text">横版</Select.Option>
                <Select.Option value="select">竖版</Select.Option>
                <Select.Option value="select">卡片</Select.Option>
              </Select>
            </FormItem>
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