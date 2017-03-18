<template>
  <div>
    <SubNavBar>
      <router-link :to="{ path: '/fish' }" tag="a" class="nav-item is-tab" active-class="is-active" exact>ทั้งหมด</router-link>
      <router-link :to="{ path: '/fish/ปลาคาร์ฟ' }" tag="a" class="nav-item is-tab" active-class="is-active" exact>ปลาคาร์ฟ</router-link>
      <router-link :to="{ path: '/fish/ปลาหมอแคระ' }" tag="a" class="nav-item is-tab" active-class="is-active" exact>ปลาหมอแคระ</router-link>
      <router-link :to="{ path: '/fish/ปลากัด' }" tag="a" class="nav-item is-tab" active-class="is-active" exact>ปลากัด</router-link>
      <router-link :to="{ path: '/fish/ปลาหางนกยูง' }" tag="a" class="nav-item is-tab" active-class="is-active" exact>ปลาหางนกยูง</router-link>
      <router-link :to="{ path: '/fish/ปลาอโรวานา' }" tag="a" class="nav-item is-tab" active-class="is-active" exact>ปลาอโรวานา</router-link>
      <router-link :to="{ path: '/fish/ปลาทอง' }" tag="a" class="nav-item is-tab" active-class="is-active" exact>ปลาทอง</router-link>
      <router-link :to="{ path: '/fish/ปลาชนิดอื่นๆ' }" tag="a" class="nav-item is-tab" active-class="is-active" exact>ปลาชนิดอื่นๆ</router-link>
    </SubNavBar>
    
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-one-third">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">John Smith</p>
                    <p class="subtitle is-6">@johnsmith</p>
                  </div>
                </div>

                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a>#css</a> <a>#responsive</a>
                  <br>
                  <small>11:09 PM - 1 Jan 2016</small>
                </div>
              </div>
            </div>
          </div>  
        </div>

        <div class="columns">
          <div class="column is-one-third">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">John Smith</p>
                    <p class="subtitle is-6">@johnsmith</p>
                  </div>
                </div>

                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a>#css</a> <a>#responsive</a>
                  <br>
                  <small>11:09 PM - 1 Jan 2016</small>
                </div>
              </div>
            </div>
          </div>  
        </div>

        
        {{ id }}
      </div>
    </section>
  </div>
</template>

<script>
  import SubNavBar from '../SubNavBar.vue'

  export default {
    components: {
      SubNavBar,
    },
    data () {
      return {
        id: null,
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