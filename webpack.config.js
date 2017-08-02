const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清理
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 项目根目录,请确保命令在根目录执行 sails-webpack2
const ROOTS = process.cwd();
// 打包目录
const publicPath = path.resolve(path.normalize(`${ROOTS}/dist/`));
module.exports = {
  entry: {
    main: path.join(__dirname,'./main.js'),
    // 将所有公用的东西都放在一个文件里
    vendors: ['lodash']
  },
  output: {
    path: publicPath, // 也可以使用 publicPath
    publicPath,
    filename: 'build.js',
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
      // 处理scss
      {
        test: /\.scss$/,
        use: ['style-loader','css-loader','postcss-loader','sass-loader']
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
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
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
    //new ExtractTextPlugin('[name].css'),
    /*new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [require('autoprefixer')({browsers: ['last 5 versions']})]
      }
    }),*/
    new webpack.ProvidePlugin({
      _: 'lodash'
    }),
    // 消除前后端 require 差异
    /*new IsomorphicPlugin({
      extensions: ['jpg', 'png', 'gif', 'css']
    }),*/
    // 抽取公用脚本
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendors'],
      filename: 'vendors.js',
      minChunks: Infinity,
    }),

    /**
     * 输出的根目录已经在output下设置了，
     * 所以filename只需要写入名字，不需要再添加路径名称，否则找不到，
     * 而且内部的一些输入的连接等都会错误
     */
    new HtmlWebpackPlugin({
      title: 'Output Management',
      filename: 'index.html',
      template: 'index.html',
      inject: 'body',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true
  }
};