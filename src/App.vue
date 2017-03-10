<template>
  <div id="app">
    <router-link to="/" tag="a" active-class="active" exact>รถเข็นของฉัน</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Test from './components/test.vue'
export default {
  name: 'app',
  components: {
    Test: Test
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
