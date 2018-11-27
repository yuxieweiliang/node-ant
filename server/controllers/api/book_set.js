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
   * 设定 id: archite_id
   * @param ctx
   * @returns {Promise.<void>}
   * @constructor
   */
  'GET /api/bookSet/:id': async function(ctx)  {
    let { id } = ctx.params;

    let book_set_sql = ctx.sql.select('book_sets', { book_set_id: id });
    let book_sets = await ctx.pg.findOne(book_set_sql);

    let template_sql = ctx.sql.select('templates', { temp_id: id });
    const templates = await ctx.pg.findOne(template_sql);

    let temp_str = templates.data.items.join(',');
    let temp_item_sql = ctx.sql.select('temp_items', undefined, undefined, `temp_item_id IN (${temp_str})`);
    const temp_items = await ctx.pg.find(temp_item_sql);

    if(temp_items.data) {
      book_sets.data.templates = temp_items.data;
    }

    let set_item_sql = ctx.sql.select('book_set_items', { book_set_id: id });
    const set_items = await ctx.pg.find(set_item_sql);
    // let value_sql = ctx.sql.select('set_values', undefined, undefined, ` item_id = 1 OR item_id = 2`);

    let _data = set_items.data, _len = _data.length, set_str = '';
    _data.map((item, i) => {
      set_str += (_len - 1 === i) ? ` item_id = ${item.item_id}` : `item_id = ${item.item_id} OR ` ;
    });

    let set_value_sql = ctx.sql.select('book_set_values', undefined, undefined, set_str);
    const set_values = await ctx.pg.find(set_value_sql);

    if(set_values.data) {
      book_sets.data.values = set_values.data;
    }
    ctx.body = book_sets;
    console.log(book_sets);
    // author 需要获取 userId  , 可以从token 中获取
  },
};





