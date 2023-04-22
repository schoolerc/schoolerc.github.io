<script setup lang="ts">
const props = defineProps<{
  contentType: string
  description: string,
  title: string,
  slug: string
}>();
</script>

<template>
  <div class="border-0 box-border rounded-none drop-shadow-none sm:drop-shadow-sm sm:border-2 border-gray-300 sm:rounded sm:p-2 flex flex-col bg-white sm:hover:drop-shadow-lg">
    <a :href="slug" class="w-100 block px-2">
      <h3 class="text-lg">{{ title }}</h3>
      <div class="h-0 my-2 w-100 border border-gray-300"></div>
      <p>{{ description }}</p>
    </a>
  </div>
</template>

<style scoped>
</style>