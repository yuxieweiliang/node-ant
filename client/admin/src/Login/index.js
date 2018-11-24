import React, { Component } from 'react'
import { Button, Input, Form, Layout, Menu, Icon, Row  } from 'antd'
import { connect } from 'react-redux';
import Container from '../../components/Container'
import styles from './style.less'


// 进行组装
class ServerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'xueyufei',
      password: 'xyf.3342'
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
    this.props.dispatch({type: 'app/LOGIN', payLoad: this.state});

    /*system.login({username, password}).then(res =>{
      localStorage.setItem("token", JSON.stringify(res.data));
      console.log(res);
      if(res.data) {

        alert('fffff')
        // window.location.href = '/'
      }
    });*/
  }

  render() {

    return(
      <Container {...this.props}>
        <div className={styles.form}>

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
        </div>
      </Container>
    );
  }
}

// 值检查
ServerView.propTypes = {

};

/*if(typeof document !== 'undefined'){
  ReactDOM.hydrate(<RenderView/>, document.getElementById('root'));
}*/

const mapStateToProps  = (state) => ({
  posts: state.posts
});

export default connect(mapStateToProps)(ServerView);
