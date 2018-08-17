import fetch from '../libs/fetch'

export function login (data) {
  return fetch({
    url: '/login',
    data,
    method: 'post'
  })
}

export function menu (data) { // 请求菜单数据
  return fetch({
    url: '/menu',
    data,
    method: 'post'
  })
}
