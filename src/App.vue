<template>
  <div id="app">
    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">
            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
          </a>
          <a class="nav-item is-hidden-mobile is-tab is-active">Home</a>
          <a class="nav-item is-hidden-mobile">Features</a>
          <a class="nav-item is-hidden-mobile">Pricing</a>
          <a class="nav-item is-hidden-mobile">About</a>
        </div>
        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="nav-right nav-menu">
          <a class="nav-item is-hidden-tablet is-active">Home</a>
          <a class="nav-item is-hidden-tablet">Features</a>
          <a class="nav-item is-hidden-tablet">Pricing</a>
          <a class="nav-item is-hidden-tablet">About</a>
          <a class="nav-item">
            <figure class="image is-16x16" style="margin-right: 8px;">
              <img src="http://bulma.io/images/jgthms.png">
            </figure>
            Profile
          </a>
          <a class="nav-item">Log out</a>
        </div>
      </div>
    </nav>

    <section class="hero is-primary">
      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Aqua Thailand Bid
          </h1>
          <h2 class="subtitle">
            เว็บประมูลสัตว์น้ำ
          </h2>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <nav class="tabs">
          <div class="container">
            <nav class="tabs is-boxed">
              <ul>
                <router-link to="/fish" tag="li" active-class="is-active" exact>
                  <a href="#">ปลา</a>
                </router-link>
                <router-link to="/shrimp" tag="li" active-class="is-active" exact>
                  <a href="#">กุ้ง</a>
                </router-link>
                <router-link to="/gadget" tag="li" active-class="is-active" exact>
                  <a href="#">อุปกรณ์การเลี้ยงกุ้ง</a>
                </router-link>
              </ul>
            </nav>
          </div>
        </nav>
      </div>
    </section>
    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <router-link to="/" tag="a" class="nav-item is-tab" active-class="is-active" exact>home</router-link>
        </div>
      </div>
    </nav>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import Test from './components/test.vue'
export default {
  name: 'app',
  // components: {
  //   Test: Test
  // },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
    @import "../node_modules/bulma/bulma.sass";
</style>
