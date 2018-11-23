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
  state = {
    collapsed: false,
  };
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  componentDidMount() {}
  render() {
    if(typeof window !== 'undefined') {
      const token = localStorage.getItem("token");
      console.log(token);
    }
    // book.getBook();
    // book.getBookById();
    console.log(this.state.collapsed);
    return (<Layout>
      <Layout style={{height: 2500}}>
        <Sider collapsed={this.state.collapsed}>
          <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
          </Button>
          <Menu
            mode="inline"
            theme="dark"
            onClick={ this.handleClickMenu }
            inlineCollapsed={ this.state.collapsed }
          >
            <Menu.Item key="logout">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="login"  title={<span></span>}>
              <Icon type="mail" />
              <span>Navigation One</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content>
          章节名称
        </Content>
        <Sider>s</Sider>
      </Layout>
      <Footer>f</Footer>
    </Layout>);
  }
}
