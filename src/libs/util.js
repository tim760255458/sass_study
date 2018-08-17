import { menu } from '../api/index'
import lazyLoading from './lazyLoading'

let util = {}

util.initRouter = (vm) => {
  menu({
    id: 1
  }).then(res => {
    vm.$store.commit('SET_MENU', res.data.menus)
    let a = res.data.menus.map(el => {
      return {
        path: `/${el.url}`,
        component: lazyLoading('LayOut'),
        children: [
          {
            path: '',
            component: lazyLoading(el.url),
            meta: {
              title: el.description
            }
          }
        ]
      }
    })
    a.unshift({
      path: '/',
      component: lazyLoading('LayOut'),
      children: [
        {
          path: '',
          component: lazyLoading('Home'),
          meta: {
            title: '首页 - 不二'
          }
        }
      ]
    })
    vm.$router.addRoutes(a)
  })
}

export default util
