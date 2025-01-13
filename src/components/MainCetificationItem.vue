<script setup>
import LinkItem from './LinkItem.vue'
import { defineProps } from 'vue'

defineProps({
  name: {
    type: String,
    required: true,
  },
  schoolName: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <!-- <div class="cert-item"> -->
  <p class="cert-p">
    {{ schoolName }} <span>-</span><LinkItem :href="link" isResponsive>{{ name }}</LinkItem>
  </p>
  <!-- </div> -->
</template>

<style scoped>
/* .cert-item {
  display: flex;
  gap: 1rem;
} */

.cert-p {
  /* color: var(--color-text-light); */
  display: flex;
  gap: 1rem;
}

/* Responsive */
@media only screen and (max-width: 1024px) {
}
@media only screen and (max-width: 768px) {
}
@media only screen and (max-width: 500px) {
  .cert-p {
    gap: 0.5rem;
  }
}
</style>
