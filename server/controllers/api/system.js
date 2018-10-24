import React from 'react'
import mongoose from 'mongoose';
import queryString from 'query-string'

const login = async (ctx, next) => {
  let body = ctx.request.body;
  let sql = {
    text: `SELECT * FROM users WHERE user_name = $1`,
    values: ['543']
  };
  let params = ctx.request.query || ctx.query;
  let views = ctx.session.views || 0;
  ctx.session.views = ++views;
  const data = await ctx.pg.findOne(sql);
  console.log(ctx.session);


  // ctx.sessions.set('fdsafdsafda');
  ctx.body = 'data';
  // author 需要获取 userId  , 可以从token 中获取
  /*const findBook = await book.find({title: data.title});
  console.log(findBook);
  if(findBook.length > 0) {

  } else {
    const createBook = await book.create(data);
    if(createBook.length > 0) {
      ctx.body = JSON.stringify({
        data: '创建成功'
      });
    } else {
      ctx.body = JSON.stringify({
        data: '创建失败'
      });
    }
  }*/
};
const login2 = async (ctx, next) => {
  let body = ctx.request.body;
  let sql = {
    text: `SELECT * FROM users WHERE user_name = $1`,
    values: ['543']
  };
  const cookie = ctx.cookies.get('cid');

  console.log('cookie: ', cookie);


  ctx.body = 'data';

};

module.exports = {
  'POST /api/system/login': login,
  'GET /api/system/login2': login2,
};