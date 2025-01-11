<script setup>
const colors = [
  { colorCode: '#FF7A59', class: 'primary' },
  { colorCode: '#00B7C2', class: 'secondary' },
  { colorCode: '#1D1E22', class: 'background' },
  { colorCode: '#F5F5F5', class: 'text-light' },
  { colorCode: '#B8B8B8', class: 'text-light-muted' },
  { colorCode: '#3598DB', class: 'highlight' },
]
</script>

<template>
  <section class="color-scheme">
    <h1 class="title">Color Scheme</h1>

    <div class="colors-wrapper">
      <div v-for="(color, index) in colors" :key="index" :class="color.class" class="color-div">
        <p>{{ color.class }}</p>
        <p>{{ color.colorCode }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.colors-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
.color-div {
  flex: 1 1 auto;
  aspect-ratio: 3/1;
  text-align: center;
  align-content: center;
}

/* Colors */
.primary {
  background-color: var(--color-primary);
  /* color: var(--color-background); */
}

.secondary {
  background-color: var(--color-secondary);
  /* color: var(--color-background); */
}

.background {
  background-color: var(--color-background);
  /* color: var(--color-text); */
}

.text-light {
  background-color: var(--color-text-light);
  color: var(--color-background);
}

.text-light-muted {
  background-color: var(--color-text-light-muted);
  color: var(--color-background);
}

.highlight {
  background-color: var(--color-highlight);
  color: var(--color-background);
}
</style>
