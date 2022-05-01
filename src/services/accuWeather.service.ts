import { useWeatherStore } from '@/store'
import { $axios } from '@/services'
import { ICondition, IForecast, IPlace } from '@/types'

const { saveCondition, saveForecast, units } = useWeatherStore()

class AccuWeatherService {
  async autocomplete (q: string): Promise<IPlace[]> {
    return $axios.get<void, IPlace[]>('/locations/v1/cities/autocomplete', { params: { q } })

    // return new Promise<IPlace[]>(resolve => {
    //   setTimeout(resolve, 1500, mock.autocomplete)
    // })
  }

  async currentConditions (key: string): Promise<ICondition> {
    return $axios.get<void, ICondition[]>(`/currentconditions/v1/${key}`, {
      params: {
        details: true,
        language: 'en-us'
      }
    }).then(res => {
      saveCondition(key, res[0])
      return res[0]
    })

    // return new Promise<ICondition>(resolve => {
    //   setTimeout(resolve, 1500, (mock.currentConditions as TIndexedObject)[key][0])
    // }).then(res => {
    //   saveCondition(key, res)
    //   return res
    // })
  }

  async forecast (key: string): Promise<IForecast> {
    return $axios.get<void, IForecast>(`/forecasts/v1/daily/5day/${key}`, {
      params: {
        metric: units.value === 'Metric',
        details: true
      }
    }).then(res => {
      saveForecast(key, res)
      return res
    })

    // return new Promise<IForecast>(resolve => {
    //   setTimeout(resolve, 1500, (mock.forecast as TIndexedObject)[key])
    // }).then(res => {
    //   saveForecast(key, res)
    //   return res
    // })
  }
}

export const accuWeatherService = new AccuWeatherService()
