<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <RouterLink to="/" class="router-close-link">
    <button class="close-button" tabindex="-1"><IconMdiClose /></button
  ></RouterLink>
</template>

<style scoped>
.router-close-link {
  margin-left: auto;
}

.close-button {
  border: none;
  cursor: pointer;
  background-color: transparent;
  font-size: 2rem;
  text-decoration: none;
  color: var(--color-text-dark);
  padding: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.router-close-link:hover .close-button,
.router-close-link:focus .close-button {
  background-color: #dcdcdc;
}
</style>
