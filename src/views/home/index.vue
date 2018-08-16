<template>
  <div class="home">
    <p>titile this is title</p>
    <div>
      <Card v-for="(item, index) of list" :key="index" :data="item"></Card>
    </div>
  </div>
</template>

<script>
import Card from '../../components/Card'
export default {
  name: 'home',
  components: {
    Card
  },
  data () {
    return {
      message:'home',
      list: [
        {
          title: 'title1',
          content: 'this is title1 content',
          name: 'title1',
          url: 'https://github.com/tim760255458/pwa-project'
        },
        {
          title: 'title2',
          content: 'this is title2 content',
          name: 'title2',
          url: 'https://github.com/tim760255458/mpvue_study_example'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  > p {}
  > div {
    display: flex;
    .card {
      margin-right: 20px;
    }
  }
}
</style>

