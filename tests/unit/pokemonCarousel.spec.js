import { factory } from './factory/pokemonCarouselFactory'
import { card } from './utils/testsData'

describe('PokemonCarousel.vue', () => {
  
  it('should not render arrow left when passed only one card', () => {
    const wrapper = factory({cards: [card], loading: false})
    expect(wrapper.find('.arrow-left').exists()).toBe(false)
  })

  it('should render arrow left when passed more than one card and current page is greater than 0', () => {
    const wrapper = factory({cards: [card, card], loading: false}, { currentPage: 1 })
    expect(wrapper.find('.arrow-left').exists()).toBe(true)
  })

  it('should render carousel when passed cards', () => {
    const wrapper = factory({cards: [card], loading: false})
    expect(wrapper.findComponent({ ref: 'carousel' }).exists()).toBe(true)
  })

  it('should render loading when loading state is true', () => {
    const wrapper = factory({cards: [], loading: true})
    expect(wrapper.findComponent({ ref: 'loading' }).exists()).toBe(true)
  })

})
