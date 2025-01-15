<script setup>
import ProjectsCloseButton from '@/components/ProjectsCloseButton.vue'
import ProjectsDropdownNav from '@/components/ProjectsDropdownNav.vue'
import { defineEmits } from 'vue'

const emit = defineEmits(['projectLinks'])

// Emit project links to ProjectsView.vue
function handleChildEmit(projectLinks) {
  emit('projectLinks', projectLinks)
  console.log(`ProjectsNav emitted: ${projectLinks}`)
}
</script>

<template>
  <header class="projects-header">
    <nav class="projects-nav">
      <ProjectsDropdownNav @projectLinks="handleChildEmit" />

      <ProjectsCloseButton />
    </nav>
  </header>
</template>

<style scoped>
.projects-nav {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  gap: 0.5rem;
}

.project-select {
  border: 2px solid black;
  padding: 0.5rem;
}

.close-button {
  border: 2px solid black;
  aspect-ratio: 1 / 1;
}
</style>
