<script setup lang="ts">
import { getLanguages, getTagCategories, getTagCategoryChildren, searchRepositories } from './api'
import { useSearchStore } from '@/entities/search/store.ts'
import type { ITagCategoryMapped, ITagMapped } from '@/entities/search/types'

import LanguagesFilter from '@/widgets/languagesFilter/LanguagesFilter.vue'
import TagsFilter from '@/widgets/tagsFilter/TagsFilter.vue'
import { Button } from '@/shared/ui/button'

import { getLanguagesIds, getTagsIds } from './formatFilters'

const searchStore = useSearchStore()

function loadFilters() {
  getLanguages().then((response) => {
    const languages = response.data
    const languagesFilter = languages.map((obj) => ({ ...obj, checked: false }))
    searchStore.setLanguages(languagesFilter)
  })

  getTagCategories().then((response) => {
    const tagCategs = response.data

    // Map each category to the new format with promises for tags
    const mappedPromises = tagCategs.map(async (tagCategory) => {
      const tagsResponse = await getTagCategoryChildren(tagCategory.id)

      // Create a new object that matches ITagCategoryMapped
      const mappedTags: ITagMapped[] = tagsResponse.data.map((obj) => ({ ...obj, checked: false }))
      const mappedCategory: ITagCategoryMapped = {
        ...tagCategory,
        tags: mappedTags,
      }

      return mappedCategory
    })

    Promise.all(mappedPromises).then((mappedCategories) => {
      searchStore.setTagCategories(mappedCategories)
    })
  })
}

function search() {
  const selectedLanguages = searchStore.getSelectedLanguages()
  const languageIds = getLanguagesIds(selectedLanguages)

  const selectedTags = searchStore.getSelectedTags()
  const tagIds = getTagsIds(selectedTags)
  const searchReq = {
    languages: languageIds,
    tags: tagIds,
  }
  searchRepositories(searchReq).then((response) => {
    console.log(response)
  })
}

loadFilters()
</script>

<template>
  <div>
    <h1 class="font-bold text-xl">Фильтры</h1>
    <LanguagesFilter />
    <TagsFilter />
    <Button @click="search" class="cursor-pointer">Найти</Button>
  </div>
</template>
