<script setup>
import MainSkillsItem from './MainSkillsItem.vue'
import { usePersonalInfoStore } from '../stores/PersonalInfo'

let personalInfo = usePersonalInfoStore()
</script>

<template>
  <div class="skills-wrapper">
    <MainSkillsItem v-for="(skill, index) in personalInfo.skills" :key="index">{{
      skill
    }}</MainSkillsItem>
  </div>
</template>

<style scoped>
.skills-wrapper {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
</style>
