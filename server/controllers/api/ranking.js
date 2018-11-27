import React from 'react'
import queryString from 'query-string'


module.exports = {
  /**
   * 添加排行榜
   * @returns {Promise.<void>}
   */
  'POST /api/ranking/new': async function(ctx) {
    let body = ctx.request.body;
    console.log(body);
    const sql = ctx.sql.save('rankings', body)
    ctx.body = await ctx.pg.query(sql);
    // const findBook = await book.find({title: data.title});
  },
  /**
   * 获取排行榜
   * @returns {Promise.<void>}
   */
  'GET /api/ranking': async function(ctx)  {
    let { archite_id } = ctx.request.query;
    let sql = ctx.sql.select('rankings', { archite_id });
    console.log(archite_id)
    const data = await ctx.pg.find(sql);

    // console.log('--------', data);
    // ctx.body = JSON.stringify(data);
    ctx.body = data;
    // author 需要获取 userId  , 可以从token 中获取
  },
  /**
   * 排行榜 id: architecture_id
   * @param ctx
   * @returns {Promise.<void>}
   * @constructor
   */
  'GET /api/ranking/:id': async function(ctx)  {
    let params = ctx.request.query || ctx.query;
    console.log(params)
    let sql = ctx.sql.select('rankings', { author });
    // author 需要获取 userId  , 可以从token 中获取
  },
};





