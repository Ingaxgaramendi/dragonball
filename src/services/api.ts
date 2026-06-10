import type { ApiResponse, Character } from "@/types/dragonball"

const BASE_URL = "https://dragonball-api.com/api"

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`)
  if (!res.ok) throw new Error(`API error ${res.status}`)
  return res.json()
}

export const dragonballApi = {
  getCharacters: (page = 1, limit = 12) =>
    get<ApiResponse<Character>>(`/characters?page=${page}&limit=${limit}`),

  getAllCharacters: () =>
    get<ApiResponse<Character>>(`/characters?limit=58`),

  getCharacter: (id: number) =>
    get<Character>(`/characters/${id}`),

  searchCharacters: (name: string) =>
    get<Character[]>(`/characters?name=${encodeURIComponent(name)}`),
}
