import React, { Component } from 'react';
import { Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Menu, Icon, Layout } from 'antd';

import Login from './src/Login';
import Register from './src/Register';
import UserList from './src/UserList';
import BookNovels from './src/BookNovels';
import OtherSetting from './src/OtherSetting';

const SubMenu = Menu.SubMenu;
const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router basename="/" history={history}>
        <Layout id="nav">
          <Layout id="rightWrap">
            <div className="right-box">
              <Switch>
                <Route path="/" exact component={BookNovels} />
                <Route path="/book-novels" component={BookNovels} />
                <Route path="/other-set" component={OtherSetting} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Redirect to="/" />
              </Switch>
            </div>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;