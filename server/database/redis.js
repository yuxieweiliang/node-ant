const redis = require('redis');
const session = require('koa-session-redis');
const redisStore = require('koa-redis');

const client = redis.createClient();

client.on("error", function (err) {
  console.log("Error " + err);
});

const store = redisStore({
  key: 'cookie',
  client: client,
  db: 2
});

module.exports = function(app) {
  app.use(session({
    store: store
  }));

  return store.client
};


