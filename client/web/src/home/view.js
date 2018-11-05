const React = require('react');
import RootView from '../../script/common'
import behavior from './behavior'
import book from '../../../api/book'
import { Button, Affix, Form, Layout, Menu, Icon, Row  } from 'antd'
import styles from './style.less'
const { Header, Content, Footer, Sider } = Layout;


export default class MyComponent extends RootView {
  constructor(props) {
    super(props);
    this.method._extend(this, behavior);
    this.state = {}
  }

  componentWillMount() {

  }
  componentDidMount() {}
  render() {
    if(typeof window !== 'undefined') {
      const token = localStorage.getItem("token");
      console.log(token);
    }
    // book.getBook();
    book.getBookById();
    return (<Layout>
      <Affix offsetTop={0}>
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
      </Affix>

      <Layout style={{height: 2500}}>
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
