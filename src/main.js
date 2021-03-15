import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueMobileDetection from 'vue-mobile-detection'
import VueCarousel from 'vue-carousel';


Vue.use(VueMobileDetection)
Vue.use(VueCarousel)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
