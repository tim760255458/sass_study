/*
 * @Author: buer
 * @Date: 2018-09-02 22:22:57
 * @Last Modified by: buer
 * @Last Modified time: 2018-09-02 23:23:27
 */

<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'collapse',
  props: {
    value: {
      type: [Array, String]
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  mounted() {
    this.setActive()
  },
  methods: {
    toggle (data) {
      const name = data.name.toString()
      let newActiveKey = []
      let activeKey = this.getActiveKey()
      const nameIndex = activeKey.indexOf(name)
      if (data.isActive) {
        if (nameIndex > -1) {
          activeKey.splice(nameIndex, 1)
        }
      } else {
        if (nameIndex < 0) {
          activeKey.push(name)
        }
      }
      newActiveKey = activeKey
      this.currentValue = newActiveKey
      this.$emit('input', newActiveKey)
    },
    setActive () { // 设置折叠面板的展开项
      const activeKey = this.getActiveKey()
      this.$children.forEach((child, index) => {
        const name = child.name || index.toString()
        child.isActive = activeKey.indexOf(name) > -1
        child.index = index
      })
    },
    getActiveKey () { // 获取折叠面板中被选中的标记值
      let activeKey = this.currentValue || []
      if (!Array.isArray(activeKey)) { // 处理成数组格式
        activeKey = [activeKey]
      }
      for (let i = 0, j = activeKey.length; i < j; i++) { // 每个值处理成字符串形式
        activeKey[i] = activeKey[i].toString()
      }
      return activeKey
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue () { // 改变数据后更新视图
      this.setActive()
    }
  }
}
</script>
