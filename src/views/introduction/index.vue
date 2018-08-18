<template>
  <div class="introduction">
    <h1 class="font_tz">sass、vue-cli3 学习</h1>
    <Banner>目的</Banner>
    <p class="font_content">熟悉 sass、vue-cli3 的使用，能够独自基于 vue-cli3 构建项目。</p>
  </div>
</template>

<script>
import Banner from '../../components/banner'
export default {
  name: 'Introduction',
  components: {
    Banner
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
h1 {
  text-shadow: 2px 2px 3px #aaa;
}
p {
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 4px;
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
