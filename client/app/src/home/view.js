const React = require('react');
import RootView from '../../script/common'
import behavior from './behavior'
import book from '../../../api/book'
import { Button, Input, Form, Layout, Menu, Icon, Row  } from 'antd'

const { Header, Content, Footer, Sider } = Layout;


export default class MyComponent extends RootView {
  constructor(props) {
    super(props);
    this.method._extend(this, behavior);
    this.state = {}
  }

  componentWillMount() {}
  componentDidMount() {}
  render() {
    if(typeof window !== 'undefined') {
      const token = localStorage.getItem("token");
      console.log(token);
    }
    book.getBook();
    return (<Layout>
      <Header>header</Header>
      <Layout>
        <Sider>s</Sider>
        <Content>
          <Form layout="horizontal">
            <Form.Item label="Form Layout" {...{labelCol: { span: 4 },wrapperCol: { span: 14 }}}>
              <Button type="primary" onClick={() => book.getBook()}>登陆</Button>
            </Form.Item>
          </Form>
        </Content>
        <Sider>s</Sider>
      </Layout>
      <Footer>f</Footer>
    </Layout>);
  }
}
