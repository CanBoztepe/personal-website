<script setup></script>

<template>
  <div class="projects-nav">
    <h1 class="project-select">I'm ProjectsNav (Im a dropdown)</h1>
    <button class="close-button">x</button>
  </div>
</template>

<style scoped>
.projects-nav {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.5rem;
  width: 100%;
  border: 2px solid grey;
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
