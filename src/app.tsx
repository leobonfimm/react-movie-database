import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './routes'

import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'
import './styles/global.css'

export function App() {
  return (
    <ThemeProvider storageKey="react-movie-database" defaultTheme="dark">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
