<script setup>
import { RouterLink } from 'vue-router'
import { defineProps } from 'vue'
import LinkItem from './LinkItem.vue'

defineProps({
  demoLink: {
    type: String,
    required: true,
  },
  githubLink: {
    type: String,
    required: true,
  },
  codepenLink: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="main-project-buttons">
    <RouterLink class="demo-button" :to="demoLink">DEMO</RouterLink>

    <div class="src-links-wrapper">
      <LinkItem :href="githubLink" isGrey class="project-src-link">View code on Github</LinkItem>

      <LinkItem :href="codepenLink" isGrey class="project-src-link">View code on Codepen</LinkItem>
    </div>
  </div>
</template>

<style scoped>
.main-project-buttons {
  display: flex;
  flex-direction: column;
}

.demo-button {
  display: inline-block;
  color: var(--color-primary);
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  border: 2px solid var(--color-primary);
  border-radius: 0.8rem;
  padding: 0.5rem 1.2rem;
  transition: all 0.3s ease;
  width: 180px;
}

.src-links-wrapper {
  display: flex;
  flex-direction: column;
}

.project-src-link {
  font-size: 0.9rem;
}

.demo-button:hover,
.demo-button:focus {
  box-shadow: 0 0px 12px #ff471a;
}
</style>
