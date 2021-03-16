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
    pageSize: 20,
    card: null
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
    },
    setCard(state, data){
      state.card = data
    }
  },
  actions: {
    async getCards(context, push = false){
      try{
        context.commit('setLoading', true)
  
        if (!push)
          context.commit('setPage', 1)
  
        let result = await CardsService.get({ 
          pageSize: context.state.pageSize, 
          page: context.state.page, 
          orderBy: 'name',  
          q: `name:"*${ context.state.query }*" supertype:pokemon`
        })
  
        if (push)
          context.commit('pushCards', result.data.data)
        else
          context.commit('setCards', result.data.data)
  
        context.commit('setLoading', false)

      }
      catch(error){
        context.commit('setCards', [])
      }
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
    },
    async getCard(context, id){
      context.commit('setLoading', true)
      let result = await CardsService.getById(id)
      context.commit('setCard', result.data.data)
      context.commit('setLoading', false)
    }
  }
})
