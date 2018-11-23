import React from 'react';


var index = async function(ctx, next) {
  // ctx.session.count = ctx.session.count || 0;
  // ctx.session.count++;

  await ctx.render('home', {
    styles: [],
    scripts: [
      '/socket.io-client/dist/socket.io.slim.js',
      '/vendors.js',
      '/home.build.js',
    ]
  });
};

module.exports = {
  'GET /': index,
  'GET /index': index,
};