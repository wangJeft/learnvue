<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" active-color="blue">
        <!--文件路径别名-->
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">
          首页
        </div>
      </tab-bar-item>
      <tab-bar-item path="/category" active-color="blue">
        <img slot="item-icon" src="../assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">
          分类
        </div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" active-color="blue">
        <img slot="item-icon" src="../assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">
          购物车
        </div>
      </tab-bar-item>
      <tab-bar-item path="/profile" active-color="blue">
        <img slot="item-icon" src="../assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">
          我的
        </div>
      </tab-bar-item>
    </tab-bar>
  </div>

</template>

<script>
  import TabBar from "../components/tabbar/TabBar";
  import TabBarItem from "../components/tabbar/TabBarItem";

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
