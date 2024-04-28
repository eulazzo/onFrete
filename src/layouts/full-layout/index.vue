<script lang="ts" setup>
import AppHeader from '../../components/AppHeader.vue'
import AppSidebar from '../../components/AppSidebar.vue'
</script>

<template>
  <div>
    <div class="flex h-screen overflow-hidden">
      <AppSidebar />

      <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <AppHeader />

        <main>
          <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            <RouterView />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
