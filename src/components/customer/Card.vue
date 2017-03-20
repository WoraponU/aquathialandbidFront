<template>
  <div class="columns is-multiline">
    {{ type }}
    <div class="column is-one-third" v-for="cardData in testData">
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
</template>

<script>
  export default {
    data () {
      return {
        id: null,
        type: null,        
        testData: [
          { a: 'a' },
          { b: 'b' },
          { c: 'c' },
          { d: 'd' },
          { e: 'e' },
        ],
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
        this.type = ( this.$route.params.type === undefined ) ? 'ทั้งหมด' : this.$route.params.type;
      }
    }
  }
</script>