<template>
  <div class="about">
    <h1 class="font_tz">sass、vue-cli3 学习</h1>
    <banner>目的</banner>
    <p class="font_content">熟悉 sass、vue-cli3 的使用，能够独自基于 vue-cli3 构建项目。</p>
    <banner>包含的功能</banner>
    <p class="font_content">
      <ul>
        <li>加载的进度条 nprogress.js</li>
        <li>css 样式初始化 normalize.css</li>
        <li>动态页面标题 vue-router</li>
        <li>处理请求 axios.js</li>
        <li>数据模拟 axios-mock-adapter mock.js</li>
      </ul>
    </p>
    <banner>未来计划</banner>
    <p class="font_content">
      <ul>
        <li>v1.2</li>
        <li>动态路由</li>
        <li>权限展示</li>
        <li>注：参考 iview-admin 项目</li>
      </ul>
    </p>
    <banner>版本更新历史</banner>
    <p class="font_content">
      <ul>
        <li>v1.1</li>
        <li>2018.08.17</li>
        <li>处理请求 axios.js</li>
        <li>数据模拟 axios-mock-adapter mock.js</li>
      </ul>
    </p>
    <p class="font_content">
      <ul>
        <li>v1.0</li>
        <li>2018.08.16</li>
        <li>加载的进度条 nprogress.js</li>
        <li>css 样式初始化 normalize.css</li>
        <li>动态页面标题 vue-router</li>
      </ul>
    </p>
    <banner>维护人员</banner>
    <p class="font_content">
      <ul>
        <li>朴不二</li>
      </ul>
    </p>
  </div>
</template>
<script>
import Banner from '../components/banner'
export default {
  name: 'About',
  components: {
    Banner
  }
}
</script>

<style lang="scss" scoped>
h1 {
  text-shadow: 2px 2px 3px #aaa;
}
p {
  color: $color_content;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 4px;
  background: #ffffff;
  ul {
    display: flex;
    flex-direction: column;
    margin: 0;
    li {
      line-height: 1.5;
    }
  }
}
</style>
