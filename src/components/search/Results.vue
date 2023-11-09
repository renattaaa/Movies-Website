<template>
  <div>
    <Navbar />
   <div>
    <h1 align="center" justify="center">Search Results</h1>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        <strong>{{ movie.title }}</strong>
        <p>{{ movie.overview }}</p>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
import Navbar from "@/components/header/Navbar.vue";

export default {
  name: "ResultsComponent",
  props: {
    movies: Array,
  },
  data() {
    return {};
  },
  created() {},
  components: {
    Navbar,
  },
};
</script>

<style scoped>
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 20px;
    border: 1px solid #ddd;
    padding: 10px;
  }

  img {
    max-width: 100%;
    height: auto;
  }
</style>
