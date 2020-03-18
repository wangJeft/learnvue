<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control v-show="isTabFixed"
                 class="tab-control"
                 ref="tabControl1" :titles="['流行','新款','精选']" @TCIClick="TCIClick"></tab-control>

    <scroll class="content" ref="scroll" :probe-type="3"
            :pull-up-load="true"
            @scroll="contentScroll"
            @pullUpLoad="pullUpLoad">
      <home-swiper :banner="banner" @swiperImgLoad="swiperImgLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control ref="tabControl2" :titles="['流行','新款','精选']" @TCIClick="TCIClick"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <!--监听组件的原生点击事件 .native-->
    <back-top @click.native="backClick()" v-show="isShowBackTop"/>

  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import TabControl from "../../components/content/tabControl/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";

  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";
  import Scroll from "../../components/common/scroll/Scroll";
  import BackTop from "../../components/content/backTop/BackTop";

  import {getHomeMultidata, getHomeGoods} from "../../network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      TabControl,
      HomeSwiper,
      RecommendView,
      FeatureView,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banner: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        isShowBackTop: false,
        tabOffset: 0,
        isTabFixed: false
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    created() {
      this.getHomeMultidata();
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
      // console.log('开始创建');
    },
    mounted() {
      const refresh = this.debounce(this.$refs.scroll.refresh, 200)
      //  监听GoodsListItem中发射来的图片加载完成的事件
      this.$bus.$on('goodsImgLoad', function () {
        //刷新better-scroll的当前滚动高度
        refresh();
      })
    },

    // beforeDestroy() {
    //   console.log('home.vue准备销毁');
    // },
    // destroyed() {
    //   console.log('home.vue销毁完毕');
    // },
    //
    // updated() {
    //   console.log('更新home.vue');
    // },
    // beforeUpdate() {
    //   console.log('准备更新home.vue');
    // },
    methods: {
      TCIClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },

      backClick() {
        // console.log('backClick');
        this.$refs.scroll.scrollTo(0, 0, 1000)
      },

      contentScroll(position) {
        this.isShowBackTop = position.y < -800;
        this.isTabFixed = (-position.y) > this.tabOffset
      },

      pullUpLoad() {
        // console.log('上拉加载');
        this.getHomeGoods(this.currentType)
      },

      //  防抖函数
      debounce(func, delay) {
        let timer = null
        return function (...args) {
          if (timer) clearTimeout(timer)
          timer = setTimeout(() => {
            func.apply(this, args)
          }, delay)
        }
      },

      swiperImgLoad() {
        // console.log(this.$refs.tabControl.$el.offsetTop);
        this.tabOffset = this.$refs.tabControl2.$el.offsetTop
      },

      getHomeMultidata() {
        getHomeMultidata()
          .then(
            res => {
              // console.log(res);
              this.banner = res.data.banner.list;
              this.recommends = res.data.recommend.list
            },
            error => {
              console.log(error);
            })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page)
          .then(
            res => {
              // console.log(res);
              this.goods[type].list.push(...res.data.list);
              this.goods[type].page += 1;
              this.$refs.scroll.finishPullUp()
            },
            err => {
              console.log(err);
            }
          )
      },
    }
  }
</script>

<!--scoped作用域-->
<style scoped>
  #home {
    /*padding-top: 44px;*/
    /*view point高度*/
    height: 100vh;
    position: relative;
  }
  .tab-control{
    position: relative;
    z-index: 9;
  }

  .home-nav {
    background-color: var(--color-high-text);
    color: white;
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/
  }

  /*方案一*/
  .content {
    /*height: calc(100% - 93px);*/
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    /*margin-top: 44px;*/
  }

  /*方案二*/
  /*.content{*/
  /*  height: calc(100% - 93px);*/
  /*  overflow: hidden;*/
  /*  margin-top: 44px;*/
  /*}*/

</style>
