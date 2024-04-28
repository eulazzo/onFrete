<script setup lang="ts">
import { Icon } from '@iconify/vue'
import DarkModeSwitcher from './DarkModeSwitcher.vue'
import { useSidebarStore } from '../stores/sidebar'
const { toggleSidebar } = useSidebarStore()
import DropdownUser from './DropdownUser.vue'

import { useColorMode } from '@vueuse/core'
const colorMode = useColorMode()
</script>

<template>
  <header
    class="sticky top-0 z-40 -mb-px flex w-full border-b border-gray-200 bg-white/75 backdrop-blur
"
  >
    <div
      class="flex flex-grow items-center justify-between px-4 py-4 drop-shadow-sm md:px-6 2xl:px-11"
    >
      <div class="flex items-center gap-2 sm:gap-4">
        <button
          class="flex rounded-sm border border-zinc-200 bg-white p-1.5 shadow-sm lg:hidden"
          @click="toggleSidebar"
        >
          <Icon icon="heroicons-bars-3" class="size-6" />
        </button>

        <router-link class="block flex-shrink-0 lg:hidden" to="/">
          <img src="../assets/img/mini-logo.svg" alt="Logo" class="h-9" />
        </router-link>
      </div>

      <div class="flex items-center gap-3 sm:gap-7">
        <!-- <LanguageSwitcher /> -->
        <ul class="flex items-center gap-2 sm:gap-4">
          <li>
            <DarkModeSwitcher />
          </li>
        </ul>
        <DropdownUser />
      </div>
    </div>
  </header>
</template>
