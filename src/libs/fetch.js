import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import mockData from '../mock/index'

const serve = axios.create({
  baseURL: '/',
  timeout: 5000
})

serve.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

serve.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

const mock = new MockAdapter(serve, { delayResponse: 500 })
mockData(mock)

if (process.env.NODE_ENV === undefined || !process.env.VUE_APP_API_MOCK) {
  mock.restore()
}

export default serve
