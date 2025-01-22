<script setup>
import MainCetificationItem from '@/components/MainCetificationItem.vue'
import { useCertsStore } from '../stores/Certs'

let certifications = useCertsStore()
</script>

<template>
  <div class="experience-list">
    <MainCetificationItem
      v-for="certification in certifications.certList"
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
  flex-direction: column;
  gap: 1rem;
}
</style>
