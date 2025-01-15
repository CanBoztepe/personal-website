<script setup>
import { defineProps } from 'vue'
import LinkItem from './LinkItem.vue'

defineProps({
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
  <p class="buttons-p">
    View Source Code on
    <LinkItem :href="githubLink" isResponsive isProjectLink isBold
      >Github (Composition API)</LinkItem
    >
    or
    <LinkItem :href="codepenLink" isResponsive isProjectLink isBold>Codepen (Options API)</LinkItem>
  </p>
</template>

<style scoped>
.buttons-p {
  padding: 0.5rem;
}
</style>
