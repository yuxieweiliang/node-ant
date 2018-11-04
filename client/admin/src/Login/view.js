import React from 'react'
import { Button, Input, Form, Layout, Menu, Icon, Row  } from 'antd'
import RootView from '../../script/common'
import behavior from './behavior'
import system from '../../../api/system'
import styles from './style.less'


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

  login(e, v) {
    let {username, password} = this.state;
    system.login({username, password}).then(res =>{
      localStorage.setItem("token", JSON.stringify(res.data));
      console.log(res);
      if(res.data) {

        alert('fffff')
        // window.location.href = '/'
      }
    });
  }

  render() {

    return (<div className={styles.form}>

      <div className={styles.logo}>
        {/*<img alt="logo" src={require('../../assets/yay.jpg')} />*/}
        <span>fdsafdsafdsa</span>
      </div>
      <form>
        <Form.Item hasFeedback>
          <Input onInput={(e) => this._setUsername(e.target.value)} placeholder="Username" />
        </Form.Item>
        <Form.Item hasFeedback>
          <Input type="password" onInput={(e) => this._setPassword(e.target.value)} placeholder="Password" />
        </Form.Item>
        <Row>
          <Button type="primary" onClick={() => this.login()} >{/* loading={loading.effects.login} */}
            Sign in
          </Button>
          <p>
            <span>Username：xueyufei</span>
            <span>Password：xyf.3342</span>
          </p>
        </Row>

      </form>
    </div>);

  }
}
