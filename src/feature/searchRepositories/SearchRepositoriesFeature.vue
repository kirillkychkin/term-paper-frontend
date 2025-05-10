<script setup lang="ts">
import { getLanguages, getTagCategories, getTagCategoryChildren } from './api'
import { useSearchStore } from '@/entities/search/store.ts'

import LanguagesFilter from '@/widgets/languagesFilter/LanguagesFilter.vue'

const searchStore = useSearchStore()

function loadFilters() {
  getLanguages().then((response) => {
    const languages = response.data
    const languagesFilter = languages.map((obj) => ({ ...obj, checked: false }))
    searchStore.setLanguages(languagesFilter)
  })

  getTagCategories().then((response) => {
    const tagCategs = response.data
    tagCategs.forEach((tagCategory) => {
      tagCategory.checked = false
      getTagCategoryChildren(tagCategory.id).then((response) => {
        tagCategory.tags = response.data
      })
    })

    searchStore.setTagCategories(tagCategs)
  })
}

loadFilters()
</script>

<template>search repositories <LanguagesFilter /></template>
