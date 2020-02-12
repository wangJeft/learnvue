<template>
  <div>
    <h2>我是Profile</h2>
    <p>姓名:{{$route.query.name}}</p>
    <p>年龄:{{$route.query.age}}</p>
    <p>身高:{{$route.query.height}}</p>
  </div>
</template>

<script>
  export default {
    name: "Profile"
  }
</script>

<style scoped>

</style>
