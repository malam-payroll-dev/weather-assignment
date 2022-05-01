<template>
  <div class="flex-1 flex lg:flex-col items-center py-10 rounded justify-evenly w-[200px]">
    <div>
      <p class="text-lg font-black text-gray-600 dark:text-gray-300">{{ date(forecast.Date) }}</p>

      <p class="text-xs font-medium mt-1">
        <span class="text-blue-600 dark:text-blue-500">↓</span>
        {{ forecast.Temperature.Minimum.Value }}° {{ forecast.Temperature.Minimum.Unit }}

        <span class="text-red-600 dark:text-orange-500 ml-2">↑</span>
        {{ forecast.Temperature.Maximum.Value }}°  {{ forecast.Temperature.Maximum.Unit }}
      </p>
    </div>

    <div
      class="leading-3 text-[10px] text-gray-600 dark:text-blue-200 lg:mt-5 lg:mr-5
        flex flex-col md:flex-row lg:flex-col"
    >
      <div class="flex justify-center items-center">
        <img class="w-8 h-8" :src="useAccuWeatherIcon(forecast.Day.Icon)" :alt="forecast.Day.IconPhrase">
        <p class="ml-3 w-12 text-left md:mr-20 lg:mr-0 lg:w-12">{{ forecast.Day.IconPhrase }}</p>
      </div>

      <div class="flex justify-center items-center mt-2">
        <img class="w-8 h-8" :src="useAccuWeatherIcon(forecast.Night.Icon)" :alt="forecast.Night.IconPhrase">
        <p class="ml-3 w-12 text-left md:mr-20 lg:mr-0 lg:w-12">{{ forecast.Night.IconPhrase }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { filters } from '@/core/filters'
import { defineProps } from 'vue'
import { useAccuWeatherIcon } from '@/composables/useAccuWeatherIcon'
import { IDailyForecast } from '@/types'
const date = filters.date

defineProps<{
  forecast: IDailyForecast
}>()
</script>
