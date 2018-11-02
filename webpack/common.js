const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清理

const method = require("../server/utils");
const modules = require("./module");

// 合并webpack配置
let merge = require('webpack-merge');

// 项目根目录,请确保命令在根目录执行 sails-webpack2
const ROOTS = process.cwd();
// 打包目录
const publicPath = method.assemblyPath(ROOTS, '/dist/');
const config = {
  entry: {
    // 将所有公用的东西都放在一个文件里
    vendors: ['react', 'react-dom', 'lodash', 'antd']
  },
  output: {
    path: publicPath, // 也可以使用 publicPath
    filename: '[name].build.js',
    chunkFilename: '[name].[chunkhash:5].chunk.js'
  },
  module: modules,
  resolve: {
    modules: [path.resolve(ROOTS, 'node_modules')],
    extensions: ['.js', '.jsx', '.es6', '.less'],
    alias: {
      moment: "moment/min/moment-with-locales.min.js"
      //'type': path.resolve(rootDir, './lib/jquery.min.js')
    }
  },
  /**
   * 配置外部访问的公共代码
   */
  externals: {
    window: 'window'
  },
  plugins: [
    new CleanWebpackPlugin(['./dist/'], {
      verbose: true,
      dry: false,
    }),
    // 抽取公用脚本
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendors'],
      filename: 'vendors.js',
      minChunks: Infinity,
    }),
  ]
};
module.exports = config;