import { DollarSign, Ticket, Timer } from 'lucide-react'
import { formatRuntimeMovie, formatUSDCurrency } from '../utils/format'

interface MovieInfoProps {
  budget: number
  revenue: number
  runtime: number
}

export function MovieInfo({ budget, revenue, runtime }: MovieInfoProps) {
  const budgeFormatted = formatUSDCurrency(budget)
  const revenueFormatted = formatUSDCurrency(revenue)
  const runningTimeFormatted = formatRuntimeMovie(runtime)

  return (
    <div className="w-full flex items-center justify-around bg-slate-800 p-6 rounded-b-lg">
      <div className="flex items-center gap-2 text-white">
        <Timer size={30} />
        <span>Running Time: {runningTimeFormatted}</span>
      </div>

      <div className="flex items-center gap-2 text-white">
        <DollarSign size={30} />
        <span>Budget: {budgeFormatted}</span>
      </div>

      <div className="flex items-center gap-2 text-white">
        <Ticket size={30} />
        <span>Revenue: {revenueFormatted}</span>
      </div>
    </div>
  )
}
