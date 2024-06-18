import { api } from '@/lib/axios'

export interface MovieDetailsProps {
  budget: number
  revenue: number
  runtime: number
  vote_average: number
  poster_path: string
  overview: string
  status: string
  title: string
  genres: Array<{
    name: string
  }>
}

export interface GetMovieDetailsQuery {
  id: number
}

export async function getMovieDetails({ id }: GetMovieDetailsQuery) {
  const response = await api.get<MovieDetailsProps>(`/movie/${id}`)

  return response.data
}
