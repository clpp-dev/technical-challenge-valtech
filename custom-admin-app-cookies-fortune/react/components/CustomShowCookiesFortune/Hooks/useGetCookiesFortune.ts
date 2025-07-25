import { useState, useEffect } from 'react'

interface CookieFortune {
  CookieFortune: string
  id: string
  createdIn: string
}

interface UseGetCookiesFortuneReturn {
  data: CookieFortune[] | null
  loading: boolean
  error: string | null
  refetch: () => void
}

export const useGetCookiesFortune = (): UseGetCookiesFortuneReturn => {
  const [data, setData] = useState<CookieFortune[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchCookiesFortune = async () => {
    try {
      setLoading(true)
      setError(null)
      const url = `/_v/cookiesfortune`
      const response = await window.fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const result = await response.json()
      setData(result)
    } catch (err) {
      console.error('Error fetching cookies fortune:', err)
      setError(err instanceof Error ? err.message : 'Error fetching cookies fortune')
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCookiesFortune()
  }, [])

  return {
    data,
    loading,
    error,
    refetch: fetchCookiesFortune
  }
}
