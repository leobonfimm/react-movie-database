import { api } from '@/lib/axios'

export interface GetSearchMovieProps {
  page: number
  results: Array<{
    id: number
    poster_path: string
    title: string
  }>
  total_pages: number
}

export async function getSearchMovie(movie: string) {
  const response = await api.get<GetSearchMovieProps>(`/search/movie`, {
    params: {
      query: movie,
    },
  })

  return response.data
}
