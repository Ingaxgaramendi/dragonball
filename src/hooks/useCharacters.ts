import { useEffect, useState } from "react"
import { dragonballApi } from "@/services/api"
import type { Character, ApiMeta } from "@/types/dragonball"

export function useCharacters(initialPage = 1, limit = 12) {
  const [characters, setCharacters] = useState<Character[]>([])
  const [meta, setMeta] = useState<ApiMeta | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(initialPage)

  useEffect(() => {
    setLoading(true)
    setError(null)
    dragonballApi
      .getCharacters(page, limit)
      .then((res) => {
        setCharacters(res.items)
        setMeta(res.meta)
      })
      .catch(() => setError("No se pudo cargar los personajes."))
      .finally(() => setLoading(false))
  }, [page, limit])

  return { characters, meta, loading, error, page, setPage }
}

export function useAllCharacters() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    dragonballApi
      .getAllCharacters()
      .then((res) => setCharacters(res.items))
      .catch(() => setError("No se pudo cargar los personajes."))
      .finally(() => setLoading(false))
  }, [])

  return { characters, loading, error }
}

export function useCharacter(id: number | null) {
  const [character, setCharacter] = useState<Character | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return
    setLoading(true)
    setError(null)
    dragonballApi
      .getCharacter(id)
      .then(setCharacter)
      .catch(() => setError("No se pudo cargar el personaje."))
      .finally(() => setLoading(false))
  }, [id])

  return { character, loading, error }
}
