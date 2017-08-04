const router = require('koa-router')();

// 获取首页
router.get('/', async function(ctx, next) {
  console.log(ctx);
  ctx.render('index')
});

// 获取其他页面
router.get('/other', async function(ctx, next) {
  ctx.render('other')
});

module.exports = router;