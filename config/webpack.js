/* global process __dirname*/

const webpack = require('webpack');
const {rules} = require('./env/rules');

//处理html模板
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 项目根目录,请确保命令在根目录执行 sails-webpack2
const ROOTS = process.cwd();

console.log(`${ROOTS}/staticPage/setting/menu/index.jsx`);
module.exports = {
  resolve: {
    extensions: ['.scss', '.js', '.jsx', '.htm', '.json', '.html', '.es6'],
    modules: ['node_modules']
  },

  // 全局 公用 libs
  entry: {
    // menu: `${ROOTS}/staticPage/setting/menu/index.jsx`,
    // tree: `${ROOTS}/staticPage/setting/tree/index.jsx`,
    table: `${ROOTS}/staticPage/setting/table/index.jsx`,
    vendors: ['react', 'react-dom', 'prop-types', 'moment']
  },

  // 输出
  output: {
    filename: '[name].js',
    path: `${ROOTS}/dist/`/*,
    publicPath: `${ROOTS}/staticPage/setting/menu/`*/
  },

  module: { rules },
  plugins: [
    // 开启调试模式
    /*new webpack.LoaderOptionsPlugin({
      debug: true
    }),*/
    /*new HtmlWebpackPlugin({
      filename: `menu.html`,
      template: `${ROOTS}/staticPage/setting/menu/main.html`,
      showErrors: true,
      // chunks: 'vendors',
      inject: true
    }),
    new HtmlWebpackPlugin({
      filename: `tree.html`,
      template: `${ROOTS}/staticPage/setting/tree/main.html`,
      showErrors: true,
      // chunks: 'vendors',
      inject: true
    }),*/
    new HtmlWebpackPlugin({
      filename: `table.html`,
      template: `${ROOTS}/staticPage/setting/table/main.html`,
      showErrors: true,
      // chunks: 'vendors',
      inject: true
    }),
    // 抽取公用脚本
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendors'],
      filename: 'vendors.js',
      minChunks: Infinity,
    }),
    //  热替换
    // new webpack.HotModuleReplacementPlugin(),
  ]
};