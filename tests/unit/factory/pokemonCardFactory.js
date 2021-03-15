import { shallowMount } from '@vue/test-utils'
import PokemonCard from '@/components/PokemonCard.vue'

export const factory = (values = {}) => {
    return shallowMount(PokemonCard, {
        propsData: { ...values }
    })
}