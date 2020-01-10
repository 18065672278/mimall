import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../components/Home'),//动态加载的方法
      meta: {keepAlive: true}
    },
    {
      path: '/type',
      name: 'Type',
      component: () => import('../components/Type'),//动态加载的方法
      meta: {keepAlive: true}
    },
    {
      path: '/find',
      name: 'Find',
      component: () => import('../components/Find'),//动态加载的方法
      meta: {keepAlive: true}
    },
    {
      path: '/shopcar',
      name: 'ShopCar',
      component: () => import('../components/ShopCar'),//动态加载的方法
      meta: {keepAlive: true}
    },
    {
      path: '/mine',
      name: 'Mine',
      component: () => import('../components/Mine'),//动态加载的方法
      meta: {keepAlive: true}
    },
  ]
})
