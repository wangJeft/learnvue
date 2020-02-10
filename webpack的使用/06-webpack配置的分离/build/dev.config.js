const baseConfig = require('./base.config.js');
const webpackMerge = require('webpack-merge');
module.exports = webpackMerge(baseConfig, {
  //开发阶段配置
  devServer: {
    contentBase: './dist',
    inline: true,
    port: 8888
  }
}) ;