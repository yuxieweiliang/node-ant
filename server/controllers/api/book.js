import React from 'react';
import book_sql from '../../sql/book';
import arch_sql from '../../sql/architecture';
import queryString from 'query-string'

module.exports = {
  /**
   * 添加书
   * @returns {Promise.<void>}
   */
  'POST /api/book': async function(ctx) {
    let bookBody = ctx.request.body;
    let author = ctx.session.user;

    const architecture = await ctx.pg.save(arch_sql.createArchite(['author']));
    if(!architecture.data) {
      return ctx.body = JSON.stringify({
        data: '创建失败'
      });
    }

    bookBody.book_author = 'author';
    bookBody.book_architecture = architecture.data.archite_id;
    const data = await ctx.pg.save(book_sql.createBook(bookBody));

    // author 需要获取 userId  , 可以从token 中获取
    ctx.body = JSON.stringify({ data });
    // const findBook = await book.find({title: data.title});
  },
  /**
   * 获取自己的书
   * @returns {Promise.<void>}
   */
  'GET /api/book': async function(ctx)  {
    let postData = '';
    let params = ctx.request.query || ctx.query;

    const data = await ctx.pg.findOne(book_sql.findBookById('xueyuffei'));

    console.log('--------', data.rows);
    // ctx.body = JSON.stringify(data);
    ctx.body = data;
    // author 需要获取 userId  , 可以从token 中获取
  },
  'GET /api/book/:id': async function(ctx)  {
    let { id } = ctx.params;
    let params = ctx.request.query || ctx.query;
    ctx.body = await ctx.pg.findOne(book_sql.findBookById(id));
    // author 需要获取 userId  , 可以从token 中获取
  },
};





