<script setup lang="ts">
import { useSearchStore } from '@/entities/search/store.ts'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card'
import { Button } from '@/shared/ui/button'
import { RouterLink } from 'vue-router'

const searchStore = useSearchStore()

function getRepositoryWord(count: number): string {
  const lastTwo = count % 100
  const lastOne = count % 10

  // Исключения для чисел 11-14
  if (lastTwo >= 11 && lastTwo <= 14) {
    return 'репозиториев'
  }

  switch (lastOne) {
    case 1:
      return 'репозиторий'
    case 2:
    case 3:
    case 4:
      return 'репозитория'
    default:
      return 'репозиториев'
  }
}
</script>

<template>
  <div class="mb-8">
    <h2 class="font-semibold mb-4">Результаты</h2>
    <p>
      Найдено {{ searchStore.results.length }} {{ getRepositoryWord(searchStore.results.length) }}
    </p>
    <p class="text-muted-foreground">
      Обрати внимание, что описание и текст были переведены машинным переводом. Могут быть ошибки
    </p>
    <p class="text-muted-foreground mb-6">Репозитории отсортированы по количеству совпадений</p>
    <div class="flex flex-col mx-auto w-full max-w-4xl">
      <Card class="w-full mb-4" v-for="repository in searchStore.results" :key="repository.id">
        <CardHeader>
          <CardTitle>{{ repository.name }}</CardTitle>
          <CardDescription v-if="repository.description != null">
            <a :href="repository.url">{{ repository.url }}</a>
          </CardDescription>
        </CardHeader>
        <CardContent>
          {{ repository.description_russian }}
        </CardContent>
        <CardFooter class="flex justify-end px-6">
          <RouterLink :to="'/repository/' + repository.id">
            <Button class="cursor-pointer">Подробнее</Button></RouterLink
          >
        </CardFooter>
      </Card>
    </div>
  </div>
</template>
