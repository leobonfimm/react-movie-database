import { Clapperboard, Moon, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTheme } from './theme/theme-provider'

export function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex border-b w-full justify-center">
      <div className="flex w-full h-16 max-w-7xl items-center gap-6 px-6 justify-between">
        <Link to="/">
          <Clapperboard className="h-6 w-6 mr-auto" />
        </Link>

        {theme === 'dark' ? (
          <button type="button" onClick={() => setTheme('light')}>
            <Sun className="h-6 w-6" />
          </button>
        ) : (
          <button type="button" onClick={() => setTheme('dark')}>
            <Moon className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  )
}
