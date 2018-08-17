import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import LayOut from './views/layout'
import Home from './views/home/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: LayOut,
      children: [
        {
          path: '',
          component: Home,
          meta: {
            title: '首页 - 不二'
          }
        }
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    //   meta: {
    //     title: '关于 - 不二'
    //   }
    // },
    {
      path: '/About',
      component: LayOut,
      children: [
        {
          path: '',
          component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
          meta: {
            title: '关于 - 不二'
          }
        }
      ]
    }
  ]
})
