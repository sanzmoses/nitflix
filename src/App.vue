<template>
  <img alt="Vue logo" src="./assets/logo.png">
  
  <div class="header-title"><h4>Recently Added Movies</h4></div> 
  <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>
      <ul class="uk-slider-items">
          <li v-for="movie in recent" :key="'card-'+movie.id">
              <CardInfo v-show="movie.id == openMovieId" :movie="movie" />
              <Card @click="open(movie)" :movie="movie" />
          </li>
      </ul>

      <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
  </div>

  <div class="header-title"><h4>Trending Movies</h4></div> 
  <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>
      <ul class="uk-slider-items">
          <li v-for="movie in trending" :key="'card-'+movie.id">
              <CardInfo v-show="movie.id == openMovieId" :movie="movie" />
              <Card @click="open(movie)" :movie="movie" />
          </li>
      </ul>

      <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
  </div>

  <!-- <div class="header-title"><h4>Trending Movies</h4></div>
  <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>
      <ul class="uk-slider-items">
          <li v-for="movie in movies" :key="'card-'+movie.id">
              <Card :movie="movie" />
          </li>
      </ul>
  </div> -->

  <Modal :movie="movie_details"/>

</template>

<script>
import Card from './components/card.vue'
import CardInfo from './components/cardInfo.vue'
import Modal from './components/modal.vue'

export default {
  name: 'App',
  components: {
    Card,
    Modal,
    CardInfo
  },
  mounted() {
    let vueApp = document.getElementById('app')
    const slider = document.querySelector('[uk-slider]')
    // console.log('vueapp', vueApp);

    vueApp.addEventListener('click', evt => {
      if(evt.target.contains(slider)) {
        this.openMovieId = null;
      }
    })

  },
  data() {
    return {
      movies: [
        { id: 721, title: 'Interstellar', rating: '16+', time: '2h 1m', tags: ['Asian Action', 'Suspense', 'recent']},
        { id: 782, title: 'Silence', rating: '18+', time: '1h 30m', tags: ['Action', 'Thriller', 'recent']},
        { id: 783, title: 'Monkey', rating: '16+', time: '2h 1m', tags: ['Asian', 'Suspense', 'recent']},
        { id: 784, title: 'The Field', rating: '18+', time: '1h 30m', tags: ['Action', 'Horror', 'recent']},
        { id: 785, title: 'Plants', rating: '16+', time: '2h 1m', tags: ['Asian Action', 'Romance', 'recent']},
        { id: 786, title: 'Forest', rating: '18+', time: '1h 30m', tags: ['Romance', 'Thriller', 'recent']},
        { id: 787, title: 'The Sea', rating: '16+', time: '2h 1m', tags: ['Asian', 'Suspense', 'recent']},
        { id: 788, title: 'The Ocean', rating: '18+', time: '1h 30m', tags: ['Horror', 'Romance', 'recent']},
        { id: 789, title: 'Cactus 3', rating: '16+', time: '2h 1m', tags: ['Horror', 'Thriller', 'recent']},
        { id: 780, title: 'Mountain', rating: '18+', time: '1h 30m', tags: ['Romance', 'Thriller', 'recent']},
        { id: 791, title: 'The Canyon', rating: '16+', time: '2h 1m', tags: ['Asian Action', 'Suspense', 'trending']},
        { id: 790, title: 'The Deer', rating: '18+', time: '1h 30m', tags: ['Action', 'Thriller', 'trending']},
        { id: 793, title: 'The Cross', rating: '16+', time: '2h 1m', tags: ['Asian', 'Suspense', 'trending']},
        { id: 794, title: 'Mountain', rating: '18+', time: '1h 30m', tags: ['Action', 'Horror', 'trending']},
        { id: 795, title: 'Mountain 2', rating: '16+', time: '2h 1m', tags: ['Asian Action', 'Romance', 'trending']},
        { id: 796, title: 'Dune', rating: '18+', time: '1h 30m', tags: ['Romance', 'Thriller', 'trending']},
        { id: 797, title: 'Umbrella', rating: '16+', time: '2h 1m', tags: ['Asian', 'Suspense', 'trending']},
        { id: 798, title: 'Flower', rating: '18+', time: '1h 30m', tags: ['Horror', 'Romance', 'trending']},
        { id: 799, title: 'Bridge', rating: '16+', time: '2h 1m', tags: ['Horror', 'Thriller', 'trending']},
        { id: 760, title: 'Tower Girl', rating: '18+', time: '1h 30m', tags: ['Romance', 'Thriller', 'trending']},
      ],
      movie_details: { id: 721, title: 'Interstellar', rating: '16+', time: '2h 1m', tags: ['Asian Action', 'Suspense', 'recent']},
      openMovieId: null, 
    }
  },
  computed: {
    recent() {
      return this.movies.filter(mov => {
        return mov.tags.findIndex(tag => tag == 'recent') > -1
      })
    },
    trending() {
      return this.movies.filter(mov => {
        return mov.tags.findIndex(tag => tag == 'trending') > -1
      })
    },
  },
  methods: {
    open(movie) {
      // console.log(movie.id);
      this.openMovieId = movie.id;
      this.movie_details = movie;
    },
    // openModal() {
    //   UIkit.modal('#modal-center').show();
    // }
  }
}
</script>

<style lang="less">
// @sm: 320px;
img {
  max-width: @sm;
  width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  overflow: hidden;
  min-height: 100vh;
  padding-bottom: 90px;
}

.header-title {
  text-align: left;
  margin-top: 70px;
  
  h4 {
    margin-left: 30px;
    font-weight: bold;
  }
}

.uk-slider {
  overflow: visible !important;
}
</style>
