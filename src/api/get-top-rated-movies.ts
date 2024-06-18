import { Movie } from '@/context/movie-provider'
import { api } from '@/lib/axios'

export interface TopRatedMoviesProps {
  page: number
  results: Array<{
    id: number
    poster_path: string
    title: string
  }>
  total_pages: number
}

interface GetTopRatedMoviesQuery {
  pageIndex?: number
  movieTitle?: string
}

export const getTopRatedMovies = async ({
  pageIndex = 1,
  movieTitle = '',
}: GetTopRatedMoviesQuery) => {
  const url = movieTitle ? '/search/movie' : '/movie/top_rated'
  const response = await api.get<Movie>(url, {
    params: {
      page: pageIndex,
      query: movieTitle,
    },
  })

  return response.data
}
