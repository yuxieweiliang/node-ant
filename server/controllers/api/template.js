import React from 'react'
import queryString from 'query-string'


function getTemplateSql(book_set_id) {
  const _ = undefined;
  let template_sql = this.select('templates', { book_set_id }, 'temp_item_id');
  return this.select('temp_items', _, _, `temp_item_id IN (${template_sql.sql})`);
}


module.exports = {
  /**
   * 添加 设定
   * @returns {Promise.<void>}
   */
  'POST /api/template/new': async function(ctx) {
    let body = ctx.request.body;
    console.log(body);
    const sql = ctx.sql.save('templates', body);
    ctx.body = await ctx.pg.query(sql);
    // const findBook = await book.find({title: data.title});
  },

  /**
   * 获取 设定  id: archite_id
   * @returns {Promise.<void>}
   */
  'GET /api/template': async function(ctx)  {
    let { id } = ctx.request.query;

    let book_set_sql = ctx.sql.select('book_sets', { archite_id: id });
    let book_sets = await ctx.pg.find(book_set_sql);
    let idList = book_sets.data.map(item => item.book_set_id)

    let dataArray = [];
    let i = 0;
    async function getTemplate(option) {
      let sql = getTemplateSql.call(ctx.sql, option[i]);
      let data = await ctx.pg.find(sql);

      if(data.data) {
        dataArray.push({
          ...book_sets.data[i],
          template: data.data
        });
      }

      if(i < option.length - 1) {
        i++;
        await getTemplate(option)
      }
    }

    await getTemplate(idList);

    ctx.body = {data: dataArray, status: 0, error: null};
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





