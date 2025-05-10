import { defineStore } from 'pinia'
import type { ITagCategoryMapped, ILanguageMapped, State } from './types'

export const useSearchStore = defineStore('store', {
  state: (): State => ({ tagCategories: [], languages: [] }),
  actions: {
    setLanguages(languages: ILanguageMapped[]) {
      this.languages = languages
      console.log(this.languages)
    },
    setTagCategories(tagCategories: ITagCategoryMapped[]) {
      this.tagCategories = tagCategories
      console.log(this.tagCategories)
    },
    getSelectedLanguages() {
      return this.languages.filter((language) => language.checked === true)
    },
  },
})
