const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const marked = require("marked");
// 合并webpack配置
let merge = require('webpack-merge');
const method = require("../server/utils");
const commonConfig = require("./common");

// 项目根目录,请确保命令在根目录执行 sails-webpack2
const ROOTS = process.cwd();
// 打包目录
const publicPath = method.assemblyPath(ROOTS, `/dist/admin`);
const config = commonConfig(publicPath);


const viewPath = method.assemblyPath(ROOTS, '/client/admin/');
config.entry.index = ["@babel/polyfill", method.assemblyPath(viewPath, `index`)];
config.entry.vendors = ['react', 'react-dom', 'redux', 'redux-saga'];

let plugins = new HtmlWebpackPlugin({
  title: 'index',
  // host: 'http://localhost:8080/', // 像页面中引入的js中注入域名
  host: '/', // 像页面中引入的js中注入域名
  filename: 'index.html',
  template: 'index.html',
  // inject: 'body',
  inject: false,
  chunks: ['vendors','commons', 'index']
});

config.plugins.push(plugins);

config.devServer = {
  // index: '',
  historyApiFallback: true,
  // host: '127.0.0.1',
  // disableHostCheck: true, // 添加域名
  // noInfo: true,
  hot: true,
  inline: true,
  progress: true,
  proxy: {
    context: ['*'],
    target: "http://localhost:8080/",
    bypass: function(req, res, proxyOptions) {
      let index = req.url.indexOf('.js');
      ///res.redirect('/');
      /*if (!!~index) {
        res.redirect(`http://localhost:8080${req.url.substring(index)}`);
        return true;
      }*/
      console.log(req.href);
      return '/index.html'
    }
  }
};









/*files.map(item => {
  const _item = item === 'home' ? 'index':  item;
  config.entry[_item] = method.assemblyPath(viewPath, `${item}`);

  console.log(_item);
});*/
module.exports = config;