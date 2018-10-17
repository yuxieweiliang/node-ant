import React from 'react';

var login = async function(ctx, next) {

  ctx.render('index', {
    script: ['/socket.io-client/dist/socket.io.slim.js', '/login.build.js'],
  });
};

module.exports = {
  'GET /login': login,
};