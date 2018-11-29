import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Begin_GET_POSTS, GET_ERROR } from '../../reducers';
import { Menu, Icon, Layout, Breadcrumb, Form, Input, Tabs, List, Modal, Select, Row, Col, Collapse, Button, AutoComplete, Card, Tag, Dropdown  } from 'antd';
import Header from '../../components/Header'
import Sider from '../SiderMenu';
import Container from '../../components/Container'
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




class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 添加模板面板
      visible_template: false,
      // 添加角色面板
      visible_role: false,
    };
  }

  /**
   *
   */
  componentWillMount() {
    this.props.dispatch({ type: 'template/editRole' });
  }

  /**
   * 显示 添加 【模板】 面板
   */
  showRoleTemplateModal = () => {
    this.setState({visible_template: true});
  }

  /**
   * 显示 添加 【角色】 面板
   */
  showRoleModal = () => {
    this.setState({visible_role: true});
  }

  getDataByTitle(title) {
    const { templateList } = this.props;
    let data = null;
    templateList.map(item => {
      if(item.title === title) {
        data = item;
      }
    });
    return data;
  }
  render() {
    const roles = this.getDataByTitle('角色');
    console.log(this.props, roles);

    return (
    <Layout.Content style={{background: '#fff', overflowY: 'auto'}}>
      <Row style={{paddingBottom: '15px'}}>
        <Col span={18}>
          <Button size="small" style={{fontSize: 12}} onClick={this.showRoleTemplateModal}>模板</Button>
          <Button size="small" style={{fontSize: 12}}>设置</Button>
        </Col>
        <Col span={6} style={{textAlign: 'right'}}>
          <Button size="small" style={{fontSize: 12}}>预览</Button>
          <Button type="primary" size="small" style={{fontSize: 12}} onClick={this.showRoleModal}>新增</Button>
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
                          { item.value.map((_item, key) => <Tag color="blue" key={key}>{_item}</Tag>) }
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
          <p style={{ paddingLeft: 24 }}>
            A dog is a type of domesticated animal.
            Known for its loyalty and faithfulness,
            it can be found as a welcome guest in many households across the world.
          </p>
        </Panel>
      </Collapse>

      <Modal
        okText="确定"
        cancelText="取消"
        title={roles && roles.title + '模板'}
        visible={this.state.visible_template}
        onOk={() => this.setState({visible_template: false})}
        onCancel={() => this.setState({visible_template: false})}
      >
        <Form className="ant-advanced-search-form">
          <Row gutter={24}>
            <Col span={12}/>
            <Col span={12} style={{textAlign: 'right', paddingBottom: 24}}>
              <Button size="small">
                新增
              </Button>
            </Col>
          </Row>
          {
            roles && roles.template.map((item, key) => (
              <Row gutter={24} key={key}> {/*   style={{borderBottom: '1px solid #ccc'}}  */}
                <Col span={12}>
                  <FormItem label={`字段名称`}>
                    <Input placeholder="例如：武器/宠物" defaultValue={item.name}/>
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem label={`字段类型`}>
                    <Select defaultValue={item.type}>
                      <Select.Option value="text">文字</Select.Option>
                      <Select.Option value="select">列表</Select.Option>
                      <Select.Option value="tag">标签</Select.Option>
                      <Select.Option value="time">时间</Select.Option>
                    </Select>
                  </FormItem>
                </Col>
              </Row>
            ))
          }

        </Form>
      </Modal>

      <Modal
        okText="确定"
        cancelText="取消"
        title="添加字段"
        visible={this.state.visible_role}
        onOk={() => this.setState({visible_role: false})}
        onCancel={() => this.setState({visible_role: false})}
      >
        <Form className="ant-advanced-search-form">
          <Row gutter={24}>
            <Col span={12}/>
            <Col span={12} style={{textAlign: 'right', paddingBottom: 24}}>
              <Button size="small">
                新增
              </Button>
            </Col>
          </Row>
          {
            roles && roles.template.map((item, key) => (
              <FormItem label={item.name}  key={key}>
                <Input placeholder="例如：武器/宠物"/>
              </FormItem>
            ))
          }
        </Form>
      </Modal>
    </Layout.Content>
    );
  }
}

const mapStateToProps  = (state) => ({
  ...state.template
});

const WrappedPostListnForm = Form.create()(PostList);
export default connect(mapStateToProps)(WrappedPostListnForm);