import { API_URL, apiInstance } from '@/shared/api/base'
import type { AxiosPromise } from 'axios'
import type { ILanguage, ITagCategory, ISearchRequest, IRepositoryOne } from './types'
import type { ITag, IRepository } from '@/entities/search/types'

export const getLanguages = (): AxiosPromise<ILanguage[]> => {
  return apiInstance.get(`${API_URL}/languages`)
}

export const getTagCategories = (): AxiosPromise<ITagCategory[]> => {
  return apiInstance.get(`${API_URL}/tag-categories`)
}

export const getTagCategoryChildren = (tag_category_id: number): AxiosPromise<ITag[]> => {
  return apiInstance.get(`${API_URL}/tag-categories/${tag_category_id}/tags`)
}

export const searchRepositories = (data: ISearchRequest): AxiosPromise<IRepository[]> => {
  return apiInstance.post(`${API_URL}/repositories/search`, data)
}

export const getRepository = (repository_id: number): AxiosPromise<IRepositoryOne> => {
  return apiInstance.get(`${API_URL}/repositories/${repository_id}`)
}
