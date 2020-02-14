import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";
import moduleA from "./modules/moduleA";
//1.安装插件
Vue.use(Vuex)

//2.创建对象
const state = {
  counter: 1000,
  students: [
    {id: 110, age: 15, name: 'wang'},
    {id: 111, age: 17, name: 'jeft'},
    {id: 112, age: 19, name: 'li'},
    {id: 113, age: 20, name: 'yifan'},
  ],
  info: {
    name: 'kobe',
    age: 18,
    height: 1.98
  }
}
const store = new Vuex.Store({

  //保存共享状态
  state,

  //mutation中的方法必须都是同步的
  mutations,

  //类似于计算属性
  getters,

  /*
  modules用来套娃,为了能够在store里面分模块使用,形成单一状态树
  *module中的内容最终会被放进store里的state里面,用的时候使用state调用
  * */
  modules: {
    moduleA,
  },

  //此处跑异步方法,
  actions

})

//3.导出store独享
export default store
