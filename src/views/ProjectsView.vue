<script setup>
import ProjectsNav from '@/components/ProjectsNav.vue'
import ProjectButtons from '@/components/ProjectButtons.vue'
import { RouterView, useRouter } from 'vue-router'
import { ref } from 'vue'

// switch to pinia, the dropdown should mutate state
// or maybe ProjectButtons.vue can handle its own links from state
const buttonLinks = ref({})

// Get the router instance
const router = useRouter()

function closeOverlay() {
  router.push({ name: 'home' })
}

function handleProjectsNavEmit(obj) {
  console.log(obj)
  buttonLinks.value = obj
}
</script>

<template>
  <section class="projects-overlay fade-in" @click.self="closeOverlay">
    <section class="projects-content">
      <ProjectsNav @projectLinks="handleProjectsNavEmit" />

      <!-- Project Demo -->
      <section class="project-demo">
        <RouterView name="overlay" />
      </section>

      <footer>
        <ProjectButtons
          :githubLink="buttonLinks.githubLink"
          :codepenLink="buttonLinks.codepenLink"
        ></ProjectButtons>
      </footer>
    </section>
  </section>
</template>

<style scoped>
.projects-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow-y: auto;
  /* padding: 0.5rem; */
  /* transition: opacity 0.4s ease; */
}

.projects-content {
  background: var(--color-light-background);
  color: var(--color-text-dark);
  /* border-radius: 1rem; */
  width: 1024px;
  /* height: 60vh; */
  /* flex: 1; */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  /* min-height: 60vh; */

  /* height: clamp(60vh, 90vh); */
  overflow: hidden;
}

.project-demo {
  height: 60vh;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 0.3s forwards;
}

/* Responsive */
@media only screen and (max-width: 1024px) {
  .projects-content {
    width: 90vw;
  }
}

@media only screen and (max-width: 768px) {
  .projects-content {
    width: 95vw;
  }

  .project-demo {
    height: 70vh;
  }
}

@media only screen and (max-width: 500px) {
}
</style>
