import * as axios from "axios"

export class MovieService {
    static serverUrl = "http://localhost:9000"

    static getMovies() {
     return axios.get(`${this.serverUrl}/movies`)
    }
}