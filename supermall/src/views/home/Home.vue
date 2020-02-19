<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import {getHomeMultidata} from "../../network/home";
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView


    },
    data() {
      return {
        banner: [],
        recommends: []
      }
    },
    created() {
      getHomeMultidata().then(
        res => {
          console.log(res);
          this.banner = res.data.banner.list
          this.recommends = res.data.recommend.list
        },
        error => {
          console.log(error);
        })
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-high-text);
    color: white;
  }
</style>
