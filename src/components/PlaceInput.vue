<template>
  <div class="relative">
    <input
      ref="inputRef"
      v-model="query"
      class="peer px-3 py-2 border dark:border-gray-700 dark:bg-gray-800 rounded w-full
        focus:outline-none focus:shadow-xl focus:border-blue-300 focus:dark:border-blue-300 outline-none"
      :class="{ 'focus:rounded-b-none': places.length || loading }"
      @keypress="onKeypress"
    >
    <div
      v-if="places.length || loading"
      class="invisible peer-focus:visible hover:visible peer-focus:rounded-t-none max-h-0 peer-focus:max-h-[300px]
        absolute top-[100%] w-full shadow-xl bg-white dark:bg-gray-700 rounded-b shadow-blue-900/10 overflow-y-auto
        border-x peer-focus:border-b peer-focus:border-blue-300 transition-all delay-100"
    >
      <p v-if="loading" class="text-center py-4">
        Loading...
      </p>
      <template v-else>
        <p
          v-for="place in places"
          :key="place.Key"
          class="px-3 py-2 hover:bg-gray-100 hover:dark:bg-gray-600 cursor-pointer last-of-type:rounded-b"
          @click.stop="onSelectPlace(place)"
        >
          {{ place.LocalizedName }}
        </p>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue'
import { accuWeatherService } from '@/services'
import { useWeatherStore } from '@/store'
import { useDebounce } from '@/composables/useDebounce'
import { IPlace } from '@/types'
const { currentPlace, clearFavorite } = useWeatherStore()

const $emit = defineEmits(['selected'])

const inputRef = ref<HTMLInputElement>()
const query = ref(currentPlace.value?.LocalizedName || 'Tel Aviv')
const loading = ref(false)
const places = ref<IPlace[]>([])

function onSelectPlace (place: IPlace) {
  inputRef.value?.focus()
  $emit('selected', place)
  query.value = place.LocalizedName
  inputRef.value?.blur()
  places.value = []

  // Add BUG: clear favorites every time a place is selected again
  clearFavorite(place)
}

function fetchPlaces () {
  loading.value = true
  return accuWeatherService.autocomplete(query.value)
    .then((res) => { places.value = res })
    .finally(() => { loading.value = false })
}
const debouncedFetchPlaces = useDebounce(fetchPlaces, 500)

function onKeypress (e:KeyboardEvent) {
  const str = String.fromCharCode(!e.charCode ? e.which : e.charCode)
  if (/^[a-zA-Z0-9 ]+$/.test(str)) {
    debouncedFetchPlaces()
    return true
  }
  e.preventDefault()
  return false
}
</script>
