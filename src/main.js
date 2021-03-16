import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueMobileDetection from 'vue-mobile-detection'
import VueCarousel from 'vue-carousel'
import VModal from 'vue-js-modal'
import VueI18n from 'vue-i18n'
import { messages } from './../locales/main'

Vue.use(VueMobileDetection)
Vue.use(VueCarousel)
Vue.use(VModal)
Vue.use(VueI18n)

Vue.config.productionTip = false

console.log(messages)

const i18n = new VueI18n({
  locale: navigator.language.split('-')[0],
  fallbackLocale: ['pt_BR', 'en'],
  messages
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
