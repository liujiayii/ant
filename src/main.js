import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './config/ant'

Vue.config.productionTip = false

/*路由守卫*/
import extendsRoutes from './config/menu'

let registerRouteFresh = true
router.beforeEach((to, form, next) => {
  /*解决了addRouter在页面刷新后丢失的问题，感觉不是很好的解决方案*/
  if (registerRouteFresh) {
    let routerPath = window.sessionStorage.getItem('routerPath')
    router.addRoutes(extendsRoutes.extendsRoutes)
    if (routerPath && registerRouteFresh) {
      registerRouteFresh = false
      return next({path: routerPath})
    }
  }
  /*判断如果没有名字就返回登录页，不判断to.path会陷入死循环*/
  if (!window.sessionStorage.getItem('userName') && to.path !== '/login') {
    return next({path: '/login'})
  } else {
    next()
  }
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
