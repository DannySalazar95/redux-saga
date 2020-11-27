import axios from 'axios'
import { environment } from '../enviroments/enviroment'

const baseURL = environment.backend_url;

export function getHttp(request) {
    let token = localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return axios.get(`${baseURL + request.url}`)
        .then(res => res, err => err.response)
        .catch((error) => { console.error(error) });
}

export function postHttp(request) {
    let token = localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return axios.post(`${baseURL + request.url}`, request.body)
        .then(res => res, err => err.response)
        .catch((error) => { console.error(error) });
}

export function patchHttp(request, success, danger) {
    let token = localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return axios.patch(`${baseURL + request.url}`, request.body)
        .then(res => res, err => err.response)
        .catch((error) => { console.error(error) });
}
