import { defineStore } from 'pinia'
import type { ITagCategoryMapped, ILanguageMapped, State, IRepository } from './types'

export const useSearchStore = defineStore('store', {
  state: (): State => ({ tagCategories: [], languages: [], results: [] }),
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
    getSelectedTags() {
      return this.tagCategories.flatMap((category) => category.tags.filter((tag) => tag.checked))
    },
    selectAllCaterogyTags(index: number) {
      const category = this.tagCategories[index]
      const allChecked = category.tags.every((tag) => tag.checked)

      const newValue = !allChecked
      category.tags.forEach((tag) => {
        tag.checked = newValue
      })
    },
    setResults(repositories: IRepository[]) {
      this.results = repositories
    },
    reset() {
      this.tagCategories.forEach((tagCat) => {
        tagCat.tags.forEach((tag) => {
          tag.checked = false
        })
      })
      this.languages.forEach((language) => {
        language.checked = false
      })
    },
  },
})
