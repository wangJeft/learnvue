//在这里配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'
// import Home from '../components/Home';
// import About from '../components/About';
// import User from "../components/User";

//路由懒加载,避免分包过大
const Home = () => import('../components/Home')
const HomeNews = ()=>import('../components/HomeNews')
const HomeMessage = ()=>import('../components/HomeMessage')
const About = () => import('../components/About')
const User = () => import("../components/User")
//1.通过vue.use(插件),安装插件
Vue.use(VueRouter)

//2.创建vueRouter对象
const routes = [
  {
    path: '',
    //重定向路径,默认路径
    redirect: '/home',

  },

  {
    path: '/home',
    component: Home,
    children:[
      {
        path:'',
        redirect:'news'
      },
      {
        path:'news',
        component:HomeNews
      },
      {
        path:'message',
        component:HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:userId',
    component: User
  }
]
const vueRouter = new VueRouter({
  //配置路径和组件之间的映射关系
  routes,
  //将默认的hash模式改为history模式
  mode: 'history',
  //可以控制在某个标签被点击(激活)时候的class名称
  linkActiveClass: 'active'
})

//3.将router对象传入vue实例中
export default vueRouter
