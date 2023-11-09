<template>
  <v-app-bar elevate-on-scroll style="background-color: black">
    <router-link to="/" class="title">
      <v-toolbar-title class="title"
        ><strong>Flick Yours</strong></v-toolbar-title
      >
    </router-link>

    <div class="mx-auto">
      <!-- DROPDOWN -->
      <v-menu open-on-hover bottom offset-y class="dropdown">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text dark v-bind="attrs" v-on="on"
            >Movies<v-icon dark>mdi-menu-down</v-icon></v-btn
          >
        </template>

        <v-list>
          <router-link
            v-for="(item, index) in links"
            :key="index"
            :to="item.link"
            class="link"
          >
            <v-list-item>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list>
      </v-menu>
    </div>

    <v-spacer></v-spacer>
    <v-btn text to="/">Home</v-btn>
    <v-btn text>Sign In</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavbarComponent",
  data: () => ({
    links: [
      { name: "Popular", link: "/movies" },
      { name: "Upcoming", link: "/movies/upcoming" },
      { name: "Now Playing", link: "/movies/now-playing" },
    ],
  }),
};
</script>

<style scoped>
.title {
  color: #deb522;
  text-decoration: none;
}

.link {
  text-decoration: none;
  color: inherit;
}
</style>
