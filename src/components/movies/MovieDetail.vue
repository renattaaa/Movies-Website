<template>
  <v-app>
    <div>
      <Navbar style="z-index: 2" />
    </div>
    <section id="movie">
      <v-img :src="backdropPath" class="backdrop">
        <div class="blur"></div>
        <v-row class="ml-3">
          <v-col sm="3">
            <div class="my-14">
              <v-img
                :src="'https://image.tmdb.org/t/p/original' + movie.poster_path"
                :alt="movie.title"
                width="300"
                height="450"
                class="poster"
              >
              </v-img>
            </div>
          </v-col>
          <v-col class="content-right mx-10" cols="12" md="7">
            <h2>{{ this.movie.title }}</h2>
            <div>
              <v-subtitle>{{ this.movie.release_date }} | </v-subtitle>
              <v-subtitle v-for="(item, index) in movie.genres" :key="index">
                {{ item.name }}
                <v-subtitle v-if="movie.genres.length - 1 != index"
                  >,</v-subtitle
                >
              </v-subtitle>
            </div>
            <div class="my-10">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <button
                    class="circle-button mr-3"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>mdi-heart</v-icon>
                  </button>
                </template>
                <span>Mark as favorite</span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <button class="circle-button" dark v-bind="attrs" v-on="on">
                    <v-icon>mdi-playlist-plus</v-icon>
                  </button>
                </template>
                <span>Add to your watchlist</span>
              </v-tooltip>

              <v-dialog v-model="dialog" persistent max-width="800px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    text
                    class="pa-3"
                    v-bind="attrs"
                    v-on="on"
                    @click.prevent="openYoutube"
                  >
                    <v-icon left>mdi-play</v-icon> Play Trailer
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title
                    >Play Trailer: {{ this.movie.title }} <v-spacer></v-spacer>
                    <button color="white" text @click="dialog = false">
                      <v-icon>mdi-close</v-icon>
                    </button>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12">
                          <div class="iframe">
                            <img :src="mediaURL" v-if="!isVideo" />
                            <iframe
                              :src="mediaURL"
                              allowfullscreen
                              v-if="isVideo"
                            ></iframe>
                          </div>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </div>
            <div>
              <h3>Overview</h3>
              <p>{{ this.movie.overview }}</p>
            </div>
          </v-col>
        </v-row>
      </v-img>
    </section>
    <section id="cast">
      <h1>Section 2</h1>
    </section>
  </v-app>
</template>

<script>
import axios from "axios";
import Navbar from "@/components/header/Navbar.vue";
export default {
  data() {
    return {
      movie: {
        credits: {
          crew: {},
        },
        images: {
          backdrops: {},
        },
      },
      isVideo: false,
      mediaURL: "",
      dialog: false,
    };
  },
  mounted() {
    this.fetchMovie(this.$route.params.id);
  },
  watch: {
    "$route.params.id": {
      handler() {
        this.fetchMovie(this.$route.params.id);
      },
      immediate: true,
    },
  },
  computed: {
    backdropPath() {
      return "https://image.tmdb.org/t/p/original" + this.movie.backdrop_path;
    },
    posterPath() {
      return "https://image.tmdb.org/t/p/original" + this.movie.poster_path;
    },
  },
  methods: {
    async fetchMovie(movieId) {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            movieId +
            "?append_to_response=credits,videos,images,release_dates",
          {
            params: {
              api_key: "89e5ec645c9342a4719cc7f1aa1bd004",
            },
          }
        )
        .then((response) => {
          this.movie = response.data;
        })
        .catch((error) => {
          console.error("Terjadi kesalahan:", error);
        });
    },
    openYoutube() {
      this.mediaURL = this.youtubeVideo();
      this.isVideo = true;
    },
    youtubeVideo() {
      if (!this.movie.videos) return;
      return (
        "https://www.youtube.com/embed/" + this.movie.videos.results[0].key
      );
    },
  },
  components: {
    Navbar,
  },
};
</script>

<style>
.v-dialog:hover {
  cursor: default;
}
.v-card:hover {
  cursor: default;
}

.blur {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(0.4px);
  background-color: rgba(0, 0, 0, 0.509);
  z-index: 0;
}

.backdrop {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.backdrop::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent, rgb(0, 0, 0));
}

.poster {
  margin-left: 10%;
  border-radius: 10px;
}

.content-right {
  margin-top: 7%;
  z-index: 2;
}

.circle-button {
  background-color: #deb522;
  border-radius: 50%;
  padding: 10px;
}

.iframe {
  overflow: hidden;
  padding-top: 54.25%;
  position: relative;
}
.iframe iframe {
  border: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

#cast {
  background-color: white;
  height: 100vh;
}
</style>