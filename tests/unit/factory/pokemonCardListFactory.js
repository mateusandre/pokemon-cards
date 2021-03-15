import { shallowMount, createLocalVue  } from '@vue/test-utils'
import PokemonCardList from '@/views/PokemonCardList.vue'
import Vuex from 'vuex'
import VueMobileDetection from 'vue-mobile-detection'




const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueMobileDetection)

export const factory = (data = {}, state = {}) => {

    let store = new Vuex.Store({
        state: {
            ...state
        },
        actions: {
            getCards: jest.fn()
        }
    })

    return shallowMount(PokemonCardList, {
        store,
        localVue,
        data(){
            return {
                ...data
            }
        }
    })
}
