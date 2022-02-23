import FoxRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import type { AxiosRequestConfig } from 'axios'
// https://api.apiopen.top/getJoke?page=1&count=2&type=video
const foxRequest = new FoxRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config: AxiosRequestConfig) => {
      const token = ''
      if (token) {
        // 方式一：使用 ! 非空断言，告知Typescript，headers 属性不可能为 未定义
        // config.headers!.Authorization = `Bearer ${token}`
        // 方式二：
        config.headers = config.headers ?? {}
        config.headers.Authorization = `Bearer ${token}`
        // 方式三：
        // if (!config.headers) config.headers = {}
        // config.headers.Authorization = `Bearer ${token}`
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

foxRequest
  .request({
    url: '/getJoke',
    method: 'get',
    isLoading: true
  })
  .then((res) => {
    console.log(res)
  })

export default foxRequest
