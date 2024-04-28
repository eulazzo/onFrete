<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import {computed} from 'vue'
const colorMode = useColorMode()
import { Icon } from '@iconify/vue'

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})
</script>

<template>
  <ClientOnly>
    <Icon
      :icon="isDark ? 'heroicons-moon-20-solid' : 'heroicons-sun-20-solid'"
      color="gray"
      @click="isDark = !isDark"
    />
    <template #fallback>
      <div class="size-8" />
    </template>
  </ClientOnly>
</template>
