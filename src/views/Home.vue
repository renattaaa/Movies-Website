<template>
  <v-app>
    <Navbar />
    <section class="home">
      <h1 style="font-size: 40px">Welcome</h1>
      <h3 class="font-weight-medium">
        Millions of movies, TV shows and people to discover, Explore now!
      </h3>
      <Search class="search-bar my-10" />
    </section>

    <section id="slider">
      <v-container>
        <v-row class="ml-3 mt-5">
          <v-col cols="7" lg="7">
            <CardSlider />
          </v-col>
          <v-col cols="5" ml="7" md="4" class="ma-3">
            <div class="mt-3">
              <v-toolbar-title class="ma-4"
                ><strong>Trending</strong></v-toolbar-title
              >
              <RecentList max-height="50vh" />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-app>
</template>

<script>
import Navbar from "@/components/header/Navbar.vue";
import Search from "@/components/home/Search.vue";
import CardSlider from "@/components/home/CardSlider.vue";
import RecentList from "@/components/home/RecentList.vue";
import * as animationData from "@/assets/animations/wave.json";
export default {
  name: "HomePage",
  data() {
    return {
      defaultOptions: {
        animationData: animationData.default,
      },
    };
  },
  components: {
    Navbar,
    Search,
    CardSlider,
    RecentList,
  },
};
</script>

<style>
.home {
  padding: 10%;
  background-color: #deb522;
}

.search-bar {
  margin-left: none;
}

.lottie {
  position: absolute;
  bottom: 15%;
  left: 0%;
}
</style>