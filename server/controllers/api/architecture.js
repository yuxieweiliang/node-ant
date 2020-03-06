import React from 'react'
import queryString from 'query-string'

const book = '';

let sql = {
  findBookById(book_id) {
    const text = `SELECT * FROM books WHERE book_id = $1`;
    return { text, values: [book_id] };
  },
  findBookByName(book_name) {
    const text = `SELECT * FROM books WHERE book_name = $1`;
    return { text, values: [book_name] };
  },
  createBook(values) {
    const text = `INSERT INTO architecture(
      archite_name,
      archite_author
    )
    VALUES($1, $2)
    RETURNING * `;
    return { text, values };
  }
};

module.exports = {
  /**
   * 添加书
   * @returns {Promise.<void>}
   */
  'POST /api/architecture/new': async function(ctx) {
    let body = ctx.request.body;
    console.log(body);
    const sql = ctx.sql.save('architectures', body)
    ctx.body = await ctx.pg.query(sql);
    // const findBook = await book.find({title: data.title});
  },
  /**
   * 获取自己的书
   * @returns {Promise.<void>}
   */
  'GET /api/architecture': async function(ctx)  {
    let { author, page, size } = ctx.request.query;
    let sql = ctx.sql.select('architectures', { author }, undefined, ` limit ${size || 10} offset ${page || 0}`);
    const data = await ctx.pg.findOne(sql);

    console.log('--------', data.rows);
    // ctx.body = JSON.stringify(data);
    ctx.body = data;
    // author 需要获取 userId  , 可以从token 中获取
  },
  'GET /api/architecture/:id': async function(ctx)  {
    let { id } = ctx.params;
    let params = ctx.request.query || ctx.query;
    ctx.body = await ctx.pg.findOne(sql.findBookById(id));
    // author 需要获取 userId  , 可以从token 中获取
  },
};





