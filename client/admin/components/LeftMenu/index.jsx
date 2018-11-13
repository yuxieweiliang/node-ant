import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import './style.less'

class Sider extends Component {
  state = {
    routes: [
      {title: '主页', route: '/', icon: 'home'},
      {title: '作品管理', route: 'book', icon: 'read'},
      {title: '架构管理', route: 'architecture', icon: 'cluster'},
      {title: '数据统计', route: 'database', icon: 'bar-chart'},
      {title: '稿酬收入', route: 'book-pay', icon: 'property-safety'},
      {title: '劳务收入', route: 'book-income', icon: 'money-collect'},
      {title: '作家咨询', route: 'consult', icon: 'message'},
      {title: '积分兑换', route: 'integral', icon: 'gold'},
      {title: '互动管理', route: 'interaction', icon: 'gateway'},
    ]
  };
  createMenu = () => {
    return this.state.routes.map((item, key) => (
      <Menu.Item
        key={`key${++key}`}
        onClick={() => this.props.history.push(item.route)}>
        <Icon type={item.icon} />
        <span>{item.title}</span>
      </Menu.Item>
    ));
  };
  render() {
    return (
      <div id="leftMenu">
        <Menu theme="dark"
              inlineCollapsed={this.props.collapsed}
              defaultOpenKeys={['key1']}
              defaultSelectedKeys={['key1']}
              mode="inline"
              style={{height: '100%'/*, paddingRight: 40*/}}
        >
          {this.createMenu()}
        </Menu>
      </div>
    );
  }
}

export default Sider