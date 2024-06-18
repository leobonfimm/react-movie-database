import { env } from '@/env'
import { CameraOff } from 'lucide-react'

interface MovieCastProps {
  cast: Array<{
    id: number
    name: string
    character: string
    profile_path: string
  }>
}

export function MovieCast({ cast }: MovieCastProps) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl">CAST</h1>

      <div className="w-full grid grid-cols-4 gap-8">
        {cast &&
          cast.map((person) => {
            console.log(person.profile_path)
            return (
              <div key={person.id} className="flex flex-col">
                {person.profile_path ? (
                  <img
                    src={`${env.VITE_IMG_BASE_URL}/${person.profile_path}`}
                    alt=""
                    className="flex-1 h-[267px] object-fill rounded-t-lg"
                  />
                ) : (
                  <div className="flex items-center justify-center flex-1 rounded-t-lg">
                    <CameraOff size={24} />
                  </div>
                )}

                <div className="flex flex-col gap-2 bg-slate-900 text-white p-3 rounded-b-lg">
                  <strong>{person.name}</strong>
                  <span className="text-slate-400">
                    Character: {person.character}
                  </span>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
