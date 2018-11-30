import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Begin_GET_POSTS, GET_ERROR } from '../../reducers';
import { Menu, Icon, Layout, Breadcrumb, Form, Input, Tabs, List, Modal, Select, Row, Col, Collapse, Button, AutoComplete, Card, Tag, Dropdown  } from 'antd';
import Container from '../../components/Container'
import Panel_Role from './Panel_Role'
import Panel_Ranking from './Panel_Ranking'
import Panel_Information from './Panel_Information'
import styles from './style.less';


const FormItem = Form.Item;
const TabPane = Tabs.TabPane;


class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 添加排行榜
      visible_ranking: false,
      // 添加选项： 默认选择 ranking
      ranking_type: 'template',
    };
  }

  componentWillMount() {
    this.props.dispatch({type: 'bookSet/GET_SETTING_LIST', payload: {}});
    this.props.dispatch({type: 'bookSet/GET_TEMPLATE', payload: {id: 1}});
    this.props.dispatch({type: 'template/GET_TEMPLATE_LIST', payload: {}});
    // this.props.dispatch({type: 'template/GET_TEMPLATE', payload: {}});
  }


  /**
   * 打开创建面板
   */
  onMenuItemClick = () => {
    this.setState({visible_ranking: true});
  }

  /**
   * 修改创建类型
   * @param option
   */
  onRankingSelect = (option) => {
    this.setState({ranking_type: option});
  }

  /**
   * 点击确认
   */
  onRankingOk = () => {
    switch(this.state.ranking_type) {
      case 'template': this.props.dispatch({type: 'template/POST_TEMPLATE', payload: {}}); break;
      case 'ranking': this.props.dispatch({type: 'ranking/POST_RANKING', payload: {}}); break;
      case 'timeAxis': this.props.dispatch({type: 'time-axis/POST_TIME_AXIS', payload: {}}); break;
    }
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

  valueChange = (e, index) => {
    this.props.dispatch({type: 'template/valueChange', payload: {index, value: e.target.value}})
  }

  addRole = () => {
    const { temp  } = this.props;
    this.props.dispatch({type: 'bookSet/POST_SETTING', payload: temp.newTemplate});
  }

  /**
   *
   */
  createTabPane = () => {
    const { temp  } = this.props;
    const data = [
      {title: '基本信息', key: 'info'},
      {title: '主要人物', key: 'role'},
      {title: '排行榜_武器', key: 'ranking'},
      {title: '其他设定', key: 'other'},
    ]

    return data.map((item) => {
      let Context = null;
      switch (item.key) {
        case 'info':
          // this.props.dispatch({type: 'template/POST_TEMPLATE', payload: {}});
          Context = (<Panel_Information { ...temp } />);
          break;
        case 'role':
          // this.props.dispatch({type: 'template/GET_TEMPLATE_LIST', payload: {}});
          // Context = (<Panel_Role templateList={ templateList } template={ template } />);
          Context = (<Panel_Role { ...temp } valueChange={this.valueChange} addRole={this.addRole}/>);
          break;
        case 'ranking':
          // this.props.dispatch({type: 'template/POST_TEMPLATE', payload: {}});
          Context = (<Panel_Ranking { ...temp }/>);
          break;
        case 'other':
          // this.props.dispatch({type: 'template/POST_TEMPLATE', payload: {}});
          Context = (
            <div>
              <p>Content of Tab Pane 3</p>
              <p>Content of Tab Pane 3</p>
              <p>Content of Tab Pane 3</p>
            </div>
          );
          break;
        default:
          Context = (
            <div>
              <p>Content of Tab Pane 3</p>
              <p>Content of Tab Pane 3</p>
              <p>Content of Tab Pane 3</p>
            </div>
          );
          break;
      }

      return (
        <TabPane tab={item.title} key={item.key}>
          { temp.template && Context }
        </TabPane>
      )
    })
  }
  render() {
    return (
    <Container {...this.props}>
      <Card title={
        <Breadcrumb style={{background: '#fff', padding: 0, height: 'auto', lineHeight: 'auto'}}>
          <Breadcrumb.Item><a href="">作品管理</a></Breadcrumb.Item>
          <Breadcrumb.Item>《绝世》</Breadcrumb.Item>
        </Breadcrumb>
      }
            style={{width: 1020, flex: 1}}
            extra={[
              /*<Button type="primary" size="small" style={{fontSize: 12}}>保存</Button>,*/
              /*<Dropdown  overlay={this.createMenu()} trigger={['click']}></Dropdown>*/
              <Button
                type="primary"
                size="small"
                style={{fontSize: 12}}
                onClick={this.onMenuItemClick}
                key="new-architecture"
              >添加</Button>
            ]}
      >

        {/*   主体内容    */}
        <Tabs defaultActiveKey="role" tabPosition="left">

          {  this.createTabPane() }

        </Tabs>


      </Card>

      <Modal
        title="添加设定"
        okText="确定"
        cancelText="取消"
        visible={this.state.visible_ranking}
        onOk={this.onRankingOk}
        onCancel={() => this.setState({visible_ranking: false})}
      >
        <Form onSubmit={this.handleSubmit}
              className="ant-advanced-search-form">
          <Row gutter={24}> {/*   style={{borderBottom: '1px solid #ccc'}}  */}
            <Col span={12}>
              <FormItem label={`设定名称`}>
                <Input placeholder="例如：武器/宠物" />
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label={`设定类型`}>
                <Select defaultValue={this.state.ranking_type} onSelect={this.onRankingSelect}>
                  <Select.Option value="template">模板</Select.Option>
                  <Select.Option value="ranking">排行榜</Select.Option>
                  <Select.Option value="timeAxis">时间轴</Select.Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
          <Row gutter={24}> {/*   style={{borderBottom: '1px solid #ccc'}}  */}
            <Col span={24}>
              <FormItem label={`设定简介`}>
                <Input.TextArea rows="5" placeholder="例如：武器必须是角色常用的兵刃" />
              </FormItem>
            </Col>
          </Row>
        </Form>
      </Modal>
    </Container>
    );
  }
}

const mapStateToProps  = (state) => ({
  temp: state.template,
  ranking: state.ranking,
});

const WrappedPostListnForm = Form.create()(PostList);
export default connect(mapStateToProps)(WrappedPostListnForm);