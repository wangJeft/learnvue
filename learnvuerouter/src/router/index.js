//在这里配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'
// import Home from '../components/Home';
// import About from '../components/About';
// import User from "../components/User";

//路由懒加载,避免分包过大
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const About = () => import('../components/About')
const User = () => import("../components/User")
const profile = () => import('../components/Profile')
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
    meta: {
      title: '首页'
    },
    children: [
      // {
      //   path: '',
      //   redirect: 'news'
      // },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    meta: {
      title: '关于'
    },
    component: About,
    // beforeEnter: (to, from, next) => {
    //   // console.log('路由独享守卫-about');
    // }
  },
  {
    path: '/user/:userId',
    meta: {
      title: '用户'
    },
    component: User
  },
  {
    path: '/profile',
    meta: {
      title: '档案'
    },
    component: profile
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

//路由导航守卫,前置守卫(guard)
vueRouter.beforeEach((to, from, next) => {
  // console.log('前置守卫');
  document.title = to.matched[0].meta.title
  //必须调用这个方法
  next()
})

//后置守卫
/*vueRouter.afterEach((to, from) => {
  // console.log('后置守卫');
})*/

//3.将router对象传入vue实例中
export default vueRouter
