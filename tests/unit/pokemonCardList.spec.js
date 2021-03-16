import { factory } from './factory/pokemonCardListFactory'
import { card } from './utils/testsData'

describe('PokemonCarousel.vue', () => {
  
  it('should render grid list when is on a desktop device', () => {
    const wrapper = factory({isMobileDevice: false}, {cards: [card], loading: false})
    expect(wrapper.findComponent({ name: 'PokemonCard' }).exists()).toBe(true)
  })

  it('should render carousel when is on a mobile device', () => {    
    const wrapper = factory({ isMobileDevice: true }, {cards: [card], loading: false})
    expect(wrapper.findComponent({ name: 'PokemonCarousel' }).exists()).toBe(true)
  })
})
