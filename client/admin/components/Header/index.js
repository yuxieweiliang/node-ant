import React, { Component } from 'react';
import styles from './style.less';
import { Menu, Icon, Layout  } from 'antd';


class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  componentWillMount() { }

  render() {

    return (
      <Layout.Header className={styles.header}
                     style={{ background: '#fff', padding: 0 }}>
        <div className={styles.button} onClick={this.props.toggleCollapsed}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </div>
        <div className={styles.headerRight}>
          <div className={styles.button}>
            <Icon type="mail" />
          </div>
          <Menu mode="horizontal" onClick={this.props.onMenuClick}>
            <Menu.SubMenu
              /*className={styles['ant-menu-submenu-title']}*/
              style={{float: 'right',}}
              title={<span><Icon type="user" />fdsa</span>}>
              <Menu.Item key="login">
                登陆
              </Menu.Item>
              <Menu.Item key="logout">
                退出
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </div>
      </Layout.Header>
    );
  }
}


export default PostList;