const router = require('koa-router')();
const Input = require('./input');
const React = require('react');
const ReactServer = require('react-dom/server');

const json = {
  a: 'a',
  b: 'b'
};

// 获取首页
router.get('/', async function(ctx, next) {
  const domRender = ReactServer.renderToString(<Input/>);
  ctx.render('index', {
    name: 'name',
    json: JSON.stringify(json),
    domRender: JSON.stringify(domRender)
  })
});

// 获取其他页面
router.get('/other', async function(ctx, next) {
  ctx.render('other', {
    title: 'other',
    data: 'json',
    render: 'reactDom'
  })
});

module.exports = router;