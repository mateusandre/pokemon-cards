import { factory } from './factory/pokemonCardFactory'
import { card } from './utils/testsData'

describe('PokemonCard.vue', () => {
  
  it('should render image from props.card when passed', () => {
    const wrapper = factory({card})
    expect(wrapper.find('img').exists()).toBe(true)
  })

  it('should not render card when props.card is not passed', () => {
    const wrapper = factory(null)
    expect(wrapper.find('.card').exists()).toBe(false)
  })

})
