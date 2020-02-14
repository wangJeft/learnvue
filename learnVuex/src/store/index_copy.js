import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex)

//2.创建对象
const moduleA = {
  state: {
    name: '王林'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    aUpdateName(context) {
      setTimeout(() => {
        context.commit('updateName', '王老魔')
      }, 1000)
    }
  },
  getters: {
    fullName(state) {
      return state.name + "❤李慕婉"
    },
    fullName2(state, getter) {
      return getter.fullName + '❤王平'
    },
    //访问store下的state中的东西
    fullName3(state, getter, rootState) {
      return getter.fullName2 + rootState.counter
    }
  }
}
const store = new Vuex.Store({

  //保存共享状态
  state: {
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
  },

  //mutation中的方法必须都是同步的
  mutations: {
    //方法
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementCount(state, count) {
      //1.普通提交获取
      // state.counter += count
      //2.使用payload封装提交获取
      state.counter += count.count
    },
    addStudent(state, stu) {
      state.students.push(stu)
    },
    updateInfo(state) {
      //可以响应式
      state.info.name = 'jeft'

      //不可以响应式
      // state.info['address'] = 'earth'

      //可以响应式
      // Vue.set(state.info, 'address','earth')

      //不可以响应式
      // delete state.info.age

      //可以响应式
      // Vue.delete(state.info, 'age')


    }
  },

  //类似于计算属性
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more15Stu(state) {
      return state.students.filter(s => s.age > 15)
    },
    //可以调用getter,第二个参数怎么都是getter,无论写什么名字
    more15StuLength(state, getter) {
      return getter.more15Stu.length
    },
    //获取外部传入的参数做操作
    moreAgeStu(state) {
      // return function (age) {
      //   return state.students.filter(s => s.age > age)
      // }
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }

  },

  /*
  modules用来套娃,为了能够在store里面分模块使用,形成单一状态树
  *module中的内容最终会被放进store里的state里面,用的时候使用state调用
  * */
  modules: {
    moduleA: moduleA,
    b: {
      state: {},
      mutations: {},
      actions: {},
      getters: {}
    }
  },

  //此处跑异步方法,
  actions: {
    //可以穿参数 类似于mutations,可以传递回调参数来通知异步事件已经完成
    //第一种方法
    /* aUpdateInfo(context, payload) {
       setTimeout(() => {
         context.commit('updateInfo')
         console.log(payload.message);
         payload.success()
       }, 1000)
     }*/

    //2.使用Promise通知事件完成的回调
    aUpdateInfo(context, payload) {
      return new Promise(resolve => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload);
          console.log('异步事件已完成,准备回调')
          resolve('回调已完成')
        }, 1000)
      })
    }
  }

})

//3.导出store独享
export default store
