import React from 'react';
import ReactServer from 'react-dom/server';
import Index from '../../../src/page/login';


var login = async function(ctx, next) {
  const domRender = ReactServer.renderToString(<Index/>);

  ctx.render('index', {
    script: ['/socket.io-client/dist/socket.io.slim.js', '/login.build.js'],
    // domRender: domRender
  });
};

module.exports = {
  'GET /login': login,
};