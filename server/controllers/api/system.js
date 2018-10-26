import React from 'react'
import mongoose from 'mongoose';
import queryString from 'query-string'
import oAuth2 from '../../middleware/OAuth2.0';// 认证

let sql = {
  login() {
    return {
      text: `SELECT * FROM users WHERE username = $1`,
      values: [...arguments]
    }
  }
};

module.exports = {
  'POST /api/system/login': async (ctx, next) => {
    let body = ctx.request.body;
    let params = ctx.request.query || ctx.query;
    const data = await ctx.pg.findOne(sql.login(body.username));
    const user = data.data;

    if(!data) {
      ctx.body = {
        error: '用户不存在',
        code: 500
      };
      return;
    }

    console.log('create_token: ', data);
    // create_token
    oAuth2.emit('create_token', user.user_id, user.username, function(data) {
      ctx.session[body.username] = data;
      ctx.body = {
        data,
        error: null,
        state: 0
      };
    });

    /*oAuth2.emit('create_access_token', body.username, body.password, function(data) {
      ctx.session[body.username] = body.username;
      console.log(code);
      ctx.body = {
        data,
        error: null,
        status: 0
      };
    });*/

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
  /**
   *  创建用户表
   *  user_id < 主键 >
   *  user_sex 性别 'male', 'female'
   *  user_name 名字
   *  user_role 角色
   *  user_auth 权限 'Readers', 'Author', 'Administrators', 'Group_Admin', 'Root'
   */
  'POST /api/system/register': async (ctx, next) => {
    let { username, password } = ctx.request.body;
    let sql_1 = {
      text: `SELECT * FROM users WHERE username = $1`,
      values: [username]
    };
    let sql_2 = {
      text: `INSERT INTO users(username, password) VALUES($1, $2) RETURNING *`,
      values: [username, password]
    };
    const res = await ctx.pg.find(sql_1);

    if(res.data) {
      ctx.body = {
        data: null,
        error: '用户已存在！',
        status: 1
      };
      return;
    }

    const created = await ctx.pg.findOne(sql_2);

    console.log('data2: ', created);
    ctx.body = created;


  },
};