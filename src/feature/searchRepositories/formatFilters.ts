import type { ILanguageMapped, ITagMapped } from '@/entities/search/types'

export function getLanguagesIds(selectedLanguages: ILanguageMapped[]) {
  return selectedLanguages.map((language) => language.id)
}

export function getTagsIds(selectedTags: ITagMapped[]) {
  return selectedTags.map((tag) => tag.id)
}
