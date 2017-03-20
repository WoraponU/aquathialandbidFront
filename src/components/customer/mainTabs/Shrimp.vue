<template>
  <div>
    <SubNavBar>
      <router-link :to="{ name: 'route-show-shrimp-of-type', params: { type: 'กุ้งทั้งหมด'} }" tag="a" class="nav-item is-tab" active-class="is-active">ทั้งหมด</router-link>
      <router-link :to="{ name: 'route-show-shrimp-of-type', params: { type: 'กุ้งแคระ'} }" tag="a" class="nav-item is-tab" active-class="is-active">กุ้งแคระ</router-link>
      <router-link :to="{ name: 'route-show-shrimp-of-type', params: { type: 'กุ้งเครฟิช'} }" tag="a" class="nav-item is-tab" active-class="is-active">กุ้งเครฟิช</router-link>
      <router-link :to="{ name: 'route-show-shrimp-of-type', params: { type: 'กุ้งเรดบี'} }" tag="a" class="nav-item is-tab" active-class="is-active">กุ้งเรดบี</router-link>
      <router-link :to="{ name: 'route-show-shrimp-of-type', params: { type: 'กุ้งชนิดอื่นๆ'} }" tag="a" class="nav-item is-tab" active-class="is-active">กุ้งชนิดอื่นๆ</router-link>
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
      this.reloadRoute();
    },
    watch: {
      $route() {
        this.reloadRoute();
      }
    },
    methods: {
      reloadRoute() {
        if (this.$route.params.type === undefined && this.$route.params.id === undefined) {
          this.$router.replace({
            name: 'route-show-shrimp-of-type', 
            params: { type: 'กุ้งทั้งหมด' },
          });
        }
      }
    },
  }
</script>