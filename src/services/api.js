import Http from './http'

export default class Api {
    constructor(path){
        this.$http = new Http(path)
    }

    async get(params){        
        var data = await this.$http.get(null, {params: params })
        return data
    }

    async getById(id){
        await this.$http.get(id)
    }
}