import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import AOS from './plugins/aos'
import 'aos/dist/aos.css'
import LottieAnimation from 'vue-lottie'

Vue.component('LottieAnimation', LottieAnimation);
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  AOS,
  LottieAnimation,
  render: h => h(App)
}).$mount('#app')
