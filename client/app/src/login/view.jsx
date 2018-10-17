import React from 'react'
import { Button, Input, Form, Layout, Menu, Icon, Row  } from 'antd'
const { Header, Content, Footer, Sider } = Layout;

export default function() {
  /*this.fetch({
    url: 'ffff',
    params: {
      a: 'a',
      b: 'b'
    }});*/

  return (<Layout >
    <Content >
      <Row type="flex" justify="center">
        <Form layout="horizontal" style={{width: 300}}>
          <Form.Item label="用户名" {...{labelCol: { span: 6 },wrapperCol: { span: 18 }}}>
            <Input onInput={(e) => this._nameHandle(e.target.value)} placeholder="Basic usage"/>
          </Form.Item>
          <Form.Item label="密码" {...{labelCol: { span: 6 },wrapperCol: { span: 18 }}}>
            <Input onInput={(e) => this._descriptionHandle(e.target.value)} placeholder="Basic usage"/>
          </Form.Item>
          <Form.Item wrapperCol={{span: 18, offset: 6}}>
            <Button type="default" onClick={() => this.getBook()}>取消</Button>
            <Button type="primary" style={{marginLeft: 10}} onClick={() => this.createBook()}>保存</Button>
          </Form.Item>
        </Form>
      </Row>
    </Content>
  </Layout>);
}
