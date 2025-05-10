<script setup lang="ts">
import { useSearchStore } from '@/entities/search/store.ts'
import { Checkbox } from '@/shared/ui/checkbox'

const searchStore = useSearchStore()
</script>

<template>
  <h2 class="font-semibold mb-4">Выберите языки программирования</h2>
  <div class="flex gap-x-4 gap-y-4 flex-wrap">
    <div
      v-for="language in searchStore.languages"
      :key="language.id"
      class="items-top flex gap-x-2"
    >
      <Checkbox
        :id="language.id.toString()"
        v-model:model-value="language.checked"
        class="cursor-pointer"
      />
      <label :for="language.id.toString()" class="text-sm"> {{ language.name }} </label>
    </div>
  </div>
</template>
