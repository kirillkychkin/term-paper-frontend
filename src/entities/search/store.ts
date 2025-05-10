import { defineStore } from 'pinia'
import type { ITagCategoryMapped, ILanguageMapped } from './types'

export const useSearchStore = defineStore('store', {
  state: () => ({ tagCategories: {}, languages: {} }),
  actions: {
    setLanguages(languages: ILanguageMapped[]) {
      this.languages = languages
      console.log(this.languages)
    },
    setTagCategories(tagCategories: ITagCategoryMapped[]) {
      this.tagCategories = tagCategories
      console.log(this.tagCategories)
    },
  },
})
