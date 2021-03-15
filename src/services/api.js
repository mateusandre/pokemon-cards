import Http from './http'

export default class Api {
    constructor(path){
        this.$http = new Http(path)
    }

    async get(params){        
        return await this.$http.get(null, {params: params })
    }

    async getById(id){
        return await this.$http.get(id)
    }
}