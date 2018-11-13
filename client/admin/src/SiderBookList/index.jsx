import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { List, Icon, Button, Layout } from 'antd';

class Sider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {title: '架构 1',},
        {title: '架构 2',},
        {title: '架构 3',},
        {title: '架构 4',},
      ]
    };
  }

  render() {
    return (
      <Layout.Sider id="leftMenu" style={{background: '#fff', borderRight: '1px solid #ccc'}}>
        <div style={{padding: '10px 20px', borderBottom: '1px solid #ccc', display: 'flex'}}>
          <Button style={{float: 'right'}}>新建</Button>
        </div>
        <List
          style={{ width: 200 }}
          itemLayout="horizontal"
          dataSource={this.state.list}
          mode="inline"
          renderItem={item => (
            <List.Item  style={{paddingLeft: 24}}>
              <List.Item.Meta
                title={<a href="https://ant.design">{item.title}</a>}
              />
            </List.Item>
          )}
        />
      </Layout.Sider>
    );
  }
}

export default Sider