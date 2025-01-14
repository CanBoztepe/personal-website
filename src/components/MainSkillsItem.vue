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

/* Responsive */
@media only screen and (max-width: 1024px) {
}

@media only screen and (max-width: 768px) {
}

@media only screen and (max-width: 500px) {
  .text-item {
    font-size: 0.9rem;
  }
}
</style>
