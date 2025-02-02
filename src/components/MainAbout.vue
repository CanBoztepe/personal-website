<script setup>
import { useAboutStore } from '@/stores/About'

// Initialize the store
const aboutStore = useAboutStore()
</script>

<template>
  <!-- Use v-html to render the HTML content from the store -->
  <p v-html="aboutStore.content"></p>
</template>

<style scoped>
.header-name {
  font-weight: bold;
  font-size: 3rem;
  line-height: 1;
}
.header-title {
  font-weight: normal;
  /* color: var(--color-secondary); */
  /* font-weight: bold; */
}

::v-deep .about-link {
  color: var(--color-text-light);
  text-decoration: none;
  font-weight: bold;
}
</style>
