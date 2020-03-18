<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot>

      </slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null
      }
    },

    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },

    created() {
      // console.log('子组件开始创建');
    },
    mounted() {
      // console.log('子组件挂载');
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      //监听滚动事件
      if (this.probeType === 2 || this.probeType === 3){
        this.scroll.on('scroll', position => {
          this.$emit('scroll', position)
        })
      }

      //监听上拉加载事件
      if (this.pullUpLoad){
        this.scroll.on('pullingUp', () => {
          // console.log('上拉加载');
          this.$emit('pullUpLoad')
        })
      }


    },
    methods: {
      //滚动到页面顶部
      scrollTo(x = 0, y = 0, time = 500) {
        //this.scroll && 作用是避免当前scroll为空的时候调用方法
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      //结束上拉加载
      finishPullUp() {
        this.scroll.finishPullUp()
      },
      //
      refresh(){
        // console.log('----');
        this.scroll && this.scroll.refresh()
      }

    }
  }
</script>

<style scoped>

</style>
