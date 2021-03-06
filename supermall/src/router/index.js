import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = ()=>import('../views/home/Home')
const Category = ()=>import('../views/category/Category')
const ShopCart = ()=>import('../views/cart/ShopCart')
const Profile = ()=>import('../views/profile/Profile')
const Detail = ()=>import('../components/content/detail/Detail')

Vue.use(VueRouter)
const routes = [
  {
    path: '',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/shopCart',
    component:ShopCart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail/:iid',
    component:Detail
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
