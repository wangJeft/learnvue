const {add, mul} = require('./js/mathUtil.js')
console.log(add(20, 30));
console.log(mul(20, 30));
//ES6的模块化规范
import {name,height} from "./js/info.js";

console.log(name);
console.log(height);