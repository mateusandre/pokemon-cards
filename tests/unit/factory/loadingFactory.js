import { shallowMount, createLocalVue  } from '@vue/test-utils'
import Loading from '@/components/loading.vue'
import Vuex from 'vuex'



const localVue = createLocalVue()

localVue.use(Vuex)

export const factory = (state = {}, data = {}) => {

    return shallowMount(Loading, {
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
