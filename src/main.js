import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueMobileDetection from 'vue-mobile-detection'
import VueCarousel from 'vue-carousel'
import VModal from 'vue-js-modal'


Vue.use(VueMobileDetection)
Vue.use(VueCarousel)
Vue.use(VModal)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
