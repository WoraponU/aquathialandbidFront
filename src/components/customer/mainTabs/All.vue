<template>
  <div>
    <SubNavBar>
      <router-link :to="{ path: '/' }" tag="a" class="nav-item is-tab" active-class="is-active" exact>ทั้งหมด</router-link>
    </SubNavBar>
    
    <PageBody>
      <Card :cardDatas="testData"></Card>      
      {{ id }}
    </PageBody>
  </div>
</template>

<script>
  import PageBody from '../PageBody.vue'
  import SubNavBar from '../SubNavBar.vue'
  import Card from '../Card.vue'


  export default {
    components: {
      SubNavBar,
      PageBody,
      Card,
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