import React from 'react'
import queryString from 'query-string'


module.exports = {
  /**
   * 添加 设定
   * @returns {Promise.<void>}
   */
  'POST /api/template/new': async function(ctx) {
    let body = ctx.request.body;
    console.log(body);
    const sql = ctx.sql.save('templates', body)
    ctx.body = await ctx.pg.query(sql);
    // const findBook = await book.find({title: data.title});
  },

  /**
   * 获取 设定  id: archite_id
   * @returns {Promise.<void>}
   */
  'GET /api/template': async function(ctx)  {
    let { id } = ctx.request.query;
    let sql = ctx.sql.select('templates', { book_set_id: id });
    const data = await ctx.pg.find(sql);

    console.log('--------', data);
    // ctx.body = JSON.stringify(data);
    ctx.body = data;
    // author 需要获取 userId  , 可以从token 中获取
  },

  /**
   * 设定 id: archite_id
   * @param ctx
   * @returns {Promise.<void>}
   * @constructor
   */
  'GET /api/template/:id': async function(ctx)  {
    let { id } = ctx.params;
    // console.log(id);

    let item_sql = ctx.sql.select('set_items', { book_set_id: id });
    // let value_sql = ctx.sql.select('set_values', undefined, undefined, ` item_id = 1 OR item_id = 2`);

    // console.log(item_sql, value_sql);

    const temp_items = await ctx.pg.find(item_sql);
    // const temp_values = await ctx.pg.find(value_sql);
    // console.log(temp_items, temp_values);
    ctx.body = {
      items: temp_items.data,
      // values: temp_values.data,
    };
    // author 需要获取 userId  , 可以从token 中获取
  },
};





