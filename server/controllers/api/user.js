import React from 'react';
import _ from 'lodash';
import queryString from 'query-string';
import userSql from '../../sql/user';

/**
 * 书籍
 */

var updateUser = async ctx => {
  let data = JSON.parse(ctx.request.body);
  let params = ctx.request.query || ctx.query;
  let users = await  User.find({'account.username': data.username });
  let message = null;

  if(_.isEmpty(users)) {
    message = '用户不存在'
  } else {
    let update = await User.update({_id: doc[0]._id}, {'account.password': data.password}, {safe: true});
    if(_.isEmpty(users)) {
      message = '更新失败！'
    } else {
      message = {
        type: 'USER',
        container: update
      }
    }
  }
  ctx.body = JSON.stringify({
    data: message
  });
};

var deleteUser = async ctx => {
  let data = JSON.parse(ctx.request.body);
  let params = ctx.request.query || ctx.query;
  let users = await  User.find({'account.username': data.username });
  let message = null;

  if(_.isEmpty(users)) {
    message = '用户不存在！'
  } else {

    let remove = await User.remove({_id: users[0]._id});
    if(remove) {
      message = '删除成功！'
    } else {
      message = '删除失败！'
    }
  }

  ctx.body = JSON.stringify({
    data: message
  });
};

module.exports = {
  'POST /api/user': async ctx => {
    let data = ctx.request.body;
    let params = ctx.request.query || ctx.query;

    let createUser = await ctx.pg.save(userSql.createUser(data));
    console.log('/////////', createUser);

    ctx.body = JSON.stringify({...createUser});
  },
  'GET /api/user': async (ctx) => {
    // let data = JSON.parse(ctx.request.body);
    let params = ctx.request.query || ctx.query;
    let message = null;

    console.log('/////////////////////////////////////////////', ctx.session.user, ctx.session.data);
    /*if(_.isEmpty(users)) {
     message = '用户不存在'
     } else {
     message = users;
     }*/
    ctx.body = '用户不存在';
  },
  'POST /api/user_update': updateUser,
  'POST /api/user_delete': deleteUser,
};