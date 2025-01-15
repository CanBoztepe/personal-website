<script setup>
import MainProjectItem from '@/components/MainProjectItem.vue'
import PersonalWebsite from '@/assets/images/personal-website.png'

// Certification Projects
const coolProjects = [
  {
    id: 1,
    name: 'canboztepe.com',
    imgSrc: PersonalWebsite,
    demoLink: '',
    githubLink: 'https://github.com/CanBoztepe/personal-website',
    codepenLink: '',
  },
]
</script>

<template>
  <div class="projects-list">
    <MainProjectItem
      v-for="project in coolProjects"
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
  flex-direction: column-reverse;
  gap: 1rem;
}
</style>
