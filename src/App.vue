<template>
  <div id="app">
    <PageHeader></PageHeader>
    <router-view></router-view>
  </div>
</template>

<script>
  import PageHeader from './components/customer/PageHeader.vue'

  export default {
    name: 'app',
    components: {
      PageHeader,
    },
    data () {
      return {
        // msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss">
    @import "../node_modules/bulma/bulma.sass";
</style>
