<script setup>
import ProjectsCloseButton from '@/components/ProjectsCloseButton.vue'
import ProjectsDropdownNav from '@/components/ProjectsDropdownNav.vue'
</script>

<template>
  <header class="projects-header">
    <nav class="projects-nav">
      <ProjectsDropdownNav />

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
