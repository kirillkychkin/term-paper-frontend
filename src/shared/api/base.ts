import axios from 'axios'
import type { AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios'
import { handleAxiosError } from './error'

export const API_URL = 'http://api.localhost.test'

class ApiInstance {
  private axios: AxiosInstance

  constructor() {
    this.axios = axios.create({
      baseURL: API_URL,
      timeout: 120000,
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
      },
    })

    this.axios.interceptors.request.use(
      (config) => {
        return config
      },
      (error) => {
        return Promise.reject(error)
      },
    )

    this.axios.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        return handleAxiosError(error)
      },
    )
  }

  async get<T>(endpoint: string, options: AxiosRequestConfig = {}): AxiosPromise<T> {
    return await this.axios.get(endpoint, options)
  }

  async post<T>(endpoint: string, data: object): Promise<T> {
    const response: AxiosResponse<T> = await this.axios.post(endpoint, data)
    return response.data
  }

  async patch<T>(endpoint: string, data: object): Promise<T> {
    const response: AxiosResponse<T> = await this.axios.patch(endpoint, data)
    return response.data
  }

  async delete<T>(endpoint: string, options: AxiosRequestConfig = {}): Promise<T> {
    const response: AxiosResponse<T> = await this.axios.delete(endpoint, options)
    return response.data
  }
}

export const apiInstance = new ApiInstance()
