import axios from 'axios'
import { API_URL, API_KEY } from '../.env'

export default class Http {
    constructor(path) {

        this.instance = axios.create({
            baseURL: `${API_URL}${path}`,
            timeout: 1000000,
            headers: {
                "X-Api-Key": API_KEY
            }
        })

        return this.instance
    }
}