<template>
  <div>
    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <router-link :to="{ path: '/water-tree' }" tag="a" class="nav-item is-tab" active-class="is-active" exact>ทั้งหมด</router-link>
        </div>
      </div>
    </nav>
    
    <section class="section">
      <div class="container">
        {{ id }}
      </div>
    </section>
  </div>
</template>

<script>
  export default {
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