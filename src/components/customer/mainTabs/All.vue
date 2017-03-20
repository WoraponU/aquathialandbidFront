<template>
  <div>
    <SubNavBar>
      <router-link :to="{ name: 'route-show-all', params: { type: 'ทั้งหมด'} }" tag="a" class="nav-item is-tab" active-class="is-active">ทั้งหมด</router-link>
    </SubNavBar>
    
    <PageBody>
      <router-view></router-view>
    </PageBody>
  </div>
</template>

<script>
  import PageBody from '../PageBody.vue'
  import SubNavBar from '../SubNavBar.vue'

  export default {
    components: {
      SubNavBar,
      PageBody,
    }, 
    data () {
      return {
        id: null,
        testData: [
          { a: 'a' },
          { b: 'b' },
          { c: 'c' },
          { d: 'd' },
          { e: 'e' },
        ],
      }
    },
    created() {
      this.$router.replace({
          name: 'route-show-all', 
          params: { type: 'ทั้งหมด' },
      });
    }
  }
</script>