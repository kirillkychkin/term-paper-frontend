export interface ILanguageMapped {
  id: number
  created_at: string | null
  updated_at: string | null
  name: string
  checked: boolean
}
export interface ITagCategoryMapped {
  id: number
  created_at: string | null
  updated_at: string | null
  name: string
  tags: ITagMapped[]
}
export interface ITag {
  id: number
  created_at: string | null
  updated_at: string | null
  name: string
  tag_category_id: number
}

export interface ITagMapped {
  id: number
  created_at: string | null
  updated_at: string | null
  name: string
  tag_category_id: number
  checked: boolean
}

export interface State {
  tagCategories: ITagCategoryMapped[]
  languages: ILanguageMapped[]
  results: IRepository[]
}
interface IPivotLanguage {
  repository_id: number
  language_id: number
}

interface IPivotTag {
  repository_id: number
  tag_id: number
}

interface IRepoLanguage {
  id: number
  created_at: string | null
  updated_at: string | null
  name: string
  pivot: IPivotLanguage
}
interface IRepoTag {
  id: number
  created_at: string | null
  updated_at: string | null
  name: string
  tag_category_id: number
  pivot: IPivotTag
}
export interface IRepository {
  id: number
  created_at: string | null
  updated_at: string | null
  name: string
  url: string
  readme_text: string | null
  readme_lang: string | null
  translated_readme_text: string | null
  readme_russian: string | null
  description: string | null
  description_lang: string | null
  translated_description: string | null
  description_russian: string | null
  languages: IRepoLanguage[]
  tags: IRepoTag[]
}
