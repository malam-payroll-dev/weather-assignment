import { computed, ref } from 'vue'
import { ICondition, IForecast, IPlace, TIndexedObject, TUnit } from '@/types'

const units = ref<TUnit>((localStorage.getItem('weather-units') as TUnit) || 'Metric')

const favorites = ref<IPlace[]>([])
const currentPlace = ref<IPlace | null>(null)
const isCurrentsFavorite = computed<boolean>(() => {
  // Add BUG: check favorite by name instead of key
  return favorites.value.some(f => f.LocalizedName === currentPlace.value?.LocalizedName)
})

const conditionsHash = ref<TIndexedObject<ICondition>>({})
const forecastsHash = ref<TIndexedObject<IForecast>>({})

export function useWeatherStore () {
  function toggleFavorite (place: IPlace) {
    const index = favorites.value.findIndex(p => p.Key === place.Key)
    if (index >= 0) {
      favorites.value.splice(index, 1)
    } else {
      favorites.value.unshift(place)
    }
  }

  function clearFavorite (place: IPlace) {
    const index = favorites.value.findIndex(p => p.Key === place.Key)
    if (index >= 0) {
      favorites.value.splice(index, 1)
    }
  }

  function toggleUnits () {
    units.value = units.value === 'Metric' ? 'Imperial' : 'Metric'
    localStorage.setItem('weather-units', units.value)
  }

  function saveCondition (key: string, condition: ICondition) {
    conditionsHash.value[key] = condition
  }

  function saveForecast (key: string, forecast: IForecast) {
    forecastsHash.value[key] = forecast
  }

  return {
    units: computed<TUnit>(() => units.value),
    conditionsHash: computed<TIndexedObject<ICondition>>(() => conditionsHash.value),
    isCurrentsFavorite: computed<boolean>(() => isCurrentsFavorite.value),
    forecastsHash: computed<TIndexedObject<IForecast>>(() => forecastsHash.value),

    toggleUnits,
    favorites,
    currentPlace,
    saveCondition,
    saveForecast,
    toggleFavorite,
    clearFavorite
  }
}
