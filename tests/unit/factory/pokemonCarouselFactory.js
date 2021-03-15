import { shallowMount, createLocalVue  } from '@vue/test-utils'
import PokemonCarousel from '@/components/PokemonCarousel.vue'
import VueCarousel from 'vue-carousel'
import Vuex from 'vuex'



const localVue = createLocalVue()

localVue.use(VueCarousel)
localVue.use(Vuex)

export const factory = (state = {}, data = {}) => {

    return shallowMount(PokemonCarousel, {
        mocks: {
            $store: {
              state: {
                ...state
              }
            }
          },
          localVue,
          data(){
              return {
                  ...data
              }
          }
    })
}
