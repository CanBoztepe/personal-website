<script setup>
import { defineProps, computed } from 'vue'

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
  },
  githubLink: {
    type: String,
  },
  codepenLink: {
    type: String,
  },
})

const imgAlt = computed(() => {
  return `Thumbnail of ${props.name} project`
})
</script>

<template>
  <a target="_blank" rel="noopener noreferrer" class="router-item">
    <!-- <RouterLink class="router-item" :to="demoLink"> -->
    <article class="project-item">
      <div class="image-wrapper">
        <img class="project-img" :src="imgSrc" :alt="imgAlt" loading="lazy" />
      </div>

      <div class="project-main">
        <!-- <LinkItem>{{ name }}</LinkItem> -->

        <h3 class="project-name">{{ name }}</h3>

        <IconMdiArrowTopRight class="arrow-icon" />
        <!-- <MainProjectButtons
          :demoLink="demoLink"
          :githubLink="githubLink"
          :codepenLink="codepenLink"
        ></MainProjectButtons> -->
      </div>
    </article>
  </a>
  <!-- </RouterLink> -->
</template>

<style scoped>
.router-item {
  text-decoration: none;
  color: var(--color-text-light-muted);
  cursor: pointer;
  max-width: 500px;
  padding: 1rem;
  padding-left: 0;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  /* border: 1px solid var(--color-primary); */
}

.router-item:hover,
.router-item:focus {
  background-color: rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.project-item {
  display: flex;
  gap: 1rem;
}

.image-wrapper {
  /* border-radius: 0.5rem; */
  aspect-ratio: 2 / 1;
  flex: 1;
}

.project-img {
  width: 100%;
  height: auto;
  display: block;
  border: 2px solid var(--color-text-light-muted);
  border-radius: 0.5rem;
  transition: border-color 0.3s ease;
}

.router-item:hover .project-img,
.router-item:hover .project-name,
.router-item:hover .arrow-icon,
.router-item:focus .project-img,
.router-item:focus .project-name,
.router-item:focus .arrow-icon {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.project-main {
  height: 100%;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  /* gap: 1rem; */
  flex: 2;
}

.project-name {
  transition: color 0.3s ease;
  line-height: 1;
}

.arrow-icon {
  margin-left: 0.2rem;
  transform: translate(-4px, 4px);
  transition: transform 0.3s ease;
}

.router-item:hover .arrow-icon,
.router-item:focus .arrow-icon {
  transform: translate(0px, 0px);
}

/* Responsive */
@media only screen and (max-width: 1024px) {
}
@media only screen and (max-width: 768px) {
}
@media only screen and (max-width: 500px) {
  .router-item {
    max-width: 95vw;
  }

  .project-item {
    gap: 0.8rem;
  }
}
</style>
