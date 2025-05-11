import { defineStore } from 'pinia'
import type { ITagCategoryMapped, ILanguageMapped, State } from './types'

export const useSearchStore = defineStore('store', {
  state: (): State => ({ tagCategories: [], languages: [] }),
  actions: {
    setLanguages(languages: ILanguageMapped[]) {
      this.languages = languages
    },
    setTagCategories(tagCategories: ITagCategoryMapped[]) {
      this.tagCategories = tagCategories
    },
    getSelectedLanguages() {
      return this.languages.filter((language) => language.checked === true)
    },
  },
})
