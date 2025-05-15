export interface ILanguage {
  id: number
  created_at: string | null
  updated_at: string | null
  name: string
}

export interface ITagCategory {
  id: number
  created_at: string | null
  updated_at: string | null
  name: string
}

export interface ISearchRequest {
  languages: number[]
  tags: number[]
}
