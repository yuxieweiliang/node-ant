import React from 'react'

export default {
  rootClass: 'inline',
  width: '1100',

  // 表格大小，行高
  size: 'middle',

  // 是否显示边框
  bordered: true,

  // 表头
  title:() => 'Header',

  // 表尾
  footer: () => 'Here is footer',

  // 显示头部
  showHeader: true,

  /**
   * title: 当前显示的内容
   * dataIndex: 当前列的名字
   * key: key
   */

  dataSource: [
    {key: '1', colSpan: 0,  name: '胡彦斌', age: 32, address: '西湖区湖底公园1号'},
    {key: '2', colSpan: 2, name: '胡彦祖', age: 42, address: '西湖区湖底公园1号', render: () => <a href="#">Delete</a> }
  ],

  // 行选择
  rowSelection: {},

  // 滚动
  scroll: undefined,

  // 显示附加信息
  expandedRowRender: record => <p>{record.description}</p>,

  // 显示分页
  pagination: true,


  /**
   * title: 当前显示的内容
   * dataIndex: 当前列的名字
   * key: key
   * filters: 筛选
   * onFilter: 筛选
   */
  columns: [
    {
      title: '姓名', width: 100, fixed: 'left', dataIndex: 'name', key: 'name',
      filters: [
        {text: 'Joe', value: 'Joe',},
        {text: 'John', value: 'John',}
        ],
      onFilter: (value, record) => record.name.indexOf(value) === 0,
    },
    {
      title: '用户1',
      children: [
        {title: '年龄1', dataIndex: 'age', key: 'age', width: 200, sorter: (a, b) => a.age - b.age},
        {title: '姓名1', children: [
          {title: '名字1', dataIndex: 'first', key: 'first', width: 100, sorter: (a, b) => a.age - b.age},
          {title: '姓氏1', dataIndex: 'last', key: 'last', width: 100, sorter: (a, b) => a.age - b.age}
          ]
        }
        ]
    },
    {
      title: '用户2',
      children: [
        {title: '年龄2', dataIndex: 'age', key: 'age', width: 200, sorter: (a, b) => a.age - b.age},
        {title: '姓名2', children: [
          {title: '名字2', dataIndex: 'first', key: 'first', width: 100, sorter: (a, b) => a.age - b.age},
          {title: '姓氏2', dataIndex: 'last', key: 'last', width: 100, sorter: (a, b) => a.age - b.age}
          ]
        }
        ]
    },
    {title: '住址', width: 60, fixed: 'right', dataIndex: 'address', key: 'address',}
  ],

}