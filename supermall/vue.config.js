module.exports = {
  configureWebpack: {
    resolve: {
      //文件路径别名
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }

  }
}