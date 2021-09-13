<template>
  <img alt="Vue logo" src="./assets/logo.png">
  
  <div class="header-title"><h4>Recently Added Movies</h4></div> 
  <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>
      <ul class="uk-slider-items">
          <li v-for="movie in movies" :key="'card-'+movie.id">
              <Card @click="open(movie)" :movie="movie" />
          </li>
      </ul>
  </div>

  <div class="header-title"><h4>Popular Movies</h4></div>
  <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>
      <ul class="uk-slider-items">
          <li v-for="movie in movies" :key="'card-'+movie.id">
              <Card :movie="movie" />
          </li>
      </ul>
  </div>

  <div class="header-title"><h4>Trending Movies</h4></div>
  <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>
      <ul class="uk-slider-items">
          <li v-for="movie in movies" :key="'card-'+movie.id">
              <Card :movie="movie" />
          </li>
      </ul>
  </div>

  <Modal :movie="movie_details"/>

</template>

<script>
import Card from './components/card.vue'
import Modal from './components/modal.vue'
import UIkit from 'uikit';

export default {
  name: 'App',
  components: {
    Card,
    Modal
  },
  data() {
    return {
      movies: [
        { id: 1, title: 'Avengers', rating: '16+', time: '2h 1m', tags: ['Asian Action', 'Suspense']},
        { id: 2, title: 'Flu', rating: '18+', time: '1h 30m', tags: ['Action', 'Thriller']},
        { id: 3, title: 'Iron Man', rating: '16+', time: '2h 1m', tags: ['Asian', 'Suspense']},
        { id: 4, title: 'Iron Man 2', rating: '18+', time: '1h 30m', tags: ['Action', 'Horror']},
        { id: 5, title: 'Iron Man 3', rating: '16+', time: '2h 1m', tags: ['Asian Action', 'Romance']},
        { id: 6, title: 'Hulk', rating: '18+', time: '1h 30m', tags: ['Romance', 'Thriller']},
        { id: 7, title: 'Ant Man', rating: '16+', time: '2h 1m', tags: ['Asian', 'Suspense']},
        { id: 8, title: 'Spoderman', rating: '18+', time: '1h 30m', tags: ['Horror', 'Romance']},
        { id: 9, title: 'Moses', rating: '16+', time: '2h 1m', tags: ['Horror', 'Thriller']},
        { id: 0, title: 'Noah', rating: '18+', time: '1h 30m', tags: ['Romance', 'Thriller']},
      ],
      openModal: false,
      movie_details: { id: 1, title: 'Avengers', rating: '16+', time: '2h 1m', tags: ['Asian Action', 'Suspense']}
    }
  },
  methods: {
    open(movie) {
      this.movie_details = movie;

      setTimeout(() => {
        UIkit.modal('#modal-center').show();
      }, 500)
    },
  }
}
</script>

<style lang="less">
// @sm: 320px;
img {
  max-width: @sm;
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
}

.header-title {
  text-align: left;
  h4 {
    margin-left: 30px;
    font-weight: bold;
  }
}

.uk-slider {
  overflow: visible;
}
</style>
