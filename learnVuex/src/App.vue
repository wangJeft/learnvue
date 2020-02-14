<template>
  <div id="app">
    <h2>--------App内容:vuex modules使用--------</h2>
    <p>{{$store.state.moduleA.name}}</p>
    <button @click="updateModuleName">修改modules中name</button>
    <button @click="asyncUpdateModuleName">异步修改modules中name</button>
    <p>{{$store.getters.fullName}}</p>
    <p>{{$store.getters.fullName2}}</p>

    <h2>--------App内容:vuex state响应式--------</h2>
    <p>{{$store.state.info}}</p>
    <button @click="updateInfo">修改信息</button>

    <h2>--------app内容--------</h2>
    <!--    <h2>{{message}}</h2>-->
    <h2>{{$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addStudent">增加学生</button>

    <h2>--------App内容:getters使用--------</h2>
    <p>{{$store.getters.powerCounter}}</p>
    <p>{{$store.getters.more15Stu}}</p>
    <p>{{$store.getters.more15StuLength}}</p>
    <p>{{$store.getters.moreAgeStu(17)}}</p>


    <h2>--------hello-vuex内容--------</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";

  export default {
    name: 'App',
    components: {
      HelloVuex
    },
    data() {
      return {
        message: '我是APP组件',
        counter: 0
      }
    },
    methods: {
      add() {
        this.$store.commit('increment')
      },
      sub() {
        this.$store.commit('decrement')
      },
      addCount(count) {
        //1.普通的提交方式
        // this.$store.commit('incrementCount', count)
        //2.提交封装
        this.$store.commit({
          type: 'incrementCount',
          count
        })
      },
      addStudent() {
        const stu = {id: 116, name: 'hao', age: 25}
        this.$store.commit('addStudent', stu)
      },
      updateInfo(){
        //使用mutations同步修改
        // this.$store.commit('updateInfo')

        //使用actions异步修改
        /*this.$store.dispatch('aUpdateInfo',{
          message:'我把信息带来了',
          success(){
            console.log('信息修改完成,回调成功')
          }
        })*/

        //异步事件返回一个promise完成回调完成的通知
        this.$store
          .dispatch('aUpdateInfo','我把信息带来了')
          .then(response=>{
            console.log(response);
          })
      },
      updateModuleName(){
        this.$store.commit('updateName','李慕婉')
      },
      asyncUpdateModuleName(){
        this.$store.dispatch('aUpdateName')
      }
    }
  }
</script>

<style>
</style>
