<template>
  <div class="relative w-[70px] h-6 cursor-pointer select-none" @click="toggleUnits">
    <p class="uppercase text-[9px] leading-none font-bold text-gray-400 text-right">Units</p>
    <Transition name="absolute-fade">
      <p :key="units" class="text-right w-full uppercase text-xs font-bold">
        {{ units }}
      </p>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { useWeatherStore } from '@/store'

const { units, toggleUnits } = useWeatherStore()
</script>
