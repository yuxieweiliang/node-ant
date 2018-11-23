import React from 'react';

var login = async function(ctx, next) {
  console.log('-------------------------');

  // const cookie = ctx.cookies.get('cid');


  // console.log('cookie: ', cookie);

  await ctx.render('authorize', {
    styles: ['http://localhost:4000/antd/dist/antd.min.css'],
    scripts: [
      '/socket.io-client/dist/socket.io.slim.js',
      '/vendors.js',
      '/authorize.build.js',
    ]
  });
};

module.exports = {
  'GET /system/authorize': login,
};