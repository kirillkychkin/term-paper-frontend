<script setup lang="ts">
import { useSearchStore } from '@/entities/search/store.ts'
import { Checkbox } from '@/shared/ui/checkbox'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/ui/accordion'

const searchStore = useSearchStore()

function selectAll(tagCatIndex: number) {
  searchStore.selectAllCaterogyTags(tagCatIndex)
}
</script>

<template>
  <div class="mb-8 px-4">
    <h2 class="mb-4">Раскрой категории тэгов и выбери нужные тэги</h2>
    <div>
      <Accordion type="single" class="w-full" collapsible>
        <AccordionItem
          v-for="(tagCategory, index) in searchStore.tagCategories"
          :key="tagCategory.id"
          :value="tagCategory.name"
        >
          <AccordionTrigger class="cursor-pointer"> {{ tagCategory.name }}</AccordionTrigger>
          <AccordionContent>
            <div class="items-top flex gap-x-2">
              <Checkbox
                @click="selectAll(index)"
                :model-value="searchStore.tagCategories[index].tags.every((tag) => tag.checked)"
                class="cursor-pointer"
              />
              <label class="text-sm"> Выбрать все </label>
            </div>
            <div
              v-for="tag in searchStore.tagCategories[index].tags"
              :key="tag.id"
              class="items-top flex gap-x-2"
            >
              <Checkbox v-model:model-value="tag.checked" class="cursor-pointer" />
              <label class="text-sm"> {{ tag.name }} </label>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</template>
