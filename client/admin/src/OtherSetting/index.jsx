import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import { Menu, Icon, Layout } from 'antd';
import Sider from '../SiderMenu';
import axios from 'axios';
import styles from './style.less';
import { Begin_GET_POSTS, GET_ERROR } from '../../reducers';


import { Table } from 'antd';

const UserComments = ({ match }) => {
  //console.log(match.params);  // output: {}
  return <div>UserId: {match.params.userId}</div>
};

const UserSettings = ({ match }) => {
  //console.log(match.params);  // output: {userId: "5"}
  return <div>UserId: {match.params.userId}</div>
};
const BrowseUserTable = ({ match }) => {
  return (
    <ul>
        <li><Link to={`${match.path}/users`}>comments</Link></li>
        <li><Link to={`${match.path}/settings`}>settings</Link></li>
    </ul>
  )
};

const UserProfilePage = ({ match }) => {
  console.log(`${match.path}/users`);
  return (
    <div>
        User Profile:
        <Route path={`${match.path}/users`} component={UserComments} />
        <Route path={`${match.path}/settings`} component={UserSettings} />
    </div>
  )
};

const UserNav = () => (
  <div>User Nav</div>
);
class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentWillMount() {
        this.props.dispatch(Begin_GET_POSTS());
    }

    render() {
        const columns = [{
            title: '用户编号',
            dataIndex: 'id',
            key: 'id',
        }, {
            title: '标题',
            dataIndex: 'title',
            key: 'title',
        }];

        console.log(this.props);
        return (
            <Layout>
                <Sider/>
                <Layout>
                    <Layout.Header className={styles.header}
                            style={{ background: '#fff', padding: 0 }}>
                        <div className={styles.button}>
                            {/*<Icon type="menu-unfold" />*/}
                            <Icon type="menu-fold" />
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
                    <div className="user-sub-layout">

                        <aside>
                            <UserNav />
                        </aside>
                        <div className="primary-content">
                            <Switch>
                                <Route path={this.props.match.path} exact component={BrowseUserTable} />
                                <Route path={`${this.props.match.url}/:userId`} component={UserProfilePage} />
                            </Switch>
                        </div>
                    </div>
                </Layout>
            </Layout>
        );
    }
}

const mapStateToProps  = (state) => ({
    posts: state.posts
});

export default connect(mapStateToProps)(PostList);