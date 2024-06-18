import {
  UpcomingMoviesProps,
  getUpcomingMovies,
} from '@/api/get-upcoming-movies'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { env } from '@/env'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '../utils/format'

export function MovieCarousel() {
  const [moviesUpcoming, setMoviesUpcoming] = useState<UpcomingMoviesProps>()

  useEffect(() => {
    getUpcomingMovies().then((response) => setMoviesUpcoming(response))
  }, [])

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl">Next releases</h1>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent>
          {moviesUpcoming?.results.map((movie) => (
            <CarouselItem key={movie.id} className="py-4 pl-8 w-full max-w-96">
              <Link
                to={`/movie-details/${movie.id}`}
                className="bg-cover bg-center w-full max-w-96 h-[500px] flex items-end rounded-lg outline-8 outline-yellow-500 outline-dashed transition hover:scale-90 hover:ease-in"
                style={{
                  backgroundImage: `url(${env.VITE_IMG_BASE_URL}/${movie.poster_path})`,
                }}
              >
                <footer className="max-h-40 bg-gradient-to-t from-70% from-stone-500 p-4 w-full text-white">
                  <h2 className="text-lg font-bold mb-1">{movie.title}</h2>
                  <span className="text-ellipsis overflow-hidden">
                    Release date: {formatDate(new Date(movie.release_date))}
                  </span>
                </footer>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
