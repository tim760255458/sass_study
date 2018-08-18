import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import listCard from './components/list_card.vue'

Vue.config.productionTip = false

Vue.component('list-card', listCard)

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = '不二'
  }
  next()
})
router.afterEach(route => {
  NProgress.done()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
