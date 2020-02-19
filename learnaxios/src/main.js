import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})

axios({
  //这里再config.index.js->proxyTable里面配置了跨域
  url: "/wxarticle/chapters/json",
}).then(res => {
  console.log(res);
}).catch(err=>{
  console.log(err);
})


// axios({
//   // url: "http://123.207.32.32:8000/home/data/?type=sell&page=3",
//   url: "http://106.54.54.237:8000/api/hy/home/data",
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

//...使用全局的axios和对应的配置在进行网络请求
/*axios.defaults.baseURL='http://106.54.54.237:8000/api/hy'
//单位是毫秒,超时时长
axios.defaults.timeout=500
//发送并发请求(同时发送多个请求)
axios.all([
  axios({
    url: "/home/multidata",
  }),
  axios(
    {
      url: "/home/data",
      params: {
        type: 'pop',
        page: 1
      }
    }
  )
]).then(axios.spread((res1,res2)=>{
  console.log(res1);
  console.log(res2);
}))*/
/*
then(results => {
    console.log(results);
  }
)*/

//创建对应的axios的实例,可以创建多个请求实例,请求多个不同的服务器
// const instance1 = axios.create({
//   baseURL: 'http://106.54.54.237:8000/api/hy',
//   timeout: 5000
// })
// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })
//
// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })


// //封装一个request模块
// import {request} from "./network/request";
// // request({
// //   url: '/home/multidata'
// // }, res => {
// //   console.log(res);
// //
// // }, err => {
// //   console.log(err);
// // })
//
// request({url: '/home/multidata'})
//   .then(res => {
//     console.log(res);
//   }).catch(err => {
//   console.log(err);
// })
