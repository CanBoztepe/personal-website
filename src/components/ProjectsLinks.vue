<script setup>
import { defineProps } from 'vue'

defineProps({
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
  <div class="project-links-wrapper">
    <p>
      View code in
      <a :href="githubLink" target="_blank" rel="noopener noreferrer">Github (Composition API)</a>
      or
      <a :href="codepenLink" target="_blank" rel="noopener noreferrer">CodePen (Options API)</a>
    </p>
  </div>
</template>

<style scoped>
.project-links-wrapper {
  display: flex;
  flex-direction: column;
}
/* Responsive */
@media only screen and (max-width: 1024px) {
}

@media only screen and (max-width: 768px) {
}

@media only screen and (max-width: 500px) {
}
</style>
