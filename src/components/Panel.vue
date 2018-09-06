/*
 * @Author: buer
 * @Date: 2018-09-02 22:42:21
 * @Last Modified by: buer
 * @Last Modified time: 2018-09-02 22:55:16
 */
<template>
  <div class="pancel">
    <div @click="toggle">
      <slot name="title">这里是标题</slot>
    </div>
    <div v-show="isActive">
      <slot name="content">这里是内容</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'panel',
  props: ['name'],
  data () {
    return {
      index: 0,
      isActive: false
    }
  },
  methods: {
    toggle () {
      this.$parent.toggle({
        name: this.name || this.index,
        isActive: this.isActive
      })
    }
  }
}
</script>
