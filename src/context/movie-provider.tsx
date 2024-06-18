import { ReactNode, createContext, useContext, useState } from 'react'

export interface Movie {
  page: number
  results: Array<{
    id: number
    poster_path: string
    title: string
  }>
  total_pages: number
}

interface MovieContextType {
  movies?: Movie
  setMovieList: (movie: Movie) => void
}

export const MovieContext = createContext({} as MovieContextType)

interface MovieProviderProps {
  children: ReactNode
}

export function MovieProvider({ children }: MovieProviderProps) {
  const [movies, setMovies] = useState<Movie>({} as Movie)

  function onSetListMovie(movie: Movie) {}

  return (
    <MovieContext.Provider value={{ movies }}>{children}</MovieContext.Provider>
  )
}

export function useMovie() {
  const context = useContext(MovieContext)

  return context
}
