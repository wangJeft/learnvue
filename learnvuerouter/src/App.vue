<template>
  <div id="app">
    <h2>APP组件</h2>
<!--使用tag属性可以选择将router-link渲染成什么样的标签-->
<!--replace属性可以使浏览器里的返回消失-->
<!--active-class可以控制在某个标签被点击(激活)时候的class名称-->
    <router-link to="/home" tag="button" replace >首页</router-link>
    <router-link to="/about" replace >关于</router-link>
    <router-link :to="'/user/'+userId" replace >用户</router-link>
<!--    <router-link to="/home" tag="button" replace >首页</router-link>-->
<!--    <router-link to="/about" replace >关于</router-link>-->
<!--    <button @click="goHome">首页</button>
    <button @click="goAbout">关于</button>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userId:'jeft'
    }
  }
/*  methods:{
    goHome(){
      //通过代码路由跳转
      // this.$router.push('/home')
      this.$router.replace('/home')
    },
    goAbout(){
      this.$router.replace('/about')
    }
  }*/
}
</script>

<style>
  .active{
    color: red;
  }
</style>
