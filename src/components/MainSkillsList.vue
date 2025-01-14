<script setup>
import MainSkillsItem from './MainSkillsItem.vue'

const skills = ['Vue', 'JavaScript', 'HTML', 'CSS']
</script>

<template>
  <div class="skills-wrapper">
    <MainSkillsItem v-for="(skill, index) in skills" :key="index">{{ skill }}</MainSkillsItem>
  </div>
</template>

<style scoped>
.skills-wrapper {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
</style>
