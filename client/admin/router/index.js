import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import { Menu, Icon, Layout } from 'antd';

import Login from '../src/Login/view';
import Register from '../src/Register/view';
import Home from '../src/Home';

import Architecture from './Architecture'; // 架构
import Book from './Book'; // 小说
import Database from '../src/Database'; //
import Integral from '../src/Integral'; //
import Interaction from '../src/Interaction'; //
import BookNovels from '../src/BookNovels'; //
import DicNew from '../src/DicNew'; //
import RoleList from '../src/RoleList'; //
import OtherSetting from '../src/OtherSetting';

/*
import UserList from '../src/UserList';
import Select from '../src/Select'; //
import List from '../src/List'; //
*/


class App extends Component {
  componentWillMount() {
    // this.props.dispatch({type: 'loading'});
    console.log('this.props: ', this.props)
  }
  render() {
    return (
      <Router basename="/" history={this.props.history}>
        <Layout id="rightWrap">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/book" component={Book} />
            <Route path="/architecture" component={Architecture} />
            <Route path="/database" component={Database} />
            <Route path="/book-pay" component={BookNovels} />
            <Route path="/book-income" component={BookNovels} />
            <Route path="/consult" component={BookNovels} />
            <Route path="/integral" component={Integral} />
            <Route path="/interaction" component={Interaction} />
            <Route path="/role" component={RoleList} />
            <Route path="/dic-new" component={DicNew} />
            <Route path="/other-set" component={OtherSetting} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </Router>
    );
  }
}


export default connect()(App);
