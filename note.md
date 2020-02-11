### vue-cli 3以上中 修改项目配置有三种方法
* 使用vue ui打开ui界面,然后导入项目修改配置
* 打开项目目录下的node-modules/@vue/cli-service/webpack.config.js 修改
* 在项目的根目录下创建一个vue.config.js(不能使用其他的名字)文件,来修改项目的配置

### 使用vue-router的步骤
* 在router文件夹下创建index.js文件 注意在VueRouter对象里使用的属性是routes
* 在main.js中的vue实例中注册路由 使用router属性
* 在APP.vue文件中使用router-link来展示路由连接,使用router-view展示内容