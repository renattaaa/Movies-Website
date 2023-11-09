<template>
  <div>
    <Navbar />
    <v-item-group>
      <v-container>
        <h2 class="my-10" justify="center" align="center">Upcoming Movies</h2>
        <v-row>
          <v-col
            v-for="movie in movies"
            :key="movie.id"
            cols="12"
            md="2"
            sm="3"
          >
            <v-hover v-slot="{ hover }" open-delay="100">
              <v-card
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover }"
              >
                <router-link
                  :to="`/movies/${movie.id}`"
                  ><img
                    :src="'https://image.tmdb.org/t/p/original' + movie.poster_path"
                    :alt="movie.title"
                    aspect-rasio="1"
                  />
                </router-link>
                <v-card-title>
                  <div class="card-text">
                    {{ movie.title }}
                  </div>
                </v-card-title>
                <v-card-text>
                  <v-row align="center" class="mx-0">
                    <v-rating
                      :value="movie.vote_average / 2"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="14"
                    ></v-rating>
                    <div class="grey--text">
                      {{ movie.vote_average * 10 }} % | {{ movie.release_date }}
                    </div>
                    <div class="my-4 card-text">
                      <span
                        v-for="(genreId, index) in movie.genre_ids"
                        :key="genreId"
                      >
                        {{ genreTypeName(genreId, index)
                        }}<span v-if="index < movie.genre_ids.length - 1"
                          >,
                        </span>
                      </span>
                    </div>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "@/components/header/Navbar.vue";

export default {
  name: "PopularComponent",
  data() {
    return {
      movies: [],
      genres: [],
    };
  },
  created() {
    axios
      .get("https://api.themoviedb.org/3/movie/upcoming", {
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

    axios
      .get("https://api.themoviedb.org/3/genre/movie/list", {
        params: {
          api_key: "89e5ec645c9342a4719cc7f1aa1bd004",
        },
      })
      .then((response) => {
        this.genres = response.data.genres;
      })
      .catch((error) => {
        console.error("Terjadi kesalahan:", error);
      });
  },
  methods: {
    genreTypeName(genreId) {
      const genre = this.genres.find((g) => g.id === genreId);
      return genre ? genre.name : "";
    },
  },

  components: {
    Navbar,
  },
};
</script>

<style scoped>
.card-text {
  max-height: 10%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
