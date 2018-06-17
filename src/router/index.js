import Vue from 'vue'
import Router from 'vue-router'
import Login from 'views/Login'
import Dashboard from 'views/Dashboard'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'is-active', // for router-link
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
