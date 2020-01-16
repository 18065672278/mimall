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
    },
    {
      path: '/find',
      name: 'Find',
      component: () => import('../components/Find'),//动态加载的方法
    },
    {
      path: '/shopcar',
      name: 'ShopCar',
      component: () => import('../components/ShopCar'),//动态加载的方法
    },
    {
      path: '/mine',
      name: 'Mine',
      component: () => import('../components/Mine'),//动态加载的方法
    },
    {
      path: '/phone',
      name: 'Phone',
      component: () => import('../components/Phone'),//动态加载的方法
    },
    {
      path: '/tv',
      name: 'Tv',
      component: () => import('../components/Tv'),//动态加载的方法
    },
    {
      path: '/computer',
      name: 'Computer',
      component: () => import('../components/Computer'),//动态加载的方法
    },
    {
      path: '/intelligent',
      name: 'Intelligent',
      component: () => import('../components/Intelligent'),//动态加载的方法
    },
    {
      path: '/goods/:pid',
      name: 'Goods',
      component: () => import('../components/Goods'),//动态加载的方法
    }
  ]
})
