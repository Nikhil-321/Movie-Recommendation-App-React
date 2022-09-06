import axios from "axios"

export class UserService {
    static serverUrl = `http://localhost:9000`

    static userSignup(data) {
        console.log("url", this.serverUrl)
        return axios.post(`${this.serverUrl}/users`, data)
    }

    static getUsers() {
        return axios.get(`${this.serverUrl}/users`)
    }
}