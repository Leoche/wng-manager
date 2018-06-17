// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VueLocalStorage from 'vue-localstorage'

import Buefy from 'buefy'
import store from './store/index'
import 'buefy/lib/buefy.css'

Vue.use(Buefy)
Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueLocalStorage)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
