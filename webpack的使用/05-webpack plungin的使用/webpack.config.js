const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  entry: './src/main.js',
  output: {
    //动态的获取路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    //在网页访问的url加上 dist/
    // publicPath:'dist/'
  },
  module: {
    rules: [
      {
        //正则表达式匹配css文件
        test: /\.css$/,
        //css-loader只负责加载,不负责解析,style-loader可以解析样式
        //多个loader从右向左读
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //当加载的图片小于limit的时候会将图片编译成base64,
              // 当加载的图片大于limit的时候需要使用file-loader,通过url引用图片
              limit: 1200,
              name:'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test:/\.vue$/,
        use:['vue-loader']
      }
    ]
  },
  resolve:{
    //用来解决引用文件时候的省略扩展名的问题
    extensions:['.js','.css','.vue'],
    alias:{
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins:[
      new webpack.BannerPlugin('最终版权归任何人所有'),
      new htmlWebpackPlugin({
        template:'index.html'
      }),
      //压缩js插件,丑化js
      // new uglifyJsPlugin()
  ],
  //开发阶段配置
  devServer:{
    contentBase:'./dist',
    inline:true,
    port:8888
  }
};