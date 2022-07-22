import axios from 'axios'

export const defaultClient = axios.create({
    baseURL: 'https://api.github.com'
})
