import React from 'react';

module.exports = {
  'GET /register': async function(ctx, next) {
    console.log('-------------------------');

    // const cookie = ctx.cookies.get('cid');


    // console.log('cookie: ', cookie);

    await ctx.render('register', {
      styles: ['antd/dist/antd.min.css'],
      scripts: [
        '/socket.io-client/dist/socket.io.slim.js',
        '/vendors.js',
        '/register.build.js',
      ]
    });
  },
};