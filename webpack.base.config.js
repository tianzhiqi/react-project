var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  debug: true,
  entry: {
    index: "./src/index.jsx"
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    publicPath: 'http://localhost:8080/dist/'
  },
  resolve: {
    extentsions: ['', '.js']
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {extends: path.resolve(__dirname, '.babelrc')}
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    },
    {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    },
    {
      test: /\.(png|jpg|gif)$/,
      loader: 'url',
      query: {
        limit: 10000, //小于10k的图片转换为base64编码
        name: 'img/[name].[ext]?[hash]' //大于10k图片输出目录和名称
      }
    }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css"),
    // 使用 ProvidePlugin 加载使用率高的依赖库
    new webpack.ProvidePlugin({
      $: 'webpack-zepto'
    })
  ]
}
