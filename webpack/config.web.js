const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const marked = require("marked");
const method = require("../server/utils");
const commonConfig = require("./common");

// 合并webpack配置
let merge = require('webpack-merge');

// 项目根目录,请确保命令在根目录执行 sails-webpack2
const ROOTS = process.cwd();
// 打包目录
const publicPath = method.assemblyPath(ROOTS, `/dist/web`);
const config = commonConfig(publicPath);

const viewPath = method.assemblyPath(ROOTS, '/client/web/src/');
const files = fs.readdirSync(viewPath,'utf-8');

files.map(item => {
  const _item = item === 'home' ? 'index':  item;
  config.entry[_item] = method.assemblyPath(viewPath, `${item}`);

  let plugins = new HtmlWebpackPlugin({
    title: _item,
    filename: _item + '.html',
    template: 'index.html',
    inject: 'body',
    chunks: ['vendors','commons', _item]
  });

  config.plugins.push(plugins);
});
module.exports = config;