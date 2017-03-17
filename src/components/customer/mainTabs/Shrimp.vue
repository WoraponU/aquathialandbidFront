<template>
  <div>
    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <router-link :to="{ path: '/shrimp/กุ้งแคระ' }" tag="a" class="nav-item is-tab" active-class="is-active">กุ้งแคระ</router-link>
          <router-link :to="{ path: '/shrimp/กุ้งเครฟิช' }" tag="a" class="nav-item is-tab" active-class="is-active">กุ้งเครฟิช</router-link>
          <router-link :to="{ path: '/shrimp/กุ้งเรดบี' }" tag="a" class="nav-item is-tab" active-class="is-active">กุ้งเรดบี</router-link>
          <router-link :to="{ path: '/shrimp/กุ้งชนิดอื่นๆ' }" tag="a" class="nav-item is-tab" active-class="is-active">กุ้งชนิดอื่นๆ</router-link>
        </div>
      </div>
    </nav>
    
    <div class="container">
      กุ้ง
    </div>
  </div>
</template>