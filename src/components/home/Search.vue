<template>
  <div>
    <div v-if="movies.length > 0">
      <v-card v-for="movie in movies" :key="movie.id">
        <v-card-title
          ><strong>{{ movie.original_title }}</strong></v-card-title
        >
        <v-card-subtitle>{{ movie.overview }}</v-card-subtitle>
      </v-card>
    </div>

    <div v-else>
      <v-text-field
        class="movies-search"
        placeholder="Search"
        append-icon="mdi-magnify"
        solo-inverted
        v-model="search"
        @click:append="searchResults"
      ></v-text-field>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MenuComponent",
  data: () => ({
    search: "",
    movies: [],
  }),
  methods: {
    async searchQuery() {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/search/movie",
          {
            params: {
              api_key: "89e5ec645c9342a4719cc7f1aa1bd004",
              query: this.search,
            },
          }
        );
        console.log(response.data.results);
        this.movies = response.data.results;
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
      }
    },
    searchResults() {
      this.searchQuery();
       this.$router.push({ name: "search", query: { q: this.search } });
    },
  },
};
</script>

<style>
.movies-search {
  position: absolute;
  border-radius: 15px;
  color: black;
  padding-left: 15px;
  font-weight: 500;
  width: 30%;
  height: 30px;
}
</style>