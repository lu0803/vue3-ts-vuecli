import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { FoxRequestConfig, FoxRequestInterceptors } from './type'

class FoxRequest {
  instance: AxiosInstance
  interceptors?: FoxRequestInterceptors
  constructor(config: FoxRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )
  }
  request(config: FoxRequestConfig): void {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }
    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors?.responseInterceptor(res)
      }
      console.log(res)
    })
  }
}

export default FoxRequest
