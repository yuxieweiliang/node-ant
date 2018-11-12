import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Menu, Icon, Layout } from 'antd';

class Sider extends Component {
  state = {
    routes: [
      {title: '作品管理', route: 'book-management', icon: 'read'},
      {title: '架构管理', route: 'architecture-new', icon: 'cluster'},
      {title: '数据统计', route: 'other-set', icon: 'bar-chart'},
      {title: '稿酬收入', route: 'book-novels', icon: 'property-safety'},
      {title: '劳务收入', route: 'page1', icon: 'money-collect'},
      {title: '作家咨询', route: 'page1', icon: 'message'},
      {title: '积分兑换', route: 'page1', icon: 'gold'},
      {title: '互动管理', route: 'page1', icon: 'gateway'},
    ]
  };
  createMenu = () => {
    return this.state.routes.map((item, key) => (
      <Menu.Item key={`key${key}`}><Icon type={item.icon} />
        <span><Link to={item.route}>{item.title}</Link></span>
      </Menu.Item>
    ))
  };
  render() {
    console.log('-----------------', this.props.collapsed);
    return (
      <div id="leftMenu">
        <Menu theme="dark"
              inlineCollapsed={this.props.collapsed}
              defaultOpenKeys={['sub1']}
              defaultSelectedKeys={['sub1']}
              mode="inline"
              style={{height: '100%'}}
        >
          {this.createMenu()}
        </Menu>
      </div>
    );
  }
}

export default Sider