<template>
  <div class="nav">
    <div class="nav_logo">
      <img src="../../../assets/logo.png" alt="" srcset="">
    </div>
    <div class="nav_main">
      <ul>
        <router-link tag="li" to="/">首页</router-link>
        <router-link tag="li" to="/home">项目</router-link>
        <router-link tag="li" to="/about">关于</router-link>
      </ul>
    </div>
    <div class="nav_aside"></div>
  </div>
</template>

<script>
export default {
  name: 'nav',
  data () {
    return {
      message: 'hah'
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  height: 70px;
  display: flex;
  align-items: center;
  width: 960px;
  background: $color_z;
}
.nav_logo {
  height: 50px;
  width: 50px;
  > img {
    width: 100%;
    display: inline-block;
  }
}
.nav_main {
  ul > li {
    cursor: pointer;
    padding: 0 20px;
    color: white;
    &:hover {
      color: $color_f;
    }
    &.router-link-exact-active {
      color: $color_f;
    }
  }
}
</style>
