<script setup>
import MainCertProjectItem from '@/components/MainCertProjectItem.vue'
import { useCertProjectsStore } from '../stores/CertProjects'

let certProjects = useCertProjectsStore()
</script>

<template>
  <div class="projects-list">
    <MainCertProjectItem
      v-for="project in certProjects.projects"
      :key="project.id"
      :name="project.name"
      :imgSrc="project.imgSrc"
      :demoLink="project.demoLink"
      :githubLink="project.githubLink"
      :codepenLink="project.codepenLink"
      :href="project.codepenLink"
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
