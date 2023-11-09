import Vue from "vue";
import VueRouter from "vue-router";

import ResultsComponent from "@/components/search/Results";

Vue.use(VueRouter);

const routes = [
  //HOME ROUTER
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/views/Home"),
  },

  //MOVIE-LISTS ROUTER
  {
    path: "/movies/upcoming",
    name: "UpcomingComponent",
    component: () => import("@/components/movie-lists/Upcoming"),
  },
  {
    path: "/movies",
    name: "PopularComponent",
    component: () => import("@/components/movie-lists/Popular"),
  },
  {
    path: "/movies/now-playing",
    name: "NowPlayingComponent",
    component: () => import("@/components/movie-lists/NowPlaying"),
  },

  //RESULTS ROUTER
  {
    path: "/search",
    name: "SearchComponent",
    component: ResultsComponent,
  },

  
  // MOVIE ROUTER
  {
    path: "/movies/:id",
    name: "MovieComponent",
    component: () => import("@/components/movies/MovieDetail"),
  },


  //   // AUTH ROUTER
  //   {
  //     path: '/login',
  //     name: 'Login',
  //     component: () => import ('../views/auth/Login')
  //   },
  //   {
  //     path: '/register',
  //     name: 'Register',
  //     component: () => import ('../views/auth/Register')
  //   },

  //   // NOT FOUND ROUTER
  //   {
  //     path: '*',
  //     name: 'NotFound',
  //     component: () => import ('../views/NotFound')
  //   },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
