<script setup>
import MainCetificationItem from '@/components/MainCetificationItem.vue'

// Certifications
const certifications = [
  {
    id: 1,
    name: 'Responsive Web Design',
    schoolName: 'freeCodeCamp',
    link: 'https://www.freecodecamp.org/certification/CanBoztepe/responsive-web-design',
  },
  {
    id: 2,
    name: 'JavaScript Algorithms and Data Structures',
    schoolName: 'freeCodeCamp',
    link: 'https://www.freecodecamp.org/certification/CanBoztepe/javascript-algorithms-and-data-structures',
  },
  {
    id: 3,
    name: 'Front End Development Libraries',
    schoolName: 'freeCodeCamp',
    link: 'https://www.freecodecamp.org/certification/CanBoztepe/front-end-development-libraries',
  },
]
</script>

<template>
  <div class="experience-list">
    <MainCetificationItem
      v-for="certification in certifications"
      :key="certification.id"
      :name="certification.name"
      :schoolName="certification.schoolName"
      :link="certification.link"
    />
  </div>
</template>

<style scoped>
.experience-list {
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
}
</style>
