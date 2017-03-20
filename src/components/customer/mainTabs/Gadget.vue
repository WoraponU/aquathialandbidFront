<template>
  <div>
    <SubNavBar>
      <router-link :to="{ name: 'route-show-gadget-of-type', params: { type: 'อุปกรณ์การเลี้ยงทั้งหมด'} }" tag="a" class="nav-item is-tab" active-class="is-active">ทั้งหมด</router-link>
      <router-link :to="{ name: 'route-show-gadget-of-type', params: { type: 'อุปกรณ์การเลี้ยง'} }" tag="a" class="nav-item is-tab" active-class="is-active">อุปกรณ์การเลี้ยง</router-link>
      <router-link :to="{ name: 'route-show-gadget-of-type', params: { type: 'อุปกรณ์การเลี้ยงทะเล'} }" tag="a" class="nav-item is-tab" active-class="is-active">อุปกรณ์การเลี้ยงทะเล</router-link>
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
            name: 'route-show-gadget-of-type', 
            params: { type: 'อุปกรณ์การเลี้ยงทั้งหมด' },
          });
        }
      }
    },
  }
</script>