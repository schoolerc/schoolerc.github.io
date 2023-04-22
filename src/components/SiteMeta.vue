<script setup lang="ts">
const props = defineProps<{
  description?: string
  keywords?: Array<string>,
  title: string,
}>();
</script>

<template>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
  <meta charset="UTF-8"/>
  <meta name="author" content="Charles O Schooler Jr">
  <meta v-if="description !== undefined" name="description" :content="description">
  <meta v-if="keywords !== undefined" name="keywords" :content="keywords.join(', ')">
  <title>{{title}}</title>
</template>