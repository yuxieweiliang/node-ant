import React from 'react'
import queryString from 'query-string'

const book = '';

let sql = {
  findBookById(book_id) {
    const text = `SELECT * FROM books WHERE book_id = $1`;
    return { text, values: [book_id] };
  },
  createBook(values) {
    const text = `INSERT INTO users(username, password) VALUES($1, $2) RETURNING *`;
    return { text, values };
  }
};
module.exports = {
  /**
   * 获取自己的书
   * @returns {Promise.<void>}
   */
  'get /api/book': async (ctx) => {
    let postData = '';
    let params = ctx.request.query || ctx.query;
    const data = await ctx.pg.find_01(sql.findBookById(['xueyufei']));

    console.log('--------', data);
    // author 需要获取 userId  , 可以从token 中获取

    ctx.body = JSON.stringify({
      data: '创建成功'
    });
  },

  /**
   * 添加书
   * @returns {Promise.<void>}
   */
  'POST /api/book': async (ctx) => {
    let defaultValue = {
      book_name: null,
      book_author: null,
      book_signature: null,
      book_editor: null,
      book_role: null,
      book_settings: null,
    };
    let body = Object.assign(defaultValue, ctx.request.body);
    let params = ctx.request.query || ctx.query;


    const data = await ctx.pg.find_01(sql.createBook([...Object.values(body)]));

    console.log(data);

    // author 需要获取 userId  , 可以从token 中获取
    ctx.body = JSON.stringify({
      data: '创建成功'
    });
    // const findBook = await book.find({title: data.title});
    console.log(findBook);
  },
};





function FindSql(option) {
  this.book = option;



}

FindSql.prototype.find = function(option) {
  for(let key in option) {
    if(typeof option[key] !== this.book[key]){
      console.log(`book's attribute mast be ${this.book[key]}, but it's ${option[key]}`)
    }
  }


};



let findSql = new FindSql({
  id: 'text',
});








