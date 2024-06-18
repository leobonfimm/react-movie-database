export const formatRuntimeMovie = (runtime: number) => {
  if (runtime < 60) {
    return `${runtime}m`
  }

  if (runtime === 60) {
    return '1h'
  }

  const runningHourTimeFormatted = Math.floor(runtime / 60)
  const runningMinuteTimeFormatted = runtime % 60

  return `${runningHourTimeFormatted}h ${runningMinuteTimeFormatted}m`
}

export const formatUSDCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', {
    currency: 'USD',
    style: 'currency',
    maximumFractionDigits: 0,
  }).format(value)

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('en-US').format(date)
