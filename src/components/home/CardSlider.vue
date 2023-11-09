<template>
  <v-container class="mt-4">
    <v-carousel
      v-model="activeIndex"
      cycle
      hide-delimiter-background
      hide-delimiters
    >
      <v-carousel-item v-for="movie in movies" :key="movie.id">
        <v-img
          :src="'https://image.tmdb.org/t/p/original' + movie.backdrop_path"
          class="card-image"
        >
          <div class="blur"></div>
          <v-row>
            <v-col md="2" class="card-content1">
              <v-img
                :src="'https://image.tmdb.org/t/p/original' + movie.poster_path"
                :alt="movie.title"
                width="87"
                height="130"
                class="card-image ml-2"
              >
              </v-img>
            </v-col>
            <v-col class="card-content2">
              <v-card-title>
                <div v-if="movie.title">
                  {{
                    movie.title.length > 35
                      ? movie.title.slice(0, 35) + "..."
                      : movie.title
                  }}
                </div></v-card-title
              >
              <v-card-subtitle>
                <div v-if="movie.overview.length > 100">
                  {{ movie.overview.slice(0, 100) }}...
                  <span class="read-more" @click="showFullOverview(movie)"
                    >Read More</span
                  >
                </div>
                <div v-else>
                  {{ movie.overview }}
                </div>
              </v-card-subtitle>
              <v-btn text>Watch Trailer</v-btn>
              <v-btn text>More Info</v-btn>
            </v-col>
          </v-row>
        </v-img>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      activeIndex: 0,
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
  methods: {
    showFullOverview(movie) {
      alert(movie.overview);
    },
  },
};
</script>

<style>
.blur {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(0.4px);
  background-color: rgba(0, 0, 0, 0.235);
  z-index: -1;
}

.card-content1 {
  margin-top: 50%;
  margin-left: 30px;
}

.card-content2 {
  margin-top: 47%;
  margin-left: 10px;
}

.v-card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}
.v-card:hover {
  transform: translateY(-4px);
}

.card-image {
  width: 100%;
  height: 100%;
}

.read-more {
  color: rgb(23, 23, 255);
  cursor: pointer;
}
</style>
