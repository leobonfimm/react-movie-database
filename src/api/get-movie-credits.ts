import { api } from '@/lib/axios'

export interface MovieCreditsProps {
  id: number
  cast: Array<{
    id: number
    name: string
    character: string
    profile_path: string
  }>
  crew: Array<{
    name: string
    job: string
  }>
}

export interface GetMovieCreditsQuery {
  id: number
}

export async function getMovieCredits({ id }: GetMovieCreditsQuery) {
  const response = await api.get<MovieCreditsProps>(`/movie/${id}/credits`)

  return response.data
}
