<template>
  <div>
    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">
            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
          </a>
        </div>
        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="nav-right nav-menu">
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
          <div class="columns is-vcentered">
            <div class="column">
              <h1 class="title">
                Aqua Thailand Bid
              </h1>
              <h2 class="subtitle">
                เว็บประมูลสัตว์น้ำ
              </h2>
            </div>
            <div class="column is-narrow">
              <div id="carbon" class="box">
                <div>
                  <span>facebook
                    <span class="carbon-wrap">facebook</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MainNavBar></MainNavBar>
    </section>
  </div>
</template>

<script>
  import MainNavBar from './MainNavBar.vue'

  export default {
    components: {
      MainNavBar,
    }, 
  }
</script>