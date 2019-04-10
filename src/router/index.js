import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hashbang: false,
  routes: [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/home'),
    meta: '官网首页'
  },
  {
    path: '/unify',
    name: 'unify',
    component: () => import('@/views/product/product_unify'),
    meta: '产品中心'
  },
  {
    path: '/expression',
    name: 'expression',
    component: () => import('@/views/product/expression'),
    meta: '应用案例'
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/news/news'),
    meta: '应用案例'
  },
  {
    path: '/news/detail/:id',
    name: 'news',
    component: () => import('@/views/news/detail'),
    meta: '应用案例'
  },
  {
    path: '/leader',
    name: 'leader',
    component: () => import('@/views/leader/leader'),
    meta: '领导关怀'
  },
  {
    path: '/leader/detail/:id',
    name: 'leader',
    component: () => import('@/views/leader/detail'),
    meta: '领导关怀'
  },
  {
    path: '/washroom',
    name: 'washroom',
    component: () => import('@/views/product/washroom'),
    meta: '产品中心'
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about/about'),
    meta: '关于我们'
  },
  {
    path: '/net',
    name: 'net',
    component: () => import('@/views/net+/net+'),
    meta: '互联网+'
  }
  ]
})
