import FoxRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
// https://api.apiopen.top/getJoke?page=1&count=2&type=video
const foxRequest = new FoxRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = ''
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

foxRequest.request({
  url: '/getJoke',
  method: 'get'
})

export default foxRequest
