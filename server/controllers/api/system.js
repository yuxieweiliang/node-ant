import React from 'react'
import mongoose from 'mongoose';
import queryString from 'query-string'
import oAuth2 from '../../middleware/OAuth2.0';// 认证

/*let sql = {
  login(username) {
    return {
      text: `SELECT * FROM users WHERE username = $1`,
      values: [username]
    }
  },
  isRegister(username) {
    return this.login(username);
  },
  findOneUser(user_id) {
    return {
      text: `SELECT * FROM user_information WHERE user_id = $1`,
      values: [user_id]
    }
  },
  createUser(username, password) {
    return {
      text: `INSERT INTO users(username, password) VALUES($1, $2) RETURNING *`,
      values: [username, password]
    }
  }
};*/

module.exports = {
  'GET /api/system/login': async (ctx, next) => {
    let body = ctx.request.body;
    let params = ctx.request.query || ctx.query;

    console.log('create_token: ', params);
    if(!params.username || !params.password) {
      ctx.body = {
        data: null,
        error: !params.username ? '用户名不能为空' : '密码不能为空',
        state: 1
      };
      return;
    }

    const sql = ctx.sql.select('users', {username: params.username});
    const data = await ctx.pg.findOne(sql);
    console.log('create_token: ', data);
    // const userInfo = await ctx.pg.findOne(sql.findOneUser(data.data.user_id));
    // const user = data.data;

    if(data.data) {
      ctx.body = {
        data: true,
        error: null,
        state: 0
      };
    } else {
      ctx.body = {
        data: false,
        error: data.error,
        state: 1
      };
    }

    // create_token
    /*oAuth2.emit('create_token', user.user_id, user.username, function(data) {
      ctx.session[params.username] = data;
      ctx.session.user = {...user, ...userInfo.data};
      ctx.body = {
        data,
        error: null,
        state: 0
      };
    });*/

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


    console.log('register: ', ctx.request.body);

    const user = ctx.sql.select('users', {username: username});
    const res = await ctx.pg.find(user);

    if(res.data) {
      ctx.body = {
        data: null,
        error: '用户已存在！',
        status: 1
      };
      return;
    }

    const sql = ctx.sql.save('users', { username, password });
    const created = await ctx.pg.query(sql);

    console.log('data2: ', created);
    ctx.body = created;


  },
};