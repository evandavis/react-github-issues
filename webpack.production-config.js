var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config');

config.devtool = 'source-map';

config.plugins = config.plugins.concat([
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compress: {
      warnings: false
    }
  })
]);

config.entry = ['./src/index']

module.exports = config;
