// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import store from './store/vuex'
import iview from 'iview'
import axios from 'axios'
import marked from 'marked'
import 'iview/dist/styles/iview.css'

Vue.prototype.$marked = marked
Vue.prototype.$axios = axios
Vue.use(iview)
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
// 全局进度条（router，ajax）
router.beforeEach((to, from, next) => {
  iview.LoadingBar.start()
  next()
})

router.afterEach(route => {
  iview.LoadingBar.finish()
})
