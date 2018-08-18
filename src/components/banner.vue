<template>
  <h3 class="font_tc">
    <slot>这里是小标题，通过slot设置</slot>
  </h3>
</template>

<script>
export default {
  name: 'banner',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
h3 {
  padding: 5px 10px;
  border-left: 2px solid $color_z;
}
</style>
