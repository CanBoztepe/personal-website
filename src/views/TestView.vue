<script setup>
import TestColors from '@/components/TestColors.vue'
import TestColorScheme from '@/components/TestColorScheme.vue'
</script>

<template>
  <section>
    <TestColors />
    <TestColorScheme />
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  margin: 12px;
  padding: 5px;
  border-radius: 1rem;
  background-color: grey;
  max-width: 1280px;
  flex: 1;
}
</style>
