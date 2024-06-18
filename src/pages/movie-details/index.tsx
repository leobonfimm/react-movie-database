import { getMovieCredits } from '@/api/get-movie-credits'
import { getMovieDetails } from '@/api/get-movie-details'
import { useQuery } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { About } from './about'
import { MovieCast } from './movie-cast'
import { MovieInfo } from './movie-info'

export function MovieDetails() {
  const { movieId } = useParams()
  const id = Number(movieId)

  const { data: movieCredits } = useQuery({
    queryKey: ['movie-credits', id],
    queryFn: () => getMovieCredits({ id }),
  })

  const { data: movieDetails } = useQuery({
    queryKey: ['movie-details', id],
    queryFn: () => getMovieDetails({ id }),
  })

  const director = movieCredits?.crew?.find(
    (item) => item.job === 'Director',
  )?.name

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col max-w-7xl gap-5">
        {!movieCredits || !movieDetails ? (
          <Loader2 className="mr-2 h-14 w-14 animate-spin" />
        ) : (
          <>
            <div>
              <About
                title={movieDetails.title}
                overview={movieDetails.overview}
                status={movieDetails.status}
                imdbRating={movieDetails.vote_average}
                genres={movieDetails.genres}
                postPath={movieDetails.poster_path}
                director={director}
              />

              <MovieInfo
                budget={movieDetails.budget}
                revenue={movieDetails.revenue}
                runtime={movieDetails.runtime}
              />
            </div>

            <MovieCast cast={movieCredits.cast} />
          </>
        )}
      </div>
    </div>
  )
}
