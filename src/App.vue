<script setup>
import { RouterView } from 'vue-router'
// import TheDevNav from '@/components/TheDevNav.vue'
</script>

<template>
  <TheDevNav />
  <RouterView />
  <RouterView name="overlay" />
</template>

<style scoped>
/* #app styles in main.css */
</style>
