<script setup>
import ProjectsCloseButton from '@/components/ProjectsCloseButton.vue'
</script>

<template>
  <header class="projects-header">
    <nav class="projects-nav">
      <h1 class="project-select">I'm ProjectsNav (Im a dropdown)</h1>

      <ProjectsCloseButton />
    </nav>
  </header>
</template>

<style scoped>
/* .projects-header {
} */

.projects-nav {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
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
