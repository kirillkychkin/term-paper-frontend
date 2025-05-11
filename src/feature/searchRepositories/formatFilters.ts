import type { ILanguageMapped } from '@/entities/search/types'

export function getLanguagesIds(selectedLanguages: ILanguageMapped[]) {
  return selectedLanguages.map((language) => language.id)
}
