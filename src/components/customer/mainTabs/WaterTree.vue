<template>
  <div>
    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <router-link :to="{ query: { type: 'ไม้น้ำ' } }" tag="a" class="nav-item is-tab" active-class="is-active" exact>ทั้งหมด</router-link>
        </div>
      </div>
    </nav>
    
    <div class="container">
      ไม้น้ำ
    </div>
  </div>
</template>