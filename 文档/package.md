

{
  "name": "00_demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "cross-env NODE_ENV=dev webpack-dev-server --inline --hot --color --watch --open --config ./config/webpack",
    "start": "browserify -t babelify client/app/src/home/main.js --standalone main -o public/main.js  && nodemon app.js",
    "create: start": "cross-env NODE_ENV=development webpack-dev-server --inline --hot --color --watch",
    "create:page": "set NODE_ENV=development && node tool/createPage",
    "mongo": "mongod --dbpath ./db",
    "initpg": "node ./tool/postgresSql/initdb",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "autoprefixer": "^7.1.5",
    "babel-core": "^6.26.3",
    "babel-loader": "^8.0.4",
    "babel-plugin-transform-decorators-legacy": "^1.3.4",
    "babel-polyfill": "^6.23.0",
    "babel-preset-env": "^1.7.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-0": "^6.24.1",
    "babel-register": "^6.24.1",
    "clean-webpack-plugin": "^0.1.16",
    "cross-env": "^5.0.2",
    "css-loader": "^0.28.4",
    "file-loader": "^0.11.2",
    "html-loader": "^0.5.0",
    "html-webpack-plugin": "^2.30.1",
    "js-beautify": "^1.6.11",
    "koa-pug": "^3.0.0-2",
    "koa-static": "^4.0.1",
    "koa-views": "^6.0.2",
    "koa-webpack-middleware": "^1.0.7",
    "less": "^3.0.0-alpha.3",
    "less-loader": "^4.0.5",
    "markdown": "^0.5.0",
    "markdown-loader": "^2.0.1",
    "marked": "^0.3.6",
    "open-browser-webpack-plugin": "0.0.5",
    "postcss-cssnext": "^3.0.2",
    "postcss-loader": "^2.0.8",
    "prop-types": "^15.5.10",
    "stream": "0.0.2",
    "style-loader": "^0.18.2",
    "transform-runtime": "0.0.0",
    "url-loader": "^0.5.9",
    "warning": "^3.0.0",
    "webpack": "^3.4.1",
    "webpack-dev-middleware": "^1.12.0",
    "webpack-dev-server": "^2.6.1",
    "webpack-hot-middleware": "^2.19.1",
    "webpack-koa2-middleware": "^2.1.0",
    "webpack-merge": "^4.1.0"
  },
  "dependencies": {
    "antd": "^3.10.1",
    "core-decorators": "^0.20.0",
    "font-awesome": "^4.7.0",
    "formidable": "^1.2.1",
    "get-paths": "0.0.2",
    "isomorphic-fetch": "^2.2.1",
    "koa": "^2.5.0",
    "koa-better-body": "^3.0.4",
    "koa-body": "^2.5.0",
    "koa-generic-session": "^2.0.1",
    "koa-redis": "^3.1.2",
    "koa-router": "^7.2.1",
    "koa-session-redis": "^1.1.0",
    "lodash": "^4.17.4",
    "moment": "^2.18.1",
    "mongoose": "^4.11.7",
    "mysql": "^2.16.0",
    "pg": "^7.5.0",
    "react": "^15.6.1",
    "react-dom": "^15.6.1",
    "redis": "^2.8.0",
    "socket.io": "^2.0.4"
  }
}

{
  "presets": [ "react", "es2015", "stage-0"],
  "plugins": ["transform-decorators-legacy", "transform-es2015-modules-commonjs"]
}



babel-core & babel-loader@8+
@babel/core & babel-loader@7
