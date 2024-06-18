import { Slider } from '@/components/ui/slider'
import { env } from '@/env'

interface AboutProps {
  title: string
  overview: string
  status: string
  genres: Array<{
    name: string
  }>
  imdbRating: number
  postPath: string
  director?: string
}

export function About({
  title,
  overview,
  status,
  genres,
  imdbRating,
  postPath,
  director,
}: AboutProps) {
  return (
    <div className="flex bg-slate-700 rounded-t-lg text-white">
      <img
        src={`${env.VITE_IMG_BASE_URL}/${postPath}`}
        alt=""
        className="max-w-[400px] object-cover rounded-tl-lg"
      />

      <div className="flex-1 flex flex-col items-start justify-between px-6 py-14">
        <h2 className="text-4xl">
          {title} ({status})
        </h2>

        <div className="flex flex-col gap-2">
          <strong>PLOT</strong>
          <p>{overview}</p>
        </div>

        <div className="flex flex-col gap-2">
          <strong>GENRES</strong>
          <div className="flex items-center gap-4">
            {genres &&
              genres.map((genre) => (
                <span
                  className="p-2 border border-yellow-600 rounded-lg text-yellow-600"
                  key={genre.name}
                >
                  {genre.name}
                </span>
              ))}
          </div>
        </div>

        {status === 'Released' && (
          <div className="flex flex-col gap-2">
            <strong>IMDB RATING</strong>
            <div className="flex items-center gap-3 w-[200px]">
              <Slider defaultValue={[imdbRating]} max={10} disabled />
              <span>{imdbRating}/10</span>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-2">
          <strong>DIRECTOR</strong>
          <span>{director}</span>
        </div>
      </div>
    </div>
  )
}
