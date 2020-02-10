```bash
# npm安装的时候 如果使用参数 --save-dev 则代表以开发时的环境导入
# 生成package.json文件
npm init 
# 本地安装webpack作为开发时依赖
npm install webpack@3.6.0 --save-dev
# 安装babel处理ES6语法 将ES6转为ES5
npm install --save-dev babel-loader@7 babel-core babel-preset-es2015
# 安装各种loader,安装详情见 https://www.webpackjs.com/loaders/
npm install style-loader --save-dev

# 导入vue可以作为非开发时环境
npm install vue --save
```