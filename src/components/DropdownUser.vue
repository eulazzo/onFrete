<script setup lang="ts">
import { ref,reactive} from 'vue'

const target = ref(null)
const dropdownOpen = ref(false)
import { Icon } from '@iconify/vue'
// const currentUser = useAuthUser()
const currentUser = {
  name: 'lazaro',
  email: 'lazaro@gmail.com',
}

// onClickOutside(target, () => {
//   dropdownOpen.value = false
// })

// const { logout } = useAuth()

const form = reactive({
  pending: false,
})

async function onLogoutClick() {
  try {
    form.pending = true

    // await logout()

    // await navigateTo('/login')
  } catch (error) {
    console.error(error)
  } finally {
    form.pending = false
  }
}
</script>

<template>
  <div ref="target" class="relative">
    <router-link
      class="flex items-center gap-2"
      to="/"
      @click.prevent="dropdownOpen = !dropdownOpen"
    >
      <span class="hidden text-right lg:block">
        <span class="block text-sm font-medium text-black">{{ currentUser?.name }}</span>
        <span class="block text-xs font-medium">{{ currentUser?.email }}</span>
      </span>
      <Icon icon="heroicons-user" class="size-8 align-middle" />
      <Icon
        icon="heroicons-chevron-down"
        class="hidden sm:block"
        :class="dropdownOpen && 'rotate-180'"
      />
    </router-link>

    <div
      v-show="dropdownOpen"
      class="absolute right-0 mt-4 flex w-64 flex-col rounded-sm border border-zinc-200 bg-white shadow-md"
    >
      <ul class="flex flex-col gap-5 border-b border-zinc-200 px-6 py-7">
        <li>
          <button
            class="hover:text-primary flex items-center gap-3 text-sm font-medium duration-300 ease-in-out lg:text-base"
            :disabled="form.pending"
            @click="onLogoutClick"
          >
            <Icon class="size-6" icon="heroicons-arrow-left-start-on-rectangle" />
            Sair
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
