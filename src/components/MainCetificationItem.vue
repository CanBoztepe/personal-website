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
  <div class="cert-item">
    <p class="cert-p">
      {{ schoolName }} <span>-</span><LinkItem :href="link">{{ name }}</LinkItem>
    </p>
  </div>
</template>

<style scoped>
.cert-item {
  display: flex;
  gap: 1rem;
}

.cert-p {
  /* color: var(--color-text-light); */
  display: flex;
  gap: 1rem;
}
</style>
