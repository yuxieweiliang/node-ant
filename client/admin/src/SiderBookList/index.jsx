import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { List, Icon, Select, Layout } from 'antd';

// 引入Antd的导航组件
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
class Sider extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Layout.Sider id="leftMenu" style={{background: '#fff'}}>
              <div style={{height: 40, lineHeight: '40px', borderBottom: '1px solid #ccc'}}>共100章</div>
                <List
                    style={{ width: 200 }}
                    itemLayout="horizontal"
                    dataSource={data}
                    mode="inline"
                    renderItem={item => (
                      <List.Item>
                        <List.Item.Meta
                          title={<a href="https://ant.design">{item.title}</a>}
                          description="Ant Design,"
                        />
                      </List.Item>
                    )}
                />
            </Layout.Sider>
        );
    }
}

export default Sider