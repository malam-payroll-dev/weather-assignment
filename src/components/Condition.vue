<template>
  <div class="flex items-center">
    <div class="w-12 h-12 flex-shrink-0">
      <img :src="icon">
    </div>
    <div class="ml-5">
      <p class="text-[32px] font-extralight uppercase tracking-widest mt-1">
        {{ condition.WeatherText }}
      </p>
      <p class="font-light text-gray-500 dark:text-gray-300 mt-1">
        {{ condition.Temperature[units].Value }}°
        {{ condition.Temperature[units].Unit }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import { useWeatherStore } from '@/store'
import { useAccuWeatherIcon } from '@/composables/useAccuWeatherIcon'
import { ICondition } from '@/types'

const { units } = useWeatherStore()

const props = defineProps<{
  condition: ICondition
}>()

const icon = computed(() => useAccuWeatherIcon(props.condition.WeatherIcon))
</script>

<style scoped>

</style>
