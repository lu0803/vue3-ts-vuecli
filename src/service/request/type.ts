import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface FoxRequestInterceptors {
  requestInterceptor: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch: (error: any) => any
  responseInterceptor: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch: (error: any) => any
}

export interface FoxRequestConfig extends AxiosRequestConfig {
  interceptors?: FoxRequestInterceptors
}
