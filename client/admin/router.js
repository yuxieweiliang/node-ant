import React, { Component } from 'react';
import { Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Menu, Icon, Layout } from 'antd';

import Login from './src/Login';
import Register from './src/Register';
import UserList from './src/UserList';
import BookNovels from './src/BookNovels'; // 小说
import BookManagement from './src/BookManagement'; // 小说
import Select from './src/Select'; // 小说
import List from './src/List'; // 小说
import BookEdit from './src/BookEdit'; // 小说
import Architecture from './src/Architecture'; // 架构
import ArchitectureNew from './src/ArchitectureNew'; // 架构
import ArchitectureEdit from './src/ArchitectureEdit'; // 架构
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
                <Route path="/book-management" component={BookManagement} />
                <Route path="/select" component={Select} />
                <Route path="/list" component={List} />
                <Route path="/book-edit" component={BookEdit} />
                <Route path="/architecture" component={Architecture} />
                <Route path="/architecture-new" component={ArchitectureNew} />
                <Route path="/architecture-edit" component={ArchitectureEdit} />
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