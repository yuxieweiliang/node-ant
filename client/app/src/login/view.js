import React from 'react'
import { Button, Input, Form, Layout, Menu, Icon, Row  } from 'antd'
import RootView from '../../script/common'
import behavior from './behavior'
import system from '../../../api/system'


const { Header, Content, Footer, Sider } = Layout;

export default class MyComponent extends RootView {
  constructor(props) {
    super(props);
    this.method._extend(this, behavior);
    this.state = {
      username: '',
      password: ''
    }
  }
  _setUsername(username) {
    console.log('aaaa');
    this.setState({username})
  }
  _setPassword(password) {
    console.log(password);
    this.setState({password})
  }
  login() {
    let {username, password} = this.state;
    let data = {username, password};


    system.login(data).then(res => console.log(res));
  }
  login2() {
    let {username, password} = this.state;
    let data = {username, password};


    system.login2(data).then(res => console.log(res));
  }

  render() {

    return (<Layout>
      <Header>header</Header>
      <Layout>
        <Sider>s</Sider>
        <Content>
          <Form layout="horizontal">
            <Form.Item label="用户名" {...{labelCol: { span: 4 },wrapperCol: { span: 14 }}}>
              <Input size="small"
                     placeholder="Basic usage"
                     defaultValue={this.state.username}
                     onInput={(e) => this._setUsername(e.target.value)}/>
            </Form.Item>
            <Form.Item label="密码" {...{labelCol: { span: 4 },wrapperCol: { span: 14 }}}>
              <Input size="small"
                     placeholder="Basic usage"
                     defaultValue={this.state.password}
                     onInput={(e) => this._setPassword(e.target.value)}/>
            </Form.Item>
            <Form.Item label="Form Layout" {...{labelCol: { span: 4 },wrapperCol: { span: 14 }}}>
              <Button type="primary" onClick={() => this.login()}>登陆</Button>
              <Button type="primary" onClick={() => this.login2()}>获取</Button>
            </Form.Item>
          </Form>
        </Content>
        <Sider>s</Sider>
      </Layout>
      <Footer>f</Footer>
    </Layout>);

  }
}
