import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Menu, Icon, Layout } from 'antd';

// 引入Antd的导航组件
const SubMenu = Menu.SubMenu;

class Sider extends Component {
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
                  <Menu.Item key="sub1"><Icon type="pie-chart" />
                    <span><Link to="/book-management"><Icon type="bars" />作品管理</Link></span>
                  </Menu.Item>
                  <Menu.Item key="sub2"><Icon type="pie-chart" />
                    <span><Link to="/other-set"><Icon type="bars" />数据统计</Link></span>
                  </Menu.Item>
                  <Menu.Item key="sub3"><Icon type="pie-chart" />
                    <span><Link to="/book-novels"><Icon type="bars" />稿酬收入</Link></span>
                  </Menu.Item>
                  <Menu.Item key="sub4"><Icon type="pie-chart" />
                    <span><Link to="/page1"><Icon type="bars" />劳务收入</Link></span>
                  </Menu.Item>
                  <Menu.Item key="sub5"><Icon type="pie-chart" />
                    <span><Link to="/page1"><Icon type="bars" />作家咨询</Link></span>
                  </Menu.Item>
                  <Menu.Item key="sub6"><Icon type="pie-chart" />
                    <span><Link to="/page1"><Icon type="bars" />积分兑换</Link></span>
                  </Menu.Item>
                  <Menu.Item key="sub7"><Icon type="pie-chart" />
                    <span><Link to="/page1"><Icon type="bars" />互动管理</Link></span>
                  </Menu.Item>
                    <SubMenu key="sub8" title={<span><Icon type="bars" /><span>作品管理</span></span>}>
                        <Menu.Item key="1"><Link to="/page1">用redux-thunk获取数据</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/page2">用redux-saga获取数据</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/users">测试路由</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/page4" >测试路由</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default Sider