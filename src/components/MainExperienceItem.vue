<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  displayStartDate: {
    type: String,
    required: true,
  },
  displayEndDate: {
    type: String,
    required: true,
  },
  descriptions: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <article class="experience-item">
    <header class="date-wrapper">
      <p>
        <time :datetime="startDate">{{ displayStartDate }}</time>
        -
        <time :datetime="endDate">{{ displayEndDate }}</time>
      </p>
    </header>

    <section class="work-wrapper">
      <div class="title-upper-wrapper">
        <div class="title-wrapper">
          <p class="job-title">{{ title }}</p>
          <p class="header-divider">·</p>
          <p class="company-name">{{ company }}</p>
        </div>

        <p>{{ location }}</p>
      </div>

      <div v-if="descriptions.length <= 1" class="job-description-wrapper">
        <p class="job-description">
          {{ descriptions[0] }}
        </p>
      </div>

      <div v-else class="job-description-wrapper">
        <ul class="job-description-list">
          <li
            class="job-description-item"
            v-for="(description, index) in descriptions"
            :key="index"
          >
            {{ description }}
          </li>
        </ul>
      </div>
    </section>
  </article>
</template>

<style scoped>
.experience-item {
  display: flex;
  gap: 0.5rem;
}

.title-upper-wrapper {
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
}

.date-wrapper {
  flex: 1.2;
  min-width: 112px;
}

.work-wrapper {
  flex: 4;
}

.title-wrapper {
  display: flex;
  gap: 0.8rem;
}

.job-title,
.header-divider,
.company-name {
  color: var(--color-text-light);
}

.job-description-wrapper {
  margin-top: 0.8rem;
}

/* .job-description { */
/* margin-top: 0.8rem; */
/* font-size: 0.9rem; */
/* } */

.job-description-list {
  margin-left: -20px;
}

.job-description-item {
  margin-bottom: 0.3rem;
}

/* Responsive */
@media only screen and (max-width: 1024px) {
  .date-wrapper {
    flex: 0.8;
  }
  .title-upper-wrapper {
    flex-direction: column;
  }
}

/* @media only screen and (max-width: 768px) {
} */

@media only screen and (max-width: 500px) {
  .experience-item {
    gap: 0rem;
  }

  .job-title {
    font-size: 0.9rem;
  }

  .date-wrapper {
    font-size: 0.9rem;
  }

  .text-item {
    font-size: 0.9rem;
  }

  .title-upper-wrapper {
    flex-direction: column;
  }

  .title-wrapper {
    flex-direction: column;
    gap: 0rem;
  }

  .header-divider {
    display: none;
  }

  /* .date-wrapper {
    flex: 0.5;
  } */
}
</style>
