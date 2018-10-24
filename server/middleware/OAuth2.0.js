/**
 * index.js
 * OAuth 2.0 provider
 *
 * @author Amir Malik
 "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVC……",
 "expires_in": 1296000,
 "token_type": "Bearer",
 "refresh_token": "84a09b5ae3a248a6562b66d8b1758af5e……"
 */

import { OAuth2Provider } from './OAuth2Provider'

const oAuth2 = new OAuth2Provider({
  crypt_key: 'encryption secret',
  sign_key: 'signing secret'
});



export default function(app) {

  app.use(oAuth2.oauth());
  // app.use(oAuth2.login());

  app.use(async function(ctx, next) {


    console.log(':::::::::::: OAuth2Provider ::::::::::::');
    next()
  });
}
