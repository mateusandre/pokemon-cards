import Vue from 'vue'
import VueRouter from 'vue-router'
import PokemonCardList from '../views/PokemonCardList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PokemonCardList',
    component: PokemonCardList
  },
  {
    path: '/card/:id/details',
    name: 'PokemonCardDetails',
    component: () => import('../views/PokemonCardDetails.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }  
})

export default router
