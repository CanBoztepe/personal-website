<script setup>
import { defineProps } from 'vue'
import LinkItem from './LinkItem.vue'

defineProps({
  demoLink: {
    type: String,
    required: true,
  },
  githubLink: {
    type: String,
    required: true,
  },
  codepenLink: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <p>
    View Source Code on
    <LinkItem :href="githubLink">Github (Composition API)</LinkItem> or
    <LinkItem :href="codepenLink">Codepen (Options API)</LinkItem>
  </p>
</template>

<style scoped>
/* color: var(--color-text-light); */
</style>
