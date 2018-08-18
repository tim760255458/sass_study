<template>
  <div class="list_card">
    <header class="font_title">{{ data.title }}</header>
    <p class="list_card_main font_content">{{ data.content }}</p>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'list-card',
  props: ['data'],
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.list_card {
  max-width: 500px;
  display: flex;
  flex-direction: column;
  border: 1px solid $color_border;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  background: #ffffff;
  transition: all .5s ease;
  &:hover {
    @include shadow;
    transform: scale(1.05, 1.05);
  }
  &:last-child {
    margin-bottom: 0;
  }
  header {

  }
}
</style>
