<template>
  <v-app class="app">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800&display=swap");

* {
  font-family: Montserrat;
}

.app {
  background-color: black;
  color: white;
  min-height: 100vh;
}

@media (max-width: 768px) {
  .movie-details {
    background-color: white;
    border: none;
    margin: 0;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  }
}

@media (max-width: 1024px) {
  .movie-details {
    background-color: white;
    border: none;
    margin: 0;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  }
}
</style>
