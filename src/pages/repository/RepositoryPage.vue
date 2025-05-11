<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { watch, ref } from 'vue'
import { getRepository } from '@/feature/searchRepositories/api'
import { Button } from '@/shared/ui/button'

import type { IRepositoryOne } from '@/feature/searchRepositories/types'

const router = useRouter()
const route = useRoute()

const repository = ref<IRepositoryOne>()

function loadRepository(id: number) {
  getRepository(id).then((response) => {
    repository.value = response.data
  })
}

watch(
  () => route.params.id,
  (newId) => {
    loadRepository(parseInt(newId as string))
  },
  { immediate: true },
)
</script>

<template>
  <Button class="cursor-pointer mb-8" @click="router.back()">Назад</Button>
  <h1 class="mb-4"><span class="font-light">Название:</span> {{ repository?.name }}</h1>
  <div v-if="repository?.description != null" class="mb-8">
    <p class="mb-4">
      <span class="font-light">Описание:</span> {{ repository.description_russian }}
    </p>
    <div v-if="repository.description_lang === 'en'">
      <p><span class="font-light">Описание (eng):</span> {{ repository.description }}</p>
    </div>
    <div v-else>
      <p class="mb-4">
        <span class="font-light">Описание (eng):</span> {{ repository.translated_description }}
      </p>
      <p><span class="font-light">Описание (исходный язык):</span> {{ repository.description }}</p>
    </div>
  </div>
  <p>
    Ссылка на github: <a :href="repository?.url" class="underline">{{ repository?.url }}</a>
  </p>
  <div class="flex gap-x-14">
    <div v-if="(repository?.languages.length as number) > 0">
      <h2>Используемые языки:</h2>
      <ul class="my-6 ml-6 list-disc">
        <li v-for="language in repository?.languages" :key="language.id">
          {{ language.name }}
        </li>
      </ul>
    </div>
    <div v-if="(repository?.tags.length as number) > 0">
      <h2>Тэги:</h2>
      <ul class="my-6 ml-6 list-disc">
        <li v-for="tag in repository?.tags" :key="tag.id">
          {{ tag.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
