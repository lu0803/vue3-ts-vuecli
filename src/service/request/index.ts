import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { FoxRequestConfig, FoxRequestInterceptors } from './type'
import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

class FoxRequest {
  instance: AxiosInstance
  interceptors?: FoxRequestInterceptors
  isLoading?: boolean
  loading?: LoadingInstance

  constructor(config: FoxRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    this.isLoading = config.isLoading ?? false

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
        if (this.isLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '加载中...',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        // 是否关闭loading
        if (this.isLoading) {
          this.loading?.close()
        }

        // console.log('所有实例都有的拦截器：响应成功拦截')
        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败~，错误信息')
        } else {
          return data
        }
      },
      (err) => {
        // console.log('所有实例都有的拦截器：响应失败拦截')
        //  例子：判断不同的HttpErrorCOde显示不同的错误信息
        if (err.response.status === 404) {
          console.log('404的错误')
        }
        return err
      }
    )
  }
  request<T>(config: FoxRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.isLoading = config.isLoading ?? false
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors?.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  get<T = any>(config: FoxRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }
  post<T = any>(config: FoxRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T = any>(config: FoxRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: FoxRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }
  put<T = any>(config: FoxRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'PUT' })
  }
}

export default FoxRequest
