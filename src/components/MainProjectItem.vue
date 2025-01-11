<script setup>
import { defineProps, computed } from 'vue'
import MainProjectButtons from './MainProjectButtons.vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
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

const imgAlt = computed(() => {
  return `Thumbnail of ${props.name} project`
})
</script>

<template>
  <article class="project-item">
    <img class="project-img" :src="imgSrc" :alt="imgAlt" loading="lazy" />
    <div class="project-main">
      <h3 class="project-name">{{ name }}</h3>

      <MainProjectButtons
        :demoLink="demoLink"
        :githubLink="githubLink"
        :codepenLink="codepenLink"
      ></MainProjectButtons>
    </div>
  </article>
</template>

<style scoped>
.project-item {
  display: flex;
  gap: 1.5rem;
  height: 120px;
}

.project-img {
  max-height: 70%;
  width: auto;
  border: 2px solid var(--color-text-light-muted);
  border-radius: 0.5rem;
  margin-bottom: -12px;
}

.project-main {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}
</style>
