import React from 'react';

var login = async function(ctx, next) {
  console.log('-------------------------');

  const cookie = ctx.cookies.get('cid');


  console.log('cookie: ', cookie);

  await ctx.render('login', {
    styles: ['antd/dist/antd.min.css'],
    scripts: [
      '/socket.io-client/dist/socket.io.slim.js',
      '/vendors.js',
      '/login.build.js',
    ]
  });
};

module.exports = {
  'GET /login': login,
};