<template>
  <!-- Hero footer: will stick at the bottom -->
  <div class="hero-foot">
    <div class="container">
      <nav class="tabs is-boxed">
        <ul>
          <router-link to="/" tag="li" active-class="is-active" exact>
            <a href="#">ทั้งหมด</a>
          </router-link>
          <router-link :to="{ path: '/fish' }" tag="li" active-class="is-active">
            <a href="#">ปลา</a>
          </router-link>
          <router-link :to="{ path: '/shrimp' }" tag="li" active-class="is-active">
            <a href="#">กุ้ง</a>
          </router-link>
          <router-link :to="{ path: '/water-tree' }" tag="li" active-class="is-active">
            <a href="#">ไม้น้ำ</a>
          </router-link>
          <router-link :to="{ path: '/gadget' }" tag="li" active-class="is-active">
            <a href="#">อุปกรณ์การเลี้ยงกุ้ง</a>
          </router-link>
        </ul>
      </nav>
    </div>
  </div>
</template>