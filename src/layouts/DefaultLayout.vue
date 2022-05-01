<template>
  <div class="flex flex-col min-h-full overflow-hidden dark:text-white">
    <header class="p-4 border-b border-blue-900/20 dark:bg-gray-700 capitalize flex items-center">
      <div class="w-32 mr-10">
        <router-link :to="{ name: $routeNames.home }">
          <img
            class="filter hue-rotate-180 invert dark:hue-rotate-0 dark:invert-0"
            src="https://www.accuweather.com/images/logos/accuweather.svg"
            alt="Logo"
          >
        </router-link>
      </div>

      <div class="ml-auto space-x-6 mr-10">
        <router-link class="router-link" :to="{ name: $routeNames.home }">Home</router-link>
        <router-link class="router-link relative" :to="{ name: $routeNames.favorites }">
          <span>Favorites</span>
          <span
            v-if="favorites.length"
            class="rounded-full py-1 px-[6px] text-[9px] leading-none font-bold absolute left-[100%] -top-0.5 ml-1
              bg-gray-600 text-white dark:text-gray-900 dark:bg-gray-200"
          >{{ favorites.length }}
          </span>
        </router-link>
      </div>
    </header>

    <div class="flex-grow p-4 dark:bg-gray-800">
      <router-view />
    </div>

    <footer class="p-4 dark:bg-gray-900 bg-gray-800 text-white flex items-center">
      <span class="font-light text-xs">@obuhhh, 2022</span>
      <UnitSwitcher class="ml-auto" />
      <ThemeSwitcher class="ml-12" />
    </footer>
  </div>
</template>

<script lang="ts" setup>
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'
import UnitSwitcher from '@/components/UnitSwitcher.vue'
import { useWeatherStore } from '@/store'

const { favorites } = useWeatherStore()
</script>

<style scoped lang="scss">
.router-link {
  @apply font-medium tracking-widest uppercase text-xs transition-colors duration-200;
}

.router-link-exact-active {
  @apply underline underline-offset-4 text-blue-500 dark:text-blue-400;
}
</style>
