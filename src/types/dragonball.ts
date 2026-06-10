export interface Character {
  id: number
  name: string
  ki: string
  maxKi: string
  race: string
  gender: string
  description: string
  image: string
  affiliation: string
  deletedAt: string | null
  originPlanet?: Planet
  transformations?: Transformation[]
}

export interface Planet {
  id: number
  name: string
  isDestroyed: boolean
  description: string
  image: string
}

export interface Transformation {
  id: number
  name: string
  image: string
  ki: string
  deletedAt: string | null
}

export interface ApiMeta {
  totalItems: number
  itemCount: number
  itemsPerPage: number
  totalPages: number
  currentPage: number
}

export interface ApiResponse<T> {
  items: T[]
  meta: ApiMeta
  links: {
    first: string
    previous: string
    next: string
    last: string
  }
}

export type Affiliation =
  | "Z Fighter"
  | "Villain"
  | "Army of Frieza"
  | "Red Ribbon Army"
  | "Namekian Warrior"
  | "Freelancer"
  | "Other"

export type Race = "Saiyan" | "Human" | "Namekian" | "Frieza Race" | "Majin" | "Android" | "God" | string
