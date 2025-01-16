<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="devnav">
    <p>DEVNAV | sorry i didnt make seperate branch for build :/</p>
    <div class="nav-links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
      <!-- <RouterLink to="/test">Test</RouterLink> -->
      <RouterLink to="/projects/javascript-calculator">JS Calculator</RouterLink>
    </div>
    <div class="nav-links">
      <RouterLink to="/projects/random-quote-machine">Quote Machine</RouterLink>
      <RouterLink to="/projects/drum-machine">Drum Machine</RouterLink>
      <RouterLink to="/projects/markdown-previewer">Markdown</RouterLink>
      <RouterLink to="/projects/pomodoro-timer">Pomodoro Timer</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.devnav {
  border: 2px solid white;
  padding: 0.5rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
}
.nav-links {
  display: flex;
  gap: 8px;
}
a {
  color: pink;
}
</style>
