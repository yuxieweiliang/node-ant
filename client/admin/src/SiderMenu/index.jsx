import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Menu, Icon, Layout } from 'antd';

// 引入Antd的导航组件
const SubMenu = Menu.SubMenu;

class Sider extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Layout.Sider id="leftMenu">
                <span className="logo" style={{marginLeft: '40px'}}>主菜单</span>
                <Menu theme="dark"
                    style={{ width: 200 }}
                    defaultOpenKeys={['sub1']}
                    defaultSelectedKeys={['sub1']}
                    mode="inline"
                >
                  <Menu.Item key="sub1"><Link to="/book-management"><Icon type="bars" />作品管理</Link></Menu.Item>
                  <Menu.Item key="sub2"><Link to="/other-set">数据统计</Link></Menu.Item>
                  <Menu.Item key="sub3"><Link to="/book-novels">稿酬收入</Link></Menu.Item>
                  <Menu.Item key="sub4"><Link to="/page1">劳务收入</Link></Menu.Item>
                  <Menu.Item key="sub5"><Link to="/page1">作家咨询</Link></Menu.Item>
                  <Menu.Item key="sub6"><Link to="/page1">积分兑换</Link></Menu.Item>
                  <Menu.Item key="sub7"><Link to="/page1">互动管理</Link></Menu.Item>


                    <SubMenu key="sub8" title={<span><Icon type="bars" /><span>作品管理</span></span>}>
                        <Menu.Item key="1"><Link to="/page1">用redux-thunk获取数据</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/page2">用redux-saga获取数据</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/users">测试路由</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/page4" >测试路由</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </Layout.Sider>
        );
    }
}

export default Sider