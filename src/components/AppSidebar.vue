<script setup lang="ts">
import {ref,computed} from 'vue'
const target = ref(null)
import { useSidebarStore } from '../stores/sidebar'
const sidebarStore = useSidebarStore()
const openNoAcessModal = ref(false)
import SidebarItem from './SidebarItem.vue'
import { Icon } from '@iconify/vue'
// import { useI18n } from 'vue-i18n'
// const { t } = useI18n()

// onClickOutside(target, () => {
//   sidebarStore.isSidebarOpen = false
// })

//https://icon-sets.iconify.design/mdi-light/
const menuGroups = computed(() => [
  {
    name: 'MENU',
    menuItems: [
      {
        icon: 'heroicons-tv',
        label: 'Painel de Controle',
        route: '/',
        hasAccess: true,
      },
      {
        icon: 'heroicons-user-group',
        label: 'Ordens de Serviço',
        roles: ['admin'],
        hasAccess: true,
        children: [
          { label: 'Pessoas autorizadas', route: '/authorized-people' },
          { label: 'Histórico de acesso', route: '/authorized-people/history' },
        ],
      },
      {
        icon: 'heroicons-queue-list',
        label: 'Check-List de Tarefas',
        route: '/authorized-people/history',
        roles: ['admin'],
        hasAccess: true,
      },
      {
        icon: 'heroicons-truck',
        label: 'Relatório em PDF',
        route: '/vehicles',
        hasAccess: true,
      },
      {
        icon: 'heroicons-user-plus',
        label: 'Histórico de Manutenção',
        route: '/',
      },
      {
        icon: 'heroicons-chevron-double-down',
        label: 'credentialing',
        route: '/',
      },
      {
        icon: 'heroicons-check',
        label: 'access_aproval',
        route: '/',
      },
      {
        icon: 'heroicons-wrench-screwdriver',
        label: 'credentialing_profiles',
        route: '/',
      },
      {
        icon: 'heroicons-calendar',
        label: 'Histórico e Acessos',
        route: '/access-history',
        hasAccess: true,
      },
      {
        icon: 'heroicons-tv',
        label: 'device_configuration',
        route: '/',
      },
       
      
      {
        icon: 'heroicons-users',
        label: 'users',
        roles: ['admin'],
        hasAccess: true,
        children: [
          { label: 'list_users', route: '/users' },
          { label: 'add_user', route: '/users/form' },
        ],
      },
    ],
  },
])

const hasNoPermissionHandler = (menuItem: any) => {
  const hasNoAccess = !menuItem.hasAccess

  if (hasNoAccess) openNoAcessModal.value = true
}
</script>

<template>
  <aside
    ref="target"
    class="absolute left-0 top-0 z-50 flex h-screen w-80 flex-col overflow-y-hidden border-r
     border-zinc-900  bg-primary-base shadow duration-300 ease-linear lg:static lg:translate-x-0"
    :class="{
      'translate-x-0': sidebarStore.isSidebarOpen,
      '-translate-x-full': !sidebarStore.isSidebarOpen,
    }"
  >
    <div class="flex items-center justify-between gap-2 px-6 py-6">
      <router-link to="/">
        <img src="../assets/img/logo.svg" alt="Logo"   />
      </router-link>

      <button class="block text-zinc-300 lg:hidden" @click="sidebarStore.isSidebarOpen = false">
        <Icon icon="heroicons-arrow-left" />
      </button>
    </div>

    <div class="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
      <nav class="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
        <div v-for="menuGroup in menuGroups" :key="menuGroup.name">
          <h3 class="mb-4 ml-4 text-sm font-medium text-zinc-400">
            {{ menuGroup.name }}
          </h3>

          <ul class="mb-6 flex flex-col gap-1.5">
            <SidebarItem
              v-for="(menuItem, index) in menuGroup.menuItems"
              :key="index"
              :index="index"
              :item="menuItem"
              @click="hasNoPermissionHandler(menuItem)"
            />
          </ul>
        </div>
      </nav>
    </div>

    <!-- <Teleport to="body">
      <UModal v-model="openNoAcessModal">
        <UCard :ui="{ header: { background: 'bg-red-600' } }">
          <template #header>
            <h3 class="font-bold text-white">{{ $t("attention") }}</h3>
          </template>
          <p class="bold">{{ $t("permission_denied") }}</p>
          <template #footer>
            <UButton
              color="red"
              :label="$t('btn_close')"
              @click="openNoAcessModal = false"
            />
          </template>
        </UCard>
      </UModal>
    </Teleport> -->
  </aside>
</template>


 