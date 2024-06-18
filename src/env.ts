import { z } from 'zod'

const envSchema = z.object({
  MODE: z.enum(['production', 'development', 'test']),
  VITE_API_READ_ACCESS_TOKEN: z.string(),
  VITE_BASE_TMDB_URL: z.string(),
  VITE_IMG_BASE_URL: z.string(),
})

export const env = envSchema.parse(import.meta.env)
