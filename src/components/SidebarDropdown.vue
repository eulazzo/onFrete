<script setup lang="ts">
import { ref} from 'vue'

import { useSidebarStore } from '../stores/sidebar'
const sidebarStore = useSidebarStore()

const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
  page: {
    type: String,
    required: true,
  },
})

const items = ref(props.items)

function handleItemClick(index: number) {
  const pageName =
    sidebarStore.selected === props.items[index].label ? '' : props.items[index].label
  sidebarStore.selected = pageName
}
</script>

<template>
  <ul class="mb-5 mt-4 flex flex-col gap-2.5 pl-6">
    <template v-for="(childItem, index) in items" :key="index">
      <li>
        <router-link
          :to="childItem.route"
          class="group relative flex items-center 
          gap-2.5 rounded-md px-4 font-medium text-zinc-400 
          duration-300 ease-in-out hover:text-white"
          :class="{
            '!text-white': childItem.label === sidebarStore.selected,
          }"
          @click="handleItemClick(Number(index))"
        >
          {{ childItem.label }}
        </router-link>
      </li>
    </template>
  </ul>
</template>
