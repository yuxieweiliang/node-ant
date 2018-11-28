import React from 'react'
import queryString from 'query-string'


module.exports = {
  /**
   * 添加 设定
   * @returns {Promise.<void>}
   */
  'POST /api/bookSet/new': async function(ctx) {
    let body = ctx.request.body;
    console.log(body);
    const sql = ctx.sql.save('book_sets', body)
    ctx.body = await ctx.pg.query(sql);
    // const findBook = await book.find({title: data.title});
  },


  /**
   * 根据 设定ID 查询所有设定列表
   * id: archite_id
   * @returns {Promise.<void>}
   */
  'GET /api/bookSet': async function(ctx)  {
    let { id } = ctx.request.query;
    console.log(id);
    let book_sets = ctx.sql.select('book_sets', { archite_id: id });
    const data = await ctx.pg.find(book_sets);

    // console.log('--------', data);
    // ctx.body = JSON.stringify(data);
    ctx.body = data;
    // author 需要获取 userId  , 可以从token 中获取
  },
  /**
   * 设定 id: book_set_id
   * @param ctx
   * @returns {Promise.<void>}
   * @constructor
   */
  'GET /api/bookSet/:id': async function(ctx)  {
    let { id } = ctx.params;

    /**
     * 取出 book_sets 中 对应 ID 的设定条目
     * 从条目中获取 title & introduction
     */
    let book_set_sql = ctx.sql.select('book_sets', { book_set_id: id });
    let book_sets = await ctx.pg.findOne(book_set_sql);

    /**
     * 取出 templates 中 对应 ID 的 items 所条目的 temp_item_id
     * 从条目中获取 title & introduction
     */
    let template_sql = ctx.sql.select('templates', { book_set_id: id }, 'temp_item_id');
    let temp_item_sql = ctx.sql.select('temp_items', undefined, undefined, `temp_item_id IN (${template_sql.sql})`);
    const temp_items = await ctx.pg.find(temp_item_sql);

    if(temp_items.data) {
      book_sets.data.templates = temp_items.data;
    }

    let set_item_sql = ctx.sql.select('book_set_items', { book_set_id: id }, 'book_val_id');
    let set_value_sql = ctx.sql.select('book_set_values', undefined, undefined, `book_val_id IN (${set_item_sql.sql})`);
    const set_values = await ctx.pg.find(set_value_sql);

    if(set_values.data) {
      book_sets.data.values = set_values.data;
    }
    ctx.body = book_sets;
    // author 需要获取 userId  , 可以从token 中获取
  },
};





