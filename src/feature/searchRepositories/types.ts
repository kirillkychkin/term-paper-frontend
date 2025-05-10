export interface ILanguage {
  id: number
  created_at: string | null
  updated_at: string | null
  name: string
}

export interface ILanguageMapped {
  id: number
  created_at: string | null
  updated_at: string | null
  name: string
  checked: boolean
}

export interface ITagCategory {
  id: number
  created_at: string | null
  updated_at: string | null
  name: string
}

export interface ITagCategoryMapped {
  id: number
  created_at: string | null
  updated_at: string | null
  name: string
  checked: boolean
  tags: ITag[]
}

export interface ITag {
  id: number
  created_at: string | null
  updated_at: string | null
  name: string
  tag_category_id: number
}
