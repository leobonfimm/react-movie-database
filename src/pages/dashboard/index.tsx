import { ListMovies } from './list-movies'
import { MovieCarousel } from './movie-carousel'
import { SearchForm } from './search-form'

export function Dashboard() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col gap-5 max-w-7xl">
        <MovieCarousel />
        <SearchForm />
        <ListMovies />
      </div>
    </div>
  )
}
