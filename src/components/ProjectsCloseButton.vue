<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <RouterLink to="/" style="margin-left: auto">
    <button class="close-button"><IconMdiClose /></button
  ></RouterLink>
</template>

<style scoped>
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

.close-button:hover,
.close-button:focus {
  background-color: #dcdcdc;
}

/* --color-light-background: #f9fafb;
  --color-text-dark: #1d1e22;
  --color-text-dark-muted: #4d4d4d;
  --color-light-primary: #ff7a59;
  --color-light-secondary: #00b7c2; */
</style>
