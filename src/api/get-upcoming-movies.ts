import { api } from '@/lib/axios'

export interface UpcomingMoviesProps {
  page: number
  results: Array<{
    poster_path: string
    id: number
    title: string
    overview: string
    release_date: string
  }>
}

export async function getUpcomingMovies() {
  const response = await api.get<UpcomingMoviesProps>('/movie/upcoming')

  return response.data
}
