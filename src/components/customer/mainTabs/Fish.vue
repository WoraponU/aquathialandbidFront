<template>
  <div>
    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <router-link :to="{ query: { type: 'คาร์ฟ' } }" tag="a" class="nav-item is-tab" active-class="is-active" exact>ปลาคาร์ฟ</router-link>
          <router-link :to="{ query: { type: 'หมอแคระ' } }" tag="a" class="nav-item is-tab" active-class="is-active" exact>ปลาหมอแคระ</router-link>
          <router-link :to="{ query: { type: 'กัด' } }" tag="a" class="nav-item is-tab" active-class="is-active" exact>ปลากัด</router-link>
          <router-link :to="{ query: { type: 'หางนกยูง' } }" tag="a" class="nav-item is-tab" active-class="is-active" exact>ปลาหางนกยูง</router-link>
          <router-link :to="{ query: { type: 'Arowana' } }" tag="a" class="nav-item is-tab" active-class="is-active" exact>ปลา Arowana</router-link>
          <router-link :to="{ query: { type: 'ทอง' } }" tag="a" class="nav-item is-tab" active-class="is-active" exact>ปลาทอง</router-link>
          <router-link :to="{ query: { type: 'อื่นๆ' } }" tag="a" class="nav-item is-tab" active-class="is-active" exact>ปลาชนิดอื่นๆ</router-link>
        </div>
      </div>
    </nav>
    
    <div class="container">
      fish
    </div>
  </div>
</template>