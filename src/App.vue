<template>
  <div id="app">
    <Headera></Headera>
    <router-view></router-view>
  </div>
</template>

<script>
  import Headera from './components/customer/Headera.vue'

  export default {
    name: 'app',
    components: {
      Headera,
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss">
    @import "../node_modules/bulma/bulma.sass";
</style>
