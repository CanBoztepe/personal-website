<script setup>
import MainCoolProjectItem from '@/components/MainCoolProjectItem.vue'
import { useCoolProjectsStore } from '../stores/CoolProjects'

let coolProjects = useCoolProjectsStore()
</script>

<template>
  <div class="projects-list">
    <MainCoolProjectItem
      v-for="project in coolProjects.projects"
      :key="project.id"
      :name="project.name"
      :imgSrc="project.imgSrc"
      :demoLink="project.demoLink"
      :githubLink="project.githubLink"
      :codepenLink="project.codepenLink"
      :href="project.githubLink"
    />
  </div>
</template>

<style scoped>
.projects-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
