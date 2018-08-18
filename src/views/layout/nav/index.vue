<template>
  <div class="nav">
    <div class="nav_logo">
      <img src="../../../assets/logo.png" alt="" srcset="">
    </div>
    <div class="nav_main">
      <ul>
        <!-- <router-link v-if="item.show" v-for="(item, index) of list" :key="index" tag="li" :to="item.url">{{ item.title }}</router-link> -->
        <router-link tag="li" to="/">首页</router-link>
        <router-link tag="li" to="/introduction">介绍</router-link>
        <router-link tag="li" to="/home">项目</router-link>
        <router-link tag="li" to="/about">关于</router-link>
      </ul>
    </div>
    <div class="nav_aside"></div>
  </div>
</template>

<script>
import { menu } from '../../../api/index.js'
export default {
  name: 'nav',
  data () {
    return {
      message: 'hah',
      list: []
    }
  },
  mounted () {
    this.getMenu()
  },
  methods: {
    getMenu () {
      menu({
        id: 1
      }).then(res => {
        this.list = res.data.menus
      })
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
      color: $color_warning;
    }
    &.router-link-exact-active {
      color: $color_success;
    }
  }
}
</style>
