<template>
  <div>
    <SubNavBar>
      <router-link :to="{ path: '/' }" tag="a" class="nav-item is-tab" active-class="is-active" exact>ทั้งหมด</router-link>
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