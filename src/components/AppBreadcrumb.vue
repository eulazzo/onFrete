<script setup lang="ts">
const props = defineProps<{ pageTitle: string }>()
</script>

<template>
  <div class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
    <h2 class="text-2xl font-semibold text-black">
      {{ props.pageTitle }}
    </h2>

    <nav>
      <ol class="flex items-center gap-2">
        <li>
          <router-link class="font-medium" to="/">Dashboard /</router-link>
        </li>
        <li class="primary font-medium">{{ props.pageTitle }}</li>
      </ol>
    </nav>
  </div>
</template>
