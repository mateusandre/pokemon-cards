import Vue from 'vue'
import Vuex from 'vuex'
import CardsService from './../services/cardsService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [],
    loading: false,
    page: 1,
    query: '',
    pageSize: 10
  },
  getters: {
    card: state => {
      return (id) => {
        return state.cards.find(x => x.id == id)
      }
    }
  },
  mutations: {    
    setLoading(state, data){
      state.loading = data
    },
    setCards(state, data){
      state.cards = data
    },
    pushCards(state, data){

      data.forEach(element => {
        if (!state.cards.find(x => x.id == element.id))
          state.cards.push(element)
      })

    },
    setPage(state, data){
      state.page = data
    },
    setPageSize(state, data){
      state.pageSize = data
    },
    setQuery(state, data){
      state.query = data
    }
  },
  actions: {
    async getCards(context, push = false){

      await context.commit('setLoading', true)

      let result = await CardsService.get({ 
        pageSize: 10, 
        page: context.state.page, 
        orderBy: 'name',  
        q: `name:*${ context.state.query }*`
      })

      if (push)
        context.commit('pushCards', result.data.data)
      else
        context.commit('setCards', result.data.data)

      await context.commit('setLoading', false)
    },
    searchCards(context){
      context.commit('setPage', 1)
      context.commit('setCards', [])
      context.dispatch('getCards')
    },
    loadMoreCards(context){

      if (!context.state.loading) {

        context.commit('setLoading', true)        
        context.commit('setPage', context.state.page + 1)
        context.dispatch('getCards', true)

      }
    }
  }
})
