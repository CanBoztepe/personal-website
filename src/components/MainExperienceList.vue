<script setup>
import MainExperienceItem from '@/components/MainExperienceItem.vue'
import { useWorkExpStore } from '../stores/WorkExp.js'

let workExp = useWorkExpStore()
</script>

<template>
  <div class="experience-list">
    <MainExperienceItem
      v-for="experience in workExp.experiences"
      :key="experience.id"
      :title="experience.title"
      :company="experience.company"
      :location="experience.location"
      :startDate="experience.startDate"
      :endDate="experience.endDate"
      :displayStartDate="experience.displayStartDate"
      :displayEndDate="experience.displayEndDate"
      :description="experience.description"
      :points="experience.points"
    />
  </div>
</template>

<style scoped>
.experience-list {
  display: flex;
  flex-direction: column-reverse;
  gap: 3rem;
}
</style>
