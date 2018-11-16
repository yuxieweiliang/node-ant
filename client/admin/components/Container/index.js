/**
 * Created by xueyufei on 2018/11/13.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon, Layout } from 'antd';
import LeftMenu from '../LeftMenu';
import Header from '../Header'
import styles from './style.less';


import { Table } from 'antd';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }
  /*componentWillUpdate(nextprops){
    console.log('common/showLoading', nextprops);
    if (nextprops.location.pathname !== this.props.location.pathname) {
      this.props.dispatch({
        type:'common/showLoading'
      })
    }
  }
  componentDidUpdate(nextprops){
    console.log('common/hideLoading', nextprops);
    if(this.props.common.loading===true){
      this.props.dispatch({
        type:'common/hideLoading'
      })
    }
  }*/

  /*shouldComponentUpdate(nextProps, nextState) {
    const { loading } = this.props;
    console.log(nextProps, nextState);
    return true;
  }*/
  componentWillMount() {
    this.props.dispatch({type: 'app/loading', payload: true})
  }
  componentDidMount() {
    this.props.dispatch({type: 'app/loading', payload: false})
  }
  toggleCollapsed = () => {
    console.log(this.state.collapsed);
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    const width = window.innerWidth - 120;
    const background = 'url(/public/images/background_02.jpg)'; //  no-repeat
    console.log('this.props.children', this.props.children);
    return (
      <Layout style={{flexDirection: 'row'}}>
        <LeftMenu {...this.props} collapsed={this.state.collapsed}/>
        <Layout>
          <Header toggleCollapsed={this.toggleCollapsed}/>
          <Layout.Content
            className={styles.content}
            style={{
              ...this.props.style,
              background,
              backgroundSize: `${width}px auto`
            }}
          >

            { this.props.children }

          </Layout.Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps  = (state) => ({
  posts: state.posts
});

export default connect(mapStateToProps)(PostList);