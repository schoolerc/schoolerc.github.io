<script setup lang="ts">
import ContentPreviewCard from "./ContentPreviewCard.vue";
import type {CollectionEntry} from "astro:content";
import {onMounted} from "vue";

const props = withDefaults(defineProps<{
  contentType: string,
  contentlets: Array<CollectionEntry<any>>
  titleKey?: string,
  descriptionKey?: string
}>(), {titleKey: "title", descriptionKey: "description"});

onMounted(() => {
})
</script>

<template>
  <div class="grid gap-2">
    <ContentPreviewCard v-for="c in contentlets" :title="c.data[titleKey]" :description="c.data[descriptionKey]" :slug="c.slug" :content-type="contentType"/>
  </div>
</template>

<style scoped>
div {
  grid-template-columns: repeat(auto-fit, minmax(48ch, 1fr));
}
</style>