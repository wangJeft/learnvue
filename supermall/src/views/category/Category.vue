<template>
  <div class="wrapper" >
    <ul class="content">
      <button @click="btnClick()">按钮</button>
      <li>1分类</li>
      <li>2分类</li>
      <li>3分类</li>
      <li>4分类</li>
      <li>5分类</li>
      <li>6分类</li>
      <li>7分类</li>
      <li>8分类</li>
      <li>9分类</li>
      <li>10分类</li>
      <li>11分类</li>
      <li>12分类</li>
      <li>13分类</li>
      <li>14分类</li>
      <li>15分类</li>
      <li>16分类</li>
      <li>17分类</li>
      <li>18分类</li>
      <li>19分类</li>
      <li>20分类</li>
      <li>21分类</li>
      <li>22分类</li>
      <li>23分类</li>
      <li>24分类</li>
      <li>25分类</li>
      <li>26分类</li>
      <li>27分类</li>
      <li>28分类</li>
      <li>29分类</li>
      <li>30分类</li>
      <li>31分类</li>
      <li>32分类</li>
      <li>33分类</li>
      <li>34分类</li>
      <li>35分类</li>
      <li>36分类</li>
      <li>37分类</li>
      <li>38分类</li>
      <li>39分类</li>
      <li>40分类</li>
      <li>41分类</li>
      <li>42分类</li>
      <li>43分类</li>
      <li>44分类</li>
      <li>45分类</li>
      <li>46分类</li>
      <li>47分类</li>
      <li>48分类</li>
      <li>49分类</li>
      <li>50分类</li>
      <li>51分类</li>
      <li>52分类</li>
      <li>53分类</li>
      <li>54分类</li>
      <li>55分类</li>
      <li>56分类</li>
      <li>57分类</li>
      <li>58分类</li>
      <li>59分类</li>
      <li>60分类</li>
      <li>61分类</li>
      <li>62分类</li>
      <li>63分类</li>
      <li>64分类</li>
      <li>65分类</li>
      <li>66分类</li>
      <li>67分类</li>
      <li>68分类</li>
      <li>69分类</li>
      <li>70分类</li>
      <li>71分类</li>
      <li>72分类</li>
      <li>73分类</li>
      <li>74分类</li>
      <li>75分类</li>
      <li>76分类</li>
      <li>77分类</li>
      <li>78分类</li>
      <li>79分类</li>
      <li>80分类</li>
      <li>81分类</li>
      <li>82分类</li>
      <li>83分类</li>
      <li>84分类</li>
      <li>85分类</li>
      <li>86分类</li>
      <li>87分类</li>
      <li>88分类</li>
      <li>89分类</li>
      <li>90分类</li>
      <li>91分类</li>
      <li>92分类</li>
      <li>93分类</li>
      <li>94分类</li>
      <li>95分类</li>
      <li>96分类</li>
      <li>97分类</li>
      <li>98分类</li>
      <li>99分类</li>
      <li>100分类</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Category",
    data(){
      return{
        scroll:null
      }
    },
    mounted() {
      this.scroll = new BScroll('.wrapper', {
        probeType:3,
        pullUpLoad:true
      })

      this.scroll.on('scroll', (position)=>{
        // console.log(position);
      })

      this.scroll.on('pullingUp',()=>{
        console.log('上拉加载更多数据');
      })
    },

    methods:{
      btnClick(){
        console.log('btnClick');
      }
    }

  }
</script>

<style scoped>
  .wrapper {
    height: 200px;
    background-color: #ff5777;
    overflow:hidden;
    /*overflow-y: scroll;*/
  }
</style>
