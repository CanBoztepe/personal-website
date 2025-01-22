<script setup>
import { usePersonalInfoStore } from '../stores/PersonalInfo'

let personalInfo = usePersonalInfoStore()
</script>

<template>
  <p class="header-text">{{ personalInfo.slogan }}</p>
</template>

<style scoped>
.header-text {
  /* max-width: 550px; */
  margin-bottom: 0.3rem;
  color: var(--color-text-light-muted);
  font-size: 1rem;
}
</style>
