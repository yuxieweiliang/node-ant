import React, { Component } from 'react';
import { List, Icon, Button, Layout } from 'antd';

class Sider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {title: '第一章 1',},
        {title: '第二章 2',},
        {title: '第三章 3',},
        {title: '第四章 4',},
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
                title={<a href="#FFFF">{item.title}</a>}
              />
            </List.Item>
          )}
        />
      </Layout.Sider>
    );
  }
}

export default Sider