<script setup>
import ProjectsNav from '@/components/ProjectsNav.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <section class="projects-wrapper">
    <ProjectsNav />

    <!-- Project Demo -->
    <RouterView name="overlay" />
  </section>
</template>

<style scoped>
.projects-wrapper {
  border: 2px solid pink;
  background-color: rgba(255, 0, 0, 0.2);
  position: absolute;
  top: 0;
  z-index: 999;
}
</style>
