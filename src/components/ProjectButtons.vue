<script setup>
import LinkItem from './LinkItem.vue'
import { useCertProjectsStore } from '../stores/CertProjects'

let CertProjectsStore = useCertProjectsStore()
</script>

<template>
  <p class="buttons-p">
    View Source Code on
    <LinkItem :href="CertProjectsStore.activeProject.githubLink" isResponsive isProjectLink isBold
      >Github (Composition API)</LinkItem
    >
    or on
    <LinkItem :href="CertProjectsStore.activeProject.codepenLink" isResponsive isProjectLink isBold
      >Codepen (Options API)</LinkItem
    >
  </p>
</template>

<style scoped>
.buttons-p {
  padding: 0.5rem;
}
</style>
