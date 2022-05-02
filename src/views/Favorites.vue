<template>
  <div
    v-for="place in favorites" :key="place.Key"
    class="flex mt-16 sm:w-[500px] mx-auto cursor-pointer flex-col sm:flex-row"
    @click="goToPlace(place)"
  >
    <div class="w-full sm:leading-5 ml-6 sm:ml-0">
      <div class="text-lg sm:text-xl font-black uppercase tracking-widest flex-grow flex sm:block">
        <p class="truncate" :title="place.Country.LocalizedName">{{ place.Country.LocalizedName }},</p>
        <p class="truncate" :title="place.LocalizedName">{{ place.LocalizedName }}</p>
      </div>

      <p
        class="sm:text-xs text-blue-600 hover:text-blue-400 cursor-pointer select-none transition-colors duration-200
          dark:text-blue-400 dark:hover:text-blue-300"
        @click.stop="toggleFavorite(place)"
      >
        Remove from Favorites
      </p>
    </div>

    <Condition :condition="conditionsHash[place.Key]" class="flex items-center ml-8 mt-5 sm:mt-0" />
  </div>
  <div v-if="!favorites.length" class="h-full w-full flex items-center justify-center pt-4">
    <div
      class="rounded p-6 bg-gray-100
          dark:bg-blue-500/10 dark:border-blue-400"
    >
      <!-- Error -->
      <p class="font-bold">You haven't any favorite place saved</p>
      <p class="text-sm mt-1">Go to Home page and save anyone</p>
      <button
        class="mt-6"
      >
        Go to Home
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Condition from '@/components/Condition.vue'
import { useRouter } from 'vue-router'
import { useWeatherStore } from '@/store'
import { routeNames } from '@/router'

const router = useRouter()
const {
  favorites,
  conditionsHash,
  currentPlace,
  toggleFavorite
} = useWeatherStore()

function goToPlace (place: any) {
  currentPlace.value = place
  router.push({ name: routeNames.home })
}
</script>
