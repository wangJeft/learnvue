const {add, mul} = require('./js/mathUtil.js')
console.log(add(20, 30));
console.log(mul(20, 30));


//ES6的模块化规范
import {name,height} from "./js/info.js";

console.log(name);
console.log(height);

//依赖css依赖
require('./css/normal.css');
//依赖less
require('./css/special.less');

document.writeln('<h2>你好啊, vue</h2>');

//使用vue开发
import Vue from 'vue'
// import App from "./vue/app";
import App from "./vue/App.vue";
new Vue({
  el:'#app',
  template: `<App></App>`,
  components:{
    App
  }
});