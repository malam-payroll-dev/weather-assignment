<template>
  <div class="flex flex-col items-center">
    <PlaceInput class="w-full md:w-[400px] mt-10" @selected="currentPlace = $event" />

    <Transition name="fade" mode="out-in" class="mt-16">
      <div v-if="loadingPlace" class="flex">
        <!-- Skeleton-->
        <div class="w-24 h-7 rounded bg-blue-400/20 mr-3" />
        <div class="w-16 h-7 rounded bg-blue-400/20" />
      </div>
      <div v-else-if="currentPlace" class="text-xl font-black uppercase tracking-widest">
        <!-- Current place -->
        {{ currentPlace.Country.LocalizedName }},
        {{ currentPlace.LocalizedName }}
        <span class="ml-4 font-normal cursor-pointer select-none" @click="toggleFavorite(currentPlace)">
          {{ isCurrentsFavorite ? '♥' : '♡' }}
        </span>
      </div>

      <div
        v-else
        class="border rounded px-5 py-3 border-red-500 bg-red-500/20 text-red-800 dark:text-red-100"
      >
        <!-- Error -->
        <p class="font-bold">Something went wrong 😥</p>
        <p class="text-sm mt-1">Please try again later, probably, tomorrow.</p>
      </div>
    </Transition>

    <Transition name="fade" mode="out-in" class="mt-8">
      <div v-if="loadingCondition || loadingPlace" class="flex">
        <!-- Skeleton-->
        <div class="w-10 h-10 rounded-full bg-blue-400/20" />
        <div class="ml-4">
          <div class="w-24 h-4 rounded bg-blue-400/20" />
          <div class="w-16 h-4 rounded bg-blue-400/20 mt-2" />
        </div>
      </div>
      <Condition v-else-if="currentCondition" :condition="currentCondition" />
    </Transition>
  </div>

  <Transition name="fade" mode="out-in" class="mt-16">
    <div
      v-if="loadingForecast || loadingPlace"
      class="flex lg:space-x-2 text-center flex-col lg:flex-row"
    >
      <!-- Skeleton-->
      <div
        v-for="i in 5"
        :key="i"
        class="flex w-full border-t lg:border-l lg:border-t-0 border-blue-100/50 dark:border-gray-700
          justify-evenly w-[200px] first-of-type:border-none w-full py-10 lg:py-0"
      >
        <div class="flex lg:flex-col items-center justify-evenly w-full lg:py-12">
          <div class="w-24 h-16 rounded-xl bg-blue-400/20 lg:mx-auto" />
          <div class="w-24 mt-4">
            <div class="w-24 h-4 rounded bg-blue-400/20" />
            <div class="w-16 h-4 rounded bg-blue-400/20 mt-2" />
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="currentForecast" class="flex flex-col lg:flex-row lg:space-x-2 text-center">
      <!-- Weather -->
      <ForecastDay
        v-for="(forecast, key) in currentForecast.DailyForecasts" :key="key"
        :forecast="forecast"
        class="border-t lg:border-t-0 lg:border-l dark:border-gray-700 border-blue-100 first-of-type:border-none w-full"
      />
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import { useWeatherStore } from '@/store'
import { accuWeatherService } from '@/services'
import PlaceInput from '@/components/PlaceInput.vue'
import Condition from '@/components/Condition.vue'
import ForecastDay from '@/components/ForecastDay.vue'
import { ICondition, IForecast } from '@/types'

const {
  units,
  currentPlace,
  forecastsHash,
  conditionsHash,
  isCurrentsFavorite,
  toggleFavorite
} = useWeatherStore()

const loadingPlace = ref(!currentPlace.value)

const loadingCondition = ref(false)
const currentCondition = ref<ICondition | null>(null)

const loadingForecast = ref(false)
const currentForecast = ref<IForecast | null>(null)

onMounted(() => {
  if (!currentPlace.value) {
    accuWeatherService.autocomplete('Tel Aviv')
      .then(res => {
        currentPlace.value = res[0]
        fetchData()
      })
      .finally(() => { loadingPlace.value = false })
  } else {
    fetchData()
  }
})

function fetchData () {
  fetchCondition()
  fetchForecast()
}

async function fetchCondition (force = false) {
  if (!currentPlace.value) return
  const cachedCondition = conditionsHash.value[currentPlace.value.Key]

  if (!force && cachedCondition) {
    currentCondition.value = cachedCondition
  } else {
    loadingCondition.value = true
    accuWeatherService.currentConditions(currentPlace.value.Key)
      .then((res) => { currentCondition.value = res })
      .finally(() => { loadingCondition.value = false })
  }
}

async function fetchForecast (force = false) {
  if (!currentPlace.value) return
  const cachedForecast = forecastsHash.value[currentPlace.value.Key]
  const forecastIsCachedMetric = cachedForecast?.DailyForecasts[0].Temperature.Minimum.UnitType === 17 // celsius
  force = force || (forecastIsCachedMetric && units.value !== 'Metric')

  if (!force && cachedForecast) {
    currentForecast.value = cachedForecast
  } else {
    loadingForecast.value = true
    accuWeatherService.forecast(currentPlace.value.Key)
      .then((res) => { currentForecast.value = res })
      .finally(() => { loadingForecast.value = false })
  }
}

watch(units, () => {
  fetchForecast(true)
})

watch(currentPlace, (value) => {
  loadingPlace.value = false
  if (value) {
    fetchData()
  }
})
</script>
