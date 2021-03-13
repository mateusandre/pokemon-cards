import Http from './http'

export class Api {
    constructor(path){
        this.$http = new Http(path)
    }

    async get(){
        return await this.$http.get()
    }
}