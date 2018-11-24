import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button, Input, Form, Layout, Menu, Icon, Row  } from 'antd'
import Container from '../../components/Container'
import styles from './style.less'


const { Header, Content, Footer, Sider } = Layout;


// 进行组装
class ServerView extends Component {
  constructor(props) {
    super(props);
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
  register = () => {
    this.props.dispatch({type: 'app/REGISTER', payLoad: this.state})
  };
  render() {

    return(
      <Container {...this.props} >
        <Layout>
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
                  <Button type="primary" onClick={this.register}>登陆</Button>
                </Form.Item>
              </Form>
            </Content>
            <Sider>s</Sider>
          </Layout>
          <Footer>f</Footer>
        </Layout>
      </Container>
    );
  }
}

// 值检查
ServerView.propTypes = {

};


const mapStateToProps  = (state) => ({
  posts: state.posts
});

export default connect(mapStateToProps)(ServerView);

