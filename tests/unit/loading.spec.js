import { factory } from './factory/loadingFactory'

describe('PokemonCarousel.vue', () => {
  
  it('should render loading gif on loading data', () => {
    const wrapper = factory({loading: true})
    expect(wrapper.find('img').exists()).toBe(true)
  })

  it('should not render loading gif on loading data', () => {    
    const wrapper = factory({loading: false})
    expect(wrapper.find('img').exists()).toBe(false)
  })
})
