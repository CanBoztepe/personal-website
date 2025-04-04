<script setup>
import HeaderContactIcon from './HeaderContactIcon.vue'
import { usePersonalInfoStore } from '../stores/PersonalInfo'

let personalInfo = usePersonalInfoStore()
</script>

<template>
  <div class="contact-links" aria-label="Contact links">
    <HeaderContactIcon :href="personalInfo.links.github">
      <IconMdiGithub />
    </HeaderContactIcon>

    <!-- <HeaderContactIcon :href="personalInfo.links.linkedin"><IconMdiLinkedin /></HeaderContactIcon> -->

    <HeaderContactIcon :href="personalInfo.links.codepen">
      <IconMdiCodepen />
    </HeaderContactIcon>

    <HeaderContactIcon :href="personalInfo.links.leetcode">
      <IconHugeiconsLeetcode />
    </HeaderContactIcon>
  </div>
</template>

<style scoped>
.contact-links {
  display: flex;
  gap: 1rem;
}
</style>
