import { API_URL, apiInstance } from '@/shared/api/base'
import type { AxiosPromise } from 'axios'
import type { ILanguage, ITagCategory } from './types'

export const getLanguages = (): AxiosPromise<ILanguage[]> => {
  return apiInstance.get(`${API_URL}/languages`)
}

export const getTagCategories = (): AxiosPromise<ITagCategory[]> => {
  return apiInstance.get(`${API_URL}/tag-categories`)
}

export const getTagCategoryChildren = (tag_category_id: number): AxiosPromise<ITagCategory[]> => {
  return apiInstance.get(`${API_URL}/tag-categories/${tag_category_id}/tags`)
}
