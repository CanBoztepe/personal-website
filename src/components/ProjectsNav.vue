<script setup>
import ProjectsCloseButton from '@/components/ProjectsCloseButton.vue'
import LinkItem from './LinkItem.vue'
</script>

<template>
  <header class="projects-header">
    <nav class="projects-nav">
      <h1 class="project-select">I'm ProjectsNav (Im a dropdown)</h1>

      <div class="project-links-wrapper">
        <LinkItem href="/resume.pdf" isProjectLink>View code in Github (Composition API)</LinkItem>
        <LinkItem href="/resume.pdf" isProjectLink>View code in CodePen (Options API)</LinkItem>
      </div>

      <ProjectsCloseButton />
    </nav>
  </header>
</template>

<style scoped>
.project-links-wrapper {
  display: flex;
  flex-direction: column;
}

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
