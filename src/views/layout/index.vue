<template>
  <div class="layout">
    <div class="layout_nav">
      <Nav></Nav>
    </div>
    <div class="layout_main">
      <transition name="fade" mode="out-in">
        <router-view class="layout_content" />
      </transition>
    </div>
  </div>
</template>

<script>
import Nav from './nav'
export default {
  name: 'layout',
  components: {
    Nav
  },
  data () {
    return {
      message: 'layout pages'
    }
  }
}
</script>

<style lang="scss" scoped>
.layout_nav {
  display: flex;
  justify-content: center;
  background: $color_z;
  @include shadow;
}
.layout_main {
  display: flex;
  justify-content: center;
  height: calc(100vh - 70px);
  overflow: auto;
  .layout_content {
    width: 960px;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
