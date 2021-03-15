import Vue from 'vue'
import Vuex from 'vuex'
import CardsService from './../services/cardsService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemons: [],
    loading: false,
    page: 1
  },
  getters: {
    pokemons: state => {
      return state.pokemons.data || []
    },
    pokemon: state => {
      return (id) => {
        return state.pokemons.find(x => x.id == id)
      }
    }
  },
  mutations: {
    setLoading(state, data){
      state.loading = data
    },
    setPokemons(state, data){
      state.pokemons = data
    },
    setPage(state, data){
      state.page = data
    }
  },
  actions: {
    async getPokemons(context, data = {}){
      if(data.page)
        context.commit('setPage', data.page)
      context.commit('setLoading', true)
      let result = await CardsService.get({ 
        pageSize: 10, 
        page: context.state.page, 
        orderBy: 'name',  
        q: data.name ? `name:*${ data.name }*` : ''
      })
      context.commit('setPokemons', result.data)
      context.commit('setLoading', false)
    }    
  },
  modules: {
  }
})
