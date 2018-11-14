import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import { Menu, Icon, Layout } from 'antd';
import Container from '../../components/Container'
import { Begin_GET_POSTS, GET_ERROR } from '../../reducers';
import { getPath } from '@utils'
import styles from './style.less';

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
        <li><Link to={`${match.path}/comments`}>comments</Link></li>
        <li><Link to={`${match.path}/settings`}>settings</Link></li>
    </ul>
  )
};

const UserProfilePage = ({ match }) => {
  const path = getPath(match.path);
  return (
    <div>
        User Profile:
        <Route path={`${path}/comments`} component={UserComments} />
        <Route path={`${path}/settings`} component={UserSettings} />
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

        return (
          <Container {...this.props}>
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
          </Container>
        );
    }
}

const mapStateToProps  = (state) => ({
    posts: state.posts
});

export default connect(mapStateToProps)(PostList);