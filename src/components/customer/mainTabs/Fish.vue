<template>
  <div>
    <SubNavBar>
      <router-link :to="{ path: '/fish' }" tag="a" class="nav-item is-tab" active-class="is-active" exact>ทั้งหมด</router-link>
      <router-link :to="{ path: '/fish/ปลาคาร์ฟ' }" tag="a" class="nav-item is-tab" active-class="is-active" exact>ปลาคาร์ฟ</router-link>
      <router-link :to="{ path: '/fish/ปลาหมอแคระ' }" tag="a" class="nav-item is-tab" active-class="is-active" exact>ปลาหมอแคระ</router-link>
      <router-link :to="{ path: '/fish/ปลากัด' }" tag="a" class="nav-item is-tab" active-class="is-active" exact>ปลากัด</router-link>
      <router-link :to="{ path: '/fish/ปลาหางนกยูง' }" tag="a" class="nav-item is-tab" active-class="is-active" exact>ปลาหางนกยูง</router-link>
      <router-link :to="{ path: '/fish/ปลาอโรวานา' }" tag="a" class="nav-item is-tab" active-class="is-active" exact>ปลาอโรวานา</router-link>
      <router-link :to="{ path: '/fish/ปลาทอง' }" tag="a" class="nav-item is-tab" active-class="is-active" exact>ปลาทอง</router-link>
      <router-link :to="{ path: '/fish/ปลาชนิดอื่นๆ' }" tag="a" class="nav-item is-tab" active-class="is-active" exact>ปลาชนิดอื่นๆ</router-link>
    </SubNavBar>
    
    <section class="section">
      <div class="container">
        {{ id }}
      </div>
    </section>
  </div>
</template>

<script>
  import SubNavBar from '../SubNavBar.vue'

  export default {
    components: {
      SubNavBar,
    },
    data () {
      return {
        id: null,
      }
    },
    created() {
      this.reloadId();    
    },
    watch: {
      $route() {
        this.reloadId();
      }
    },
    methods: {
      reloadId() {
        this.id = this.$route.params.id === undefined ? 'ทั้งหมด' : this.$route.params.id;
      }
    }
  }
</script>