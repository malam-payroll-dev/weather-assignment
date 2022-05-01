<template>
  <div class="relative w-[70px] h-6 cursor-pointer select-none" @click="changeTheme">
    <p class="uppercase text-[9px] leading-none font-bold text-gray-400 text-right">Theme</p>
    <Transition name="absolute-fade">
      <p :key="modeIndex" class="text-right w-full uppercase text-xs font-bold">
        {{ themeMode.label }}
      </p>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { useDarkMode } from '@/composables/useDarkMode'
import { computed, ref } from 'vue'

const { turnDark, turnLight, turnSystemTheme } = useDarkMode()

const modes = [
  { label: 'System', action: turnSystemTheme },
  { label: 'Dark', action: turnDark },
  { label: 'Light', action: turnLight }
]
const modeIndex = ref(0)

const themeMode = computed(() => modes[modeIndex.value])

function changeTheme () {
  modeIndex.value = (modeIndex.value + 1) % modes.length
  themeMode.value.action()
}

</script>

<style scoped>

</style>
