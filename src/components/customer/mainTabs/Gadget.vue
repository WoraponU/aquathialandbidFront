<template>
  <div>
    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <router-link :to="{ query: { type: 'กุ้งแคระ' } }" tag="a" class="nav-item is-tab" active-class="is-active" exact>กุ้งแคระ</router-link>
          <router-link :to="{ query: { type: 'กุ้งเครฟิช' } }" tag="a" class="nav-item is-tab" active-class="is-active" exact>กุ้งเครฟิช</router-link>
          <router-link :to="{ query: { type: 'กุ้งเรดบี' } }" tag="a" class="nav-item is-tab" active-class="is-active" exact>กุ้งเรดบี</router-link>
          <router-link :to="{ query: { type: 'กุ้งชนิดอื่นๆ' } }" tag="a" class="nav-item is-tab" active-class="is-active" exact>กุ้งชนิดอื่นๆ</router-link>
        </div>
      </div>
    </nav>
    
    <div class="container">
      กุ้ง
    </div>
  </div>
</template>