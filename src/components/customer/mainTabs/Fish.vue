<template>
  <div>
    <SubNavBar>
      <router-link :to="{ name: 'route-show-fish-of-type', params: { type: 'ปลาทั้งหมด'} }" tag="a" class="nav-item is-tab" active-class="is-active">ทั้งหมด</router-link>
      <router-link :to="{ name: 'route-show-fish-of-type', params: { type: 'ปลาคาร์ฟ'} }" tag="a" class="nav-item is-tab" active-class="is-active">ปลาคาร์ฟ</router-link>
      <router-link :to="{ name: 'route-show-fish-of-type', params: { type: 'ปลาหมอแคระ'} }" tag="a" class="nav-item is-tab" active-class="is-active">ปลาหมอแคระ</router-link>
      <router-link :to="{ name: 'route-show-fish-of-type', params: { type: 'ปลากัด'} }" tag="a" class="nav-item is-tab" active-class="is-active">ปลากัด</router-link>
      <router-link :to="{ name: 'route-show-fish-of-type', params: { type: 'ปลาหางนกยูง'} }" tag="a" class="nav-item is-tab" active-class="is-active">ปลาหางนกยูง</router-link>
      <router-link :to="{ name: 'route-show-fish-of-type', params: { type: 'ปลาอโรวานา'} }" tag="a" class="nav-item is-tab" active-class="is-active">ปลาอโรวานา</router-link>
      <router-link :to="{ name: 'route-show-fish-of-type', params: { type: 'ปลาทอง'} }" tag="a" class="nav-item is-tab" active-class="is-active">ปลาทอง</router-link>
      <router-link :to="{ name: 'route-show-fish-of-type', params: { type: 'ปลาชนิดอื่นๆ'} }" tag="a" class="nav-item is-tab" active-class="is-active">ปลาชนิดอื่นๆ</router-link>
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
        if (this.$route.params.type === undefined) {
          this.$router.replace({
            name: 'route-show-fish-of-type', 
            params: { type: 'ปลาทั้งหมด' },
          });
        }
      }
    },
  }
</script>