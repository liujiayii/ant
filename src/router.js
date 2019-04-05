import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login/login'

Vue.use(Router)
let defaultRouter = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    component: () => import('@/views/layout/layout'),
    children: [
      {
        path: '/404',
        component: () => import('@/views/exception/404')
      }
      , {
        path: '/403',
        component: () => import('@/views/exception/403')
      }, {
        path: '/500',
        component: () => import('@/views/exception/500')
      }]
  }
  , {
    path: '*',
    redirect: '/404'
  }]

export default new Router({
  routes: defaultRouter
})
