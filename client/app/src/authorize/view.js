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
    this.state = {}
  }
  allow() {
    system.allow();
  }
  deny() {
    system.deny();
  }

  render() {

    return (<Layout>
      <Header>header</Header>
      <Layout>
        <Sider>s</Sider>
        <Content>
          <Form layout="horizontal">
            <Form.Item label="Form Layout" {...{labelCol: { span: 4 },wrapperCol: { span: 14 }}}>
              <Button type="primary" onClick={() => this.allow()}>同意</Button>
              <Button type="primary" onClick={() => this.deny()}>拒绝</Button>
            </Form.Item>
          </Form>
        </Content>
        <Sider>s</Sider>
      </Layout>
      <Footer>f</Footer>
    </Layout>);

  }
}
