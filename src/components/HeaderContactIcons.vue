<script setup>
import HeaderContactIcon from './HeaderContactIcon.vue'
</script>

<template>
  <div class="contact-links" aria-label="Contact links">
    <HeaderContactIcon href="https://github.com/CanBoztepe">
      <IconMdiGithub />
    </HeaderContactIcon>

    <HeaderContactIcon href="https://www.linkedin.com/in/can-boztepe/"
      ><IconMdiLinkedin
    /></HeaderContactIcon>

    <HeaderContactIcon href="https://codepen.io/CanBoztepe">
      <IconMdiCodepen />
    </HeaderContactIcon>
  </div>
</template>

<style scoped>
.contact-links {
  display: flex;
  gap: 1rem;
}
</style>
