<template>
  <div>
    <Navbar />
    <v-container>
      <div v-for="(movie, index) in movies" :key="index">
        <h1>{{ movie.title }}</h1>
        <v-card-subtitle
          >{{ movie.released }} | {{ movie.age }} |
          {{ movie.duration }}</v-card-subtitle
        >
      </div>
      <v-row>
        <v-col
          v-for="(movie, index) in movies"
          :key="index"
          cols="12"
          sm="6"
          md="3"
        >
          <v-card width="278" height="414" class="card-image">
            <v-img :src="getImageUrl(movie.title)"></v-img>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-card width="758" height="414" class="card-image">
            <v-img></v-img>
          </v-card>
        </v-col>
        <v-col
          v-for="(movie, index) in movies"
          :key="index"
          cols="12"
          sm="6"
          md="3"
        >
          <v-card width="278" height="414" class="card-image">
            <v-img :src="getImageUrl(movie.title)"></v-img>
          </v-card>
        </v-col>
      </v-row>
      <!-- Tampilkan kategori-kategori sebagai v-chip yang berbeda -->
      <div class="mt-3">
        <v-chip
          class="ma-2"
          v-for="(category, index) in biographyCategories"
          :key="index"
        >
          {{ category }}
        </v-chip>
        <v-chip
          class="ma-2"
          v-for="(category, index) in dramaCategories"
          :key="index"
        >
          {{ category }}
        </v-chip>
        <v-chip
          class="ma-2"
          v-for="(category, index) in historyCategories"
          :key="index"
        >
          {{ category }}
        </v-chip>
      </div>

      <v-card-text
        v-for="(movie, index) in movies"
        :key="index"
        style="max-width: 68%"
      >
        {{ movie.description }}
      </v-card-text>
      <v-row>
        <v-col md="8">
          <v-simple-table>
            <tbody>
              <tr v-for="movie in movies" :key="movie._id">
                <td>
                  Director: {{ movie.type
                  }}<v-icon style="float: right">mdi-chevron-right</v-icon>
                </td>
              </tr>
              <tr v-for="movie in movies" :key="movie._id">
                <td>
                  Writers: {{ movie.released
                  }}<v-icon style="float: right">mdi-chevron-right</v-icon>
                </td>
              </tr>
              <tr v-for="movie in movies" :key="movie._id">
                <td>
                  Casts: {{ movie.duration
                  }}<v-icon style="float: right">mdi-chevron-right</v-icon>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>

        <v-col md="4" class="my-7">
          <v-dialog class="mt-2" v-model="dialog" width="500" light>
            <template v-slot:activator="{ on, attrs }">
              <v-card class="pa-4" dark v-bind="attrs" v-on="on">
                Add to WatchList
                <v-icon style="float: right">mdi-chevron-down</v-icon>
              </v-card>
            </template>

            <v-card dark>
              <v-btn
                dark
                text
                @click="dialog = false"
                style="float: right; max-width: auto"
              >
                x
              </v-btn>
              <v-subheader
                v-for="movie in movies"
                :key="movie._id"
                class="pl-5 pa-2"
              >
                {{ movie.title }}
              </v-subheader>
              <v-card-title class="dark"> Add to WatchList </v-card-title>

              <v-divider></v-divider>

              <v-card-text
                class="mt-3"
                v-for="movie in movies"
                :key="movie._id"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </v-card-text>
            </v-card>
          </v-dialog>
          <div class="ma-5">
            <router-link
              class="mr-3"
              style="color: #128bb5; text-decoration: none"
              text
              to="/"
              ><v-icon class="mr-3">mdi-account-group</v-icon> User
              Review</router-link
            >
            <router-link
              style="color: #128bb5; text-decoration: none"
              text
              to="/"
              ><v-icon class="mr-3">mdi-comment-multiple-outline</v-icon> Critic
              Review</router-link
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Navbar from "@/components/header/Navbar.vue";
export default {
  name: "ReviewComponent",
  data() {
    return {
      dialog: false,
      movies: [
        {
          _id: "64ed5c0d4172c4472a937e1f",
          title: "Oppenheimer",
          type: "Movie",
          released: "2023",
          age: "13+",
          duration: "3h",
          description:
            "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
          direction: [
            {
              name: " Christopher Nolan",
              _id: "64ed5dc99a84b16354666e2e",
            },
          ],
          categories: [
            {
              category: "Biography",
              id: "f8ca0845-43dd-4df9-be7a-e26bcb313e01",
            },
            {
              category: "Drama",
              id: "820294bb-eef5-4327-819c-22e4f8966b41",
            },
            {
              category: "History",
              id: "92199796-e4a3-4469-be88-34c0e232e037",
            },
          ],
        },
      ],
    };
  },
  computed: {
    biographyCategories() {
      return this.movies
        .filter((movie) =>
          movie.categories.some((category) => category.category === "Biography")
        )
        .map(() => "Biography");
    },
    dramaCategories() {
      return this.movies
        .filter((movie) =>
          movie.categories.some((category) => category.category === "Drama")
        )
        .map(() => "Drama");
    },
    historyCategories() {
      return this.movies
        .filter((movie) =>
          movie.categories.some((category) => category.category === "History")
        )
        .map(() => "History");
    },
  },
  methods: {
    getImageUrl() {
      return `https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg`;
    },
    getCategories(movie) {
      return movie.categories.map((category) => category.category).join(", ");
    },
  },
  components: {
    Navbar,
  },
};
</script>

<style>
.card-image {
  width: 100%;
  height: 100%;
}

.v-col:hover {
  cursor: default;
}
</style>