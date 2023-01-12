// Category
export type Category = {
  id: string
  name: string
  order: number
  created_at: string
  updated_at: string
  delflg: boolean
}

export type EditedCategory = {
  id: string
  name: string
  order: number
}

// Tag
export type Tag = {
  id: string
  name: string
  order: number
  created_at: string
  updated_at: string
  delflg: boolean
}

export type EditedTag = {
  id: string
  name: string
  order: number
}
