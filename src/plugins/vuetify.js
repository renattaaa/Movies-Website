import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import api from "@/api";

Vue.use(Vuetify);
Vue.prototype.$http - api;

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#000000', 
        secondary: '#deb522',
        accent: '#82B1FF',
        error: '#ffffff',
        info: '#c0c0c0',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
  },
});
