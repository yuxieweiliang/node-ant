/**
 * Created by xueyufei on 2018/11/8.
 */
import React, { Component } from 'react';

import { Icon, } from 'antd';
export const columns = [{
  title: '书名',  // 最新章节  编辑分组   收藏  状态    操作
  dataIndex: 'name',
  key: 'name',
  render(text, row) {
    return <div>
      <img src="http://localhost:4000/images/zwfm.png" alt="" style={{width:40}}/>
      {text}
      </div>;
  }
}, {
  title: '最新章节',
  dataIndex: 'chapter',
}, {
  title: '编辑分组',
  dataIndex: 'edited_group',
}, {
  title: '收藏',
  dataIndex: 'collection',
}, {
  title: '状态',
  dataIndex: 'status',
}, {
  title: '操作',
  dataIndex: 'edit',
  render(text, row) {
    return <div>
      编辑<Icon type="sliders" theme="twoTone" />
    </div>;
  }
}];
export const data =  [
  {
    key: '1',
    name: '倾仙绝世',
    editor_group: '仙侠',
    status: '',
    collection: '',
    chapter: '',
    edit: 'caozuo',
  }
];