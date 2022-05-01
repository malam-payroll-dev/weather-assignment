<template>
  <router-view />
</template>

<script lang="ts" setup>
import { useDarkMode } from '@/composables/useDarkMode'

useDarkMode().updateTheme()
</script>
