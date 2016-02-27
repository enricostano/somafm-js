var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  resolve: {
    root: [
      path.resolve('./src'),
    ]
  },
  output: {
    path: 'dist',
    filename: 'bundle.[hash].js',
    publicPath: ''
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'SomaFM rules!'
    }),
    new ExtractTextPlugin('[name].css')
  ]
};
