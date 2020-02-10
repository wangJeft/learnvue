<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <p>{{name}}</p>
    <Cpn></Cpn>
  </div>
</template>

<script>
  import Cpn from "./Cpn.vue";
  export default {
    name: "App",
    components:{
      Cpn
    },
    data(){
      return{
        message:'Hello webpack',
        name:'jeft'
      }
    }
  }
</script>

<style scoped>
  .title{
    color: yellow;

  }
</style>