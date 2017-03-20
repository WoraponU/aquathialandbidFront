<template>
  <div>
    <SubNavBar>
      <router-link :to="{ name: 'b', params: { typeFish: 'ทั้งหมด'} }" tag="a" class="nav-item is-tab" active-class="is-active">ทั้งหมด</router-link>
      <router-link :to="{ name: 'b', params: { typeFish: 'ปลาคาร์ฟ'} }" tag="a" class="nav-item is-tab" active-class="is-active">ปลาคาร์ฟ</router-link>
      <router-link :to="{ path: '/fish/ปลาหมอแคระ' }" tag="a" class="nav-item is-tab" active-class="is-active">ปลาหมอแคระ</router-link>
      <router-link :to="{ path: '/fish/ปลากัด' }" tag="a" class="nav-item is-tab" active-class="is-active">ปลากัด</router-link>
      <router-link :to="{ path: '/fish/ปลาหางนกยูง' }" tag="a" class="nav-item is-tab" active-class="is-active">ปลาหางนกยูง</router-link>
      <router-link :to="{ path: '/fish/ปลาอโรวานา' }" tag="a" class="nav-item is-tab" active-class="is-active">ปลาอโรวานา</router-link>
      <router-link :to="{ path: '/fish/ปลาทอง' }" tag="a" class="nav-item is-tab" active-class="is-active">ปลาทอง</router-link>
      <router-link :to="{ path: '/fish/ปลาชนิดอื่นๆ' }" tag="a" class="nav-item is-tab" active-class="is-active">ปลาชนิดอื่นๆ</router-link>
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
      this.$router.replace({
          name: 'b', 
          params: { typeFish: 'ทั้งหมด' },
      });
    }
  }
</script>