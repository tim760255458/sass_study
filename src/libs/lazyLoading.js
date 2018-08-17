// 加载组件
export default url => () => import(`./views/${url}.vue`)
