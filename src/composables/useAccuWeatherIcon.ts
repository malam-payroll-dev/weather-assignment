export function useAccuWeatherIcon (id: number | string) {
  const iconFileName = String(id).padStart(2, '0')
  return `https://www.accuweather.com/images/weathericons/${iconFileName}.svg`
}
