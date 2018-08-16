<template>
  <div class="card curved_box">
    <header slot="header">{{ data.title }}</header>
    <p slot="content">{{ data.content }}</p>
    <footer slot="footer">
      <a :href="data.url">{{ data.name }}</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: ['data'],
  data () {
    return {
      message: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  padding: 20px;
  box-sizing: border-box;
  color: rgb(110, 110, 110);
}
</style>
