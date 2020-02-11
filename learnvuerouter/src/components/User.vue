<template>
  <div>
    <h2>我是用户中心</h2>
    <p>{{userId}}中心已到达</p>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed:{
      userId(){
        //哪一个路由处于活跃状态就拿到哪一个路由
        return this.$route.params.userId
      }
    }
  }
</script>

<style scoped>

</style>
