import Api from './api'

class CardsService extends Api {
    constructor() {
        super('cards')
    }
}

export default new CardsService()