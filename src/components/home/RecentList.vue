<template>
  <div :disabled="true" class="RecentList">
    <v-list-item v-for="movie in movies" :key="movie.id" class="pa-2">
      <v-img
        :src="'https://image.tmdb.org/t/p/original' + movie.poster_path"
        :alt="movie.title"
        width="87"
        height="130"
        class="card-image ml-2"
      ></v-img>
      <v-list-item-title class="ml-2"
        >{{ movie.title }}
        <v-list-item-subtitle class="mt-2">{{
          movie.release_date
        }}</v-list-item-subtitle>
      </v-list-item-title>
    </v-list-item>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      movies: [],
    };
  },
  created() {
    axios
      .get("https://api.themoviedb.org/3/trending/all/day", {
        params: {
          api_key: "89e5ec645c9342a4719cc7f1aa1bd004",
        },
      })
      .then((response) => {
        this.movies = response.data.results;
      })
      .catch((error) => {
        console.error("Terjadi kesalahan:", error);
      });
  },
};
</script>

<style scoped>
.RecentList {
  height: 400px;
  overflow: auto;
  background: linear-gradient(to bottom, #0a0a0aca, #08080800);
  scrollbar-width: thin;
  scrollbar-color: #555555 #0a0a0a;
}

.RecentList::-webkit-scrollbar {
  width: 8px;
}

.RecentList::-webkit-scrollbar-thumb {
  background-color: #555555;
  border-radius: 4px;
}

.RecentList::-webkit-scrollbar-thumb:hover {
  background-color: #333;
}

.RecentList {
  scrollbar-width: thin; 
  scrollbar-color: #555555 #0a0a0a; 
}

.RecentList:hover {
  scrollbar-color: #333 #0a0a0a; 
}

.v-list {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}
.v-list:hover {
  transform: translateX(-4px);
}

.card-image {
  width: 100%;
  height: 100%;
}
</style>
