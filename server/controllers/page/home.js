import React from 'react';
import ReactServer from 'react-dom/server';
import Index from '../../../src/page/home';


var index = async function(ctx, next) {
  const domRender = ReactServer.renderToString(<Index/>);

  ctx.render('index', {
    script: ['/socket.io-client/dist/socket.io.slim.js', '/home.build.js'],
    // domRender: '<div id="root" class="layout"></div>'
  });
};

module.exports = {
  'GET /': index,
  'GET /index': index,
};