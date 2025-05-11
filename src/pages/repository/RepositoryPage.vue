<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { watch, ref } from 'vue'
import { getRepository } from '@/feature/searchRepositories/api'
import { Button } from '@/shared/ui/button'

import type { IRepositoryOne } from '@/feature/searchRepositories/types'

import { marked } from 'marked'

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
  <h1 class="mb-4 text-3xl"><span class="font-light">Название:</span> {{ repository?.name }}</h1>
  <div v-if="repository?.description != null" class="mb-8">
    <div v-if="repository.description_lang === 'en'">
      <p class="mb-4">
        <span class="font-light">Описание:</span> {{ repository.description_russian }}
      </p>
      <p><span class="font-light">Описание (eng):</span> {{ repository.description }}</p>
    </div>
    <div v-else>
      <div v-if="repository.description_lang === 'ru'">
        <p class="mb-4"><span class="font-light">Описание:</span> {{ repository.description }}</p>
        <p>
          <span class="font-light">Описание (eng):</span> {{ repository.translated_description }}
        </p>
      </div>
      <div v-else>
        <p class="mb-4">
          <span class="font-light">Описание:</span> {{ repository.description_russian }}
        </p>
        <p class="mb-4">
          <span class="font-light">Описание (eng):</span> {{ repository.translated_description }}
        </p>
        <p>
          <span class="font-light">Описание (исходный язык):</span> {{ repository.description }}
        </p>
      </div>
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
  <div v-if="repository?.readme_text != null">
    <div v-if="repository.readme_lang === 'en'">
      <h1 class="text-3xl">Readme</h1>
      <div v-html="marked(repository?.readme_russian as string)" class="prose bg-blue-50"></div>
      <h1 class="text-3xl">English readme</h1>
      <div v-html="marked(repository?.readme_text as string)" class="prose bg-blue-50"></div>
    </div>
    <div v-else>
      <div v-if="repository.readme_lang === 'ru'">
        <h1 class="text-3xl">Readme</h1>
        <div v-html="marked(repository?.readme_text as string)" class="prose bg-blue-50"></div>
        <h1 class="text-3xl">English readme (auto translation)</h1>
        <div
          v-html="marked(repository?.translated_readme_text as string)"
          class="prose bg-blue-50"
        ></div>
      </div>
      <div v-else>
        <h1 class="text-3xl">Readme</h1>
        <div v-html="marked(repository?.readme_russian as string)" class="prose bg-blue-50"></div>
        <h1 class="text-3xl">English readme (auto translation)</h1>
        <div
          v-html="marked(repository?.translated_readme_text as string)"
          class="prose bg-blue-50"
        ></div>
        <h1 class="text-3xl">Source readme</h1>
        <div v-html="marked(repository?.readme_text as string)" class="prose bg-blue-50"></div>
      </div>
    </div>
  </div>
</template>
