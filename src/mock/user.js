export default function userRule (mock) {
  mock.onPost('/login').reply(200, {
    user_name: 'buer'
  })
    .onPost('/menu').reply(200, {
      menus: [
        {
          title: '关于',
          description: '关于 - 不二',
          url: 'about',
          show: true
        }
      ]
    })
}
