<template>
  <div class="home">
    <h1>titile this is title</h1>
    <div>
      <Card v-for="(item, index) of list" :key="index" :data="item"></Card>
    </div>
    <button @click="query">request</button>
  </div>
</template>

<script>
import Card from '../../components/Card'
import { login } from '../../api'
export default {
  name: 'home',
  components: {
    Card
  },
  data () {
    return {
      message: 'home',
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
  },
  methods: {
    query () {
      login({
        id: 1
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  > h1 {
    color: $color_j;
    text-shadow: 2px 2px 3px #aaa;
  }
  > div {
    display: flex;
    .card {
      margin-right: 20px;
    }
  }
}
</style>
