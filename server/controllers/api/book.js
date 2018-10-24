import React from 'react'
import queryString from 'query-string'

const book = '';

const getBook = async (ctx, next) => {
  let postData = '';
  let params = ctx.request.query || ctx.query;
  let data = {
    title: ctx.request.body.title,
    description: ctx.request.body.description,
    author: ctx.request.body.userId,
  };
  console.log(data);

  // author 需要获取 userId  , 可以从token 中获取

  const findBook = await book.find({title: data.title});
  console.log(findBook);
  if(findBook.length > 0) {

  } else {
    const createBook = await book.create(data);
    if(createBook.length > 0) {
      ctx.body = JSON.stringify({
        data: '创建成功'
      });
    } else {
      ctx.body = JSON.stringify({
        data: '创建失败'
      });
    }
  }
};
const postBook = async (ctx, next) => {
  let postData = '';
  let params = ctx.request.query || ctx.query;
  let data = {
    title: ctx.request.body.title,
    description: ctx.request.body.description,
    author: ctx.request.body.userId,
  };

  console.log(data);

  // author 需要获取 userId  , 可以从token 中获取

  const findBook = await book.find({title: data.title});
  console.log(findBook);
  if(findBook.length > 0) {

  } else {
    const createBook = await book.create(data);

    if(createBook.length > 0) {
      ctx.body = JSON.stringify({
        data: '创建成功'
      });
    } else {
      ctx.body = JSON.stringify({
        data: '创建失败'
      });
    }
  }

};

module.exports = {
  'get /api/book': getBook,
  'POST /api/book': postBook,
};