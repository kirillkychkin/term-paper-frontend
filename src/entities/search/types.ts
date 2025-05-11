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
}
