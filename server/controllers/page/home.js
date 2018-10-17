import React from 'react';
import ReactServer from 'react-dom/server';
import Index from '../../../client/app/src/home';


var index = async function(ctx, next) {
  const domRender = ReactServer.renderToString(<Index/>);
  ctx.session.count = ctx.session.count || 0;
  ctx.session.count++;

  ctx.render('home', {
    script: ['/socket.io-client/dist/socket.io.slim.js'],
    contentHtml: domRender
  });
};

module.exports = {
  'GET /': index,
  'GET /index': index,
};