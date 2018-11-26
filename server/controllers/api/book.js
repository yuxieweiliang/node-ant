import React from 'react';
import queryString from 'query-string'

module.exports = {
  /**
   * 添加书
   * @returns {Promise.<void>}
   */
  'POST /api/book/new': async function(ctx) {
    let { body } = ctx.request;
    ctx.body = await ctx.pg.save(ctx.sql.save('books', body));
  },
  /**
   * 获取自己的书
   * @returns {Promise.<void>}
   */
  'GET /api/book': async function(ctx)  {
    let { author, page, size } = ctx.request.query;
    let sql = ctx.sql.select('books', { author }, undefined, ` limit ${size || 10} offset ${page || 0}`);
    ctx.body = await ctx.pg.find(sql);
    // author 需要获取 userId  , 可以从token 中获取
  },
  /**
   * select * from books where book_id = 1;
   * @param ctx
   * @returns {Promise.<void>}
   * @constructor
   */
  'GET /api/book/:id': async function(ctx)  {
    let { id } = ctx.params;
    let sql = ctx.sql.select('books', {book_id: id})
    ctx.body = await ctx.pg.findOne(sql);
    // author 需要获取 userId  , 可以从token 中获取
  },
};





