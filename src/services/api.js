import axios from "axios"

export const api = {
    call() {
        return axios.create({
            // baseURL: 'http://localhost/online-learning-api',
            baseURL: 'https://www.ndkhieu.xyz/online-learning-api',
            headers: {
                'Content-Type': 'application/json',
            }
        })
    },
}