/**
 * Created by xueyufei on 2018/11/8.
 */
import React, { Component } from 'react';

const book = {
  title: '书名',  // 最新章节  编辑分组   收藏  状态    操作
  dataIndex: 'bookName',
  key: 'bookName',
  render(text, row) {
    return <div>
      <img src="http://localhost:4000/images/zwfm.png" alt=""/>
      {text}
    </div>;
  }
};

const edit = {
  title: '操作',
  dataIndex: 'edit',
  render(text, row) {
    return <div>
      新建章节 编辑作品 编辑架构
    </div>;
  }
};

export const columns = [ book,
  { title: '最新章节', dataIndex: 'chapter', },
  { title: '编辑分组', dataIndex: 'editorGroup', },
  { title: '收藏',dataIndex: 'collection', },
  { title: '状态',dataIndex: 'status', },
  edit
];

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