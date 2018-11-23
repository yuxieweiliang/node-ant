import React from 'react';
import serializer from 'serializer';
import querystring from 'querystring';
import oAuth2 from '../../middleware/OAuth2.0';// 认证


/**
 * 同意认证:
 * GET:
 * /oauth/authorize ? client_id = 1 & response_type = token & redirect_uri=http://localhost:3000
 *
 * POST:
 *  /oauth/authorize ?
 *  client_id = 1 &
 *  redirect_uri = http://localhost:3000 &
 *  response_type=token &
 *  x_user_id = MCS2L4YEoNfLzX-2esG7nQDicEs%3DT8yv9RVTcd4e809b0c0e16035b0e2e2b9cca6c88
 *  {
 *    client_id: 'xxxxxxxxx',
 *    x_user_id: 'xxxxxxxxx',
 *    response_type: 'token',
 *    redirect_uri: 'xxxxxx',
 *  }
 *  {
 *    client_id: 'xxxxxxxx',
 *    x_user_id: 'xxxxxxxx',
 *    response_type: 'code',
 *    state: 'xxxxxxxxxxxx' || null,
 *    redirect_uri: 'xxxxx',
 *  }
 */

var authorize = async function(ctx, next) {
  let { query, body } = ctx.request;
  let response_type = (query.response_type  || body.response_type) || 'code',
    state           = (query.state          || body.state),
    x_user_id       = (query.x_user_id      || body.x_user_id),
    client_id       = (query.client_id      || body.client_id),
    redirect_uri    = (query.redirect_uri   || body.redirect_uri);

  if(!response_type) {
    ctx.status = 400;
    ctx.body = ('invalid response_type requested');
    return;
  }
  if(!('allow' in body)) {
    redirect_uri += querystring.stringify({error: 'access_denied'});
    ctx.status = 303;
    ctx.body = {url: redirect_uri};
    return;
  }

  redirect_uri += response_type === 'code' ? '?' : '#';

  console.log(response_type);


    if('token' === response_type) {
      var user_id;
      if(!x_user_id) {
        console.error('allow/token error');
        ctx.status = 500;
        ctx.body = ('invalid x_user_id requested');
        return;
      }

      user_id = serializer.parse(x_user_id);

      oAuth2.emit('create_access_token', user_id, client_id, function(extra_data,token_options) {
        var atok = oAuth2.generateAccessToken(user_id, client_id, extra_data, token_options);

        if(oAuth2.listeners('save_access_token').length > 0)
          oAuth2.emit('save_access_token', user_id, client_id, atok);

        redirect_uri += querystring.stringify(atok);

        ctx.status = 303;
        ctx.body = {
          url: redirect_uri
        };
      });
    } else {
      let code = serializer.randomString(128);

      oAuth2.emit('save_grant', ctx, client_id, code, function() {
        let extras = {
          code: code,
        };

        // pass back anti-CSRF opaque value
        if(state)
          extras['state'] = state;

        redirect_uri += querystring.stringify(extras);

        ctx.status = 303;
        ctx.body = {
          data: {
            ...extras,
            url: redirect_uri,
          },
          error: null,
          state: 0
        };
      });
    }
};

module.exports = {
  'GET /oauth2.0/authorize': authorize,
  'POST /oauth2.0/authorize': authorize,
};