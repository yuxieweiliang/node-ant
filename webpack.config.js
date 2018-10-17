const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin'); // 打开指定浏览器
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清理
const HtmlWebpackPlugin = require('html-webpack-plugin');
// var extract = require('extract-text-webpack-plugin');
// const WebpackMd5Hash = require('webpack-md5-hash');
const marked = require("marked");
import method from './server/utils'

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
  module: {
    noParse: [/moment/],
    rules: [
      // 处理 js,es6 / jsx
      {
        test: /\.(js|es6|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },

      // 处理 json
      {
        test: /\.json$/,
        use: 'json-loader'
      },

      // 处理 css
      {
        test: /\.css$/,
        use: ['style-loader','css-loader','postcss-loader']
      },

      // 处理 css
      {
        test: /\.less/,
        use: ['style-loader','css-loader','postcss-loader','less-loader']
      },
      // 处理图片
      {
        test: /\.(jpg|png|jpeg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 3048,
            name: '[name].[ext]'
          }
        }]
      },

      // 处理字体文件
      {
        test: /\.(woff|woff2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 3048,
            name: '[name].[ext]'
          }
        }]
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            limit: 3048,
            name: '[name].[ext]'
          }
        }]
      },

      // 处理视频与音频文件
      {
        test: /\.(mpeg|mp4|webm|ogv|wav|mp3|flv)$/,
        use: 'file-loader'
      },
      // markdown
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "markdown-loader",
            options: {
              pedantic: true,
              renderer: new marked.Renderer()
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
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

const viewPath = method.assemblyPath(ROOTS, '/src/page/');
var files = fs.readdirSync(viewPath,'utf-8');

files.map(item => {
  config.entry[item] = method.assemblyPath(viewPath, `${item}`);
});


module.exports = config;