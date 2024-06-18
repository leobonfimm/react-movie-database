import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './pages/_layouts/app'
import { Dashboard } from './pages/dashboard'
import { MovieDetails } from './pages/movie-details'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/movie-details/:movieId', element: <MovieDetails /> },
    ],
  },
])
