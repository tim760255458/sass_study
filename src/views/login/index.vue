<template>
  <div class="login">
    <div class="login_form">
      <header>登 录</header>
      <div>
        <input v-model="name" type="text" placeholder="昵称">
        <input v-model="password" type="password" placeholder="密码">
      </div>
      <footer>
        <button @click="login">登录</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    login () {}
  }
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
.login_form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px;
  border-radius: 4px;
  background: $color_zh;
  color: white;
  &:hover {
    box-shadow: 2px 2px 10px #aaa;
  }
  header {
    font-size: 24px;
  }
  div {
    display: flex;
    flex-direction: column;
    > input {
      margin-top: 20px;
      background: transparent;
      border: 0;
      border-bottom: 1px solid $color_border;
      height: 32px;
      line-height: 32px;
      padding: 0 5px;
      outline: none;
      color: white;
      &::-webkit-input-placeholder {
        color: $color_border;
      }
      &:last-child {
        margin-bottom: 20px;
      }
      &:hover {
        border-color: $color_za;
      }
      &:focus {
        border-color: $color_za;
      }
    }
  }
  footer {
    button {
      border: none;
      padding: 0;
      background: transparent;
      border: 1px solid $color_border;
      padding: 5px 15px;
      color: white;
      cursor: pointer;
      font-size: 12px;
      outline: none;
      &:hover {
        border-color: $color_za;
      }
      &:focus {
        border-color: $color_za;
      }
    }
  }
}
</style>
