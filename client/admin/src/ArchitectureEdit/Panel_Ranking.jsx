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
      // 添加排行榜
      modal_add_ranking: false,
      openKeys: ['sub1'],
      confirmDirty: false,
      collapsed: true,
      autoCompleteResult: [],
    };
  }

  componentWillMount() {  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  add = () => {
    console.log('dispatch')
    this.props.dispatch({type: 'ranking/POST_RANKING', payload: {}})
  }
  render() {
    return (
      <Layout.Content style={{background: '#fff', overflowY: 'auto'}}>
        <Row style={{paddingBottom: '15px'}}>
          <Col span={18}>
            <Button size="small" style={{fontSize: 12}}>模板</Button>
            <Button size="small" style={{fontSize: 12}}>设置</Button>
          </Col>
          <Col span={6} style={{textAlign: 'right'}}>
            <Button size="small" style={{fontSize: 12}}>预览</Button>
            <Button
              type="primary"
              size="small"
              onClick={this.add}
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
    );
  }
}

const mapStateToProps  = (state) => ({
  posts: state.posts
});

const WrappedPostListnForm = Form.create()(PostList);
export default connect(mapStateToProps)(WrappedPostListnForm);