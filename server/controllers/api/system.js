import React from 'react'
import mongoose from 'mongoose';
import queryString from 'query-string'
import oAuth2 from '../../middleware/OAuth2.0';// 认证

let sql = {
  text: `SELECT * FROM users WHERE user_name = $1`,
  values: ['543']
};

module.exports = {
  'POST /api/system/login': async (ctx, next) => {
    let body = ctx.request.body;
    console.log('body: ', body);
    let params = ctx.request.query || ctx.query;
    const data = await ctx.pg.findOne(sql);

    if(!data) {
      ctx.body = {
        error: '用户不存在',
        code: 500
      };
      return;
    }

    ctx.session.user = body.username;
    oAuth2.emit('create_access_token', body.username, body.password, function(code) {
      console.log(code);
      ctx.body = {
        data: 'data',
        code
      };
    });

    /**
     * 如果是 ajax 发送的请求，则重定向无法跳转
     */
    // ctx.redirect(body.next || '/');
  },
  'GET /api/system/login2': async (ctx, next) => {
    let body = ctx.request.body;
    let sql = {
      text: `SELECT * FROM users WHERE user_name = $1`,
      values: ['543']
    };
    const cookie = ctx.cookies.get('cid');

    console.log('cookie: ', cookie);


    ctx.body = 'data';

  },
  'POST /api/system/register': async (ctx, next) => {
    let body = ctx.request.body;
    let sql = {
      text: `SELECT * FROM users WHERE user_name = $1`,
      values: ['543']
    };
    const cookie = ctx.cookies.get('cid');

    console.log('cookie: ', cookie);


    ctx.body = 'data';

  },
};