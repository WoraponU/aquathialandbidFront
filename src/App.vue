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
            Title
          </h1>
          <h2 class="subtitle">
            Subtitle
          </h2>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <nav class="tabs">
          <div class="container">
            <ul>
              <li class="is-active"><a>Overview</a></li>
              <li><a>Modifiers</a></li>
              <li><a>Grid</a></li>
              <li><a>Elements</a></li>
              <li><a>Components</a></li>
              <li><a>Layout</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item is-tab " href="http://bulma.io/documentation/components/card/">
            Card
          </a>
          <a class="nav-item is-tab " href="http://bulma.io/documentation/components/level/">
            Level
          </a>
          <a class="nav-item is-tab " href="http://bulma.io/documentation/components/media-object/">
            Media object
          </a>
          <a class="nav-item is-tab " href="http://bulma.io/documentation/components/menu/">
            Menu
          </a>
          <a class="nav-item is-tab " href="http://bulma.io/documentation/components/message/">
            Message
          </a>
          <a class="nav-item is-tab " href="http://bulma.io/documentation/components/modal/">
            Modal
          </a>
          <a class="nav-item is-tab " href="http://bulma.io/documentation/components/nav/">
            Nav
          </a>
          <a class="nav-item is-tab " href="http://bulma.io/documentation/components/pagination/">
            Pagination
          </a>
          <a class="nav-item is-tab " href="http://bulma.io/documentation/components/panel/">
            Panel
          </a>
          <a class="nav-item is-tab is-active" href="http://bulma.io/documentation/components/tabs/">
            Tabs
          </a>
        </div>
      </div>
    </nav>


    <router-link to="/" tag="a" active-class="active" exact>รถเข็นของฉัน</router-link>
    <router-link to="/2" tag="a" active-class="active" exact>รถเข็นของฉัน</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Test from './components/test.vue'
export default {
  name: 'app',
  components: {
    Test: Test
  },
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
