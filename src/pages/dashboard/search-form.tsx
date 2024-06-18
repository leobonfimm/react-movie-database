import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Search, Trash2Icon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

const movieFilterSchema = z.object({
  movieTitle: z.string().optional(),
})

type MovieFilterSchema = z.infer<typeof movieFilterSchema>

export function SearchForm() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { register, handleSubmit, reset } = useForm<MovieFilterSchema>({
    resolver: zodResolver(movieFilterSchema),
  })
  const movieTitleUrl = searchParams.get('movieTitle') ?? ''

  function handleFilter({ movieTitle }: MovieFilterSchema) {
    setSearchParams((state) => {
      state.set('movieTitle', movieTitle ?? '')
      state.set('page', '1')

      return state
    })
  }

  function handleClearFilter() {
    setSearchParams((state) => {
      state.delete('movieTitle')
      state.set('page', '1')

      return state
    })

    reset({
      movieTitle: '',
    })
  }

  return (
    <form onSubmit={handleSubmit(handleFilter)} className="flex gap-2">
      <Input placeholder="Search for a movie..." {...register('movieTitle')} />

      <button type="submit">
        <Search />
      </button>

      <button
        type="button"
        className="text-red-400 hover:text-red-300 disabled:text-gray-400 disabled:cursor-not-allowed"
        onClick={handleClearFilter}
        disabled={!movieTitleUrl}
      >
        <Trash2Icon />
      </button>
    </form>
  )
}
