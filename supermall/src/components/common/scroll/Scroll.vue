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

    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      //监听滚动事件
      this.scroll.on('scroll', position => {
        this.$emit('scroll', position)
      })

      //监听上拉加载事件
      this.scroll.on('pullingUp', () => {
        // console.log('上拉加载');
        this.$emit('pullUpLoad')
      })

    },
    methods: {
      scrollTo(x = 0, y = 0, time = 500) {
        this.scroll.scrollTo(x, y, time)
      },
      finishPullUp(){
        this.scroll.finishPullUp()
      }
    }
  }
</script>

<style scoped>

</style>
