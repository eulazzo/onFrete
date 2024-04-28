<script setup lang="ts">
// const { locale } = useI18n()
import SidebarDropdown from './SidebarDropdown.vue'
import { ref} from 'vue'

import { Icon } from '@iconify/vue'
const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
  item: {
    type: Object,
    required: true,
  },
})

const showItem = ref(true)

// const currentUser = useAuthUser()
const currentUser = ref(null)
if (props.item.roles) {
  if (currentUser === null) showItem.value = false
  // const userRoles = currentUser.value?.roles || []
  const userRoles = ['admin']
  showItem.value = userRoles.some((i) => props.item.roles.includes(i))
}

const currentPage = 'home'
// const currentPage = useRoute().name

interface SidebarItem {
  label: string
}
import { useSidebarStore } from '../stores/sidebar'
const sidebarStore = useSidebarStore()

function handleItemClick() {
  const pageName = sidebarStore.page === props.item.label ? '' : props.item.label
  sidebarStore.page = pageName

  if (props.item.children) {
    return props.item.children.some((child: SidebarItem) => sidebarStore.selected === child.label)
  }
}

const forceRender = ref(0)

// watch(
//   () => locale.value,
//   () => {
//     forceRender.value += 1
//   }
// )
</script>

<template>
  <li v-if="showItem">
    <router-link
      :to="item.route ?? '/'"
      class="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-zinc-300 duration-300 ease-in-out hover:bg-zinc-700 dark:hover:bg-zinc-700"
      :class="{
        'bg-zinc-700 dark:bg-zinc-700': sidebarStore.page === item.label,
        'text-gray-50 opacity-35': !item.hasAccess,
      }"
      @click.prevent="handleItemClick"
    >
      <Icon :class="{ 'text-gray-50 opacity-35': !item.hasAccess }" :icon="item.icon" />

      <span :class="{ 'text-gray-50 opacity-35': !item.hasAccess }">{{ item.label }}</span>
      <Icon
        v-if="item.children"
        icon="heroicons-chevron-down"
        class="absolute right-4 top-1/2 -translate-y-1/2"
        :class="{ 'rotate-180': sidebarStore.page === item.label }"
      />
    </router-link>
    <div
      v-if="item.children"
      v-show="sidebarStore.page === item.label"
      class="translate transform overflow-hidden"
    >
      <SidebarDropdown :items="item.children" :current-page="currentPage" :page="item.label" />
    </div>
  </li>
</template>
