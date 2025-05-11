<script setup lang="ts">
import { useSearchStore } from '@/entities/search/store.ts'
import { Checkbox } from '@/shared/ui/checkbox'

const searchStore = useSearchStore()
</script>

<template>
  <div class="mb-8 px-4">
    <h2 class="font-semibold mb-4">Выберите языки программирования</h2>
    <div class="flex gap-x-4 gap-y-4 flex-wrap mb-8">
      <div
        v-for="language in searchStore.languages"
        :key="language.id"
        class="items-top flex gap-x-2"
      >
        <Checkbox v-model:model-value="language.checked" class="cursor-pointer" />
        <label class="text-sm"> {{ language.name }} </label>
      </div>
    </div>
  </div>
</template>
