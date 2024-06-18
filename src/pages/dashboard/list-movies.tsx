import { getTopRatedMovies } from '@/api/get-top-rated-movies'
import { Button } from '@/components/ui/button'
import { env } from '@/env'
import { useInfiniteQuery } from '@tanstack/react-query'
import { ArrowBigDown } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { z } from 'zod'

export function ListMovies() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentPage, setCurrentPage] = useState(0)

  const pageIndex = z.coerce
    .number()
    .transform((page) => page)
    .parse(currentPage === 0 ? '1' : searchParams.get('page'))
  const movieTitle = searchParams.get('movieTitle') ?? ''
  let indexPage = 0

  const { data: topRatedMovies, fetchNextPage } = useInfiniteQuery({
    queryKey: ['top-rated-movies', movieTitle],
    queryFn: () => getTopRatedMovies({ pageIndex, movieTitle }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.page + 1,
  })

  function handlePaginate() {
    setSearchParams((state) => {
      state.set('page', (pageIndex + 1).toString())

      return state
    })

    setCurrentPage((prevState) => prevState + 1)
  }

  useEffect(() => {
    fetchNextPage()
  }, [fetchNextPage, pageIndex])

  return (
    <div className="flex flex-col gap-4 pb-8">
      <h1 className="text-xl">Top rated films</h1>
      <div className="grid grid-cols-4 gap-6">
        {topRatedMovies &&
          topRatedMovies.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((movie) => {
                indexPage++
                return (
                  <Link
                    to={`/movie-details/${movie.id}`}
                    key={movie.id}
                    className={`bg-cover bg-center w-[300px] h-[400px] rounded-lg flex flex-col items-start justify-between transition hover:-translate-y-4 hover:ease-in`}
                    style={{
                      backgroundImage: `url(${env.VITE_IMG_BASE_URL}/${movie.poster_path})`,
                    }}
                  >
                    {!movieTitle && (
                      <header className="rounded-full bg-yellow-600 mt-2 ml-2 flex items-center justify-center leading-none w-14 h-14">
                        <h2 className="text-2xl font-bold">{indexPage}º</h2>
                      </header>
                    )}
                    <footer className="mt-auto bg-gradient-to-t from-30% from-slate-500 p-4 w-full">
                      <strong className="text-white">{movie.title}</strong>
                    </footer>
                  </Link>
                )
              })}
            </React.Fragment>
          ))}
      </div>

      <Button
        type="button"
        className="w-full gap-2 bg-green-600 hover:bg-green-500 text-white font-bold"
        disabled={topRatedMovies?.pages[0].total_pages === pageIndex}
        onClick={handlePaginate}
      >
        <ArrowBigDown />
        More movies
      </Button>
    </div>
  )
}
