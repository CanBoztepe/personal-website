<template>
  <p class="text-item"><slot></slot></p>
</template>

<style scoped>
.text-item {
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  /* background-color: var(--color-primary); */
  border-radius: 1rem;
  padding: 0.4rem 0.6rem;
  font-size: 1rem;
}
</style>
