const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config.js');
module.exports = webpackMerge(baseConfig, {
  plugins: [
    //压缩js插件,丑化js
    new uglifyJsPlugin()
  ],
});