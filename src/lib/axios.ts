import { env } from '@/env'
import axios from 'axios'

export const api = axios.create({
  baseURL: env.VITE_BASE_TMDB_URL,
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${env.VITE_API_READ_ACCESS_TOKEN}`,
  },
})
