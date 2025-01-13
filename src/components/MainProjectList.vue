<script setup>
import MainProjectItem from '@/components/MainProjectItem.vue'
import JavaScriptCalculatorImage from '@/assets/images/javascript-calculator-image.png'
import DrumMachineImage from '@/assets/images/drum-machine-image.png'
import MarkdownPreviewerImage from '@/assets/images/markdown-previewer-image.png'
import PomodoroTimerImage from '@/assets/images/pomodoro-timer-image.png'
import RandomQuoteMachine from '@/assets/images/random-quote-machine-image.png'

// Certification Projects
const projects = [
  {
    id: 1,
    name: 'Random Quote Machine',
    imgSrc: RandomQuoteMachine,
    demoLink: '/projects/random-quote-machine',
    githubLink: '',
    codepenLink: 'https://codepen.io/CanBoztepe/pen/vYoMBme',
  },
  {
    id: 2,
    name: 'Pomodoro Timer',
    imgSrc: PomodoroTimerImage,
    demoLink: '/projects/pomodoro-timer',
    githubLink: '',
    codepenLink: 'https://codepen.io/CanBoztepe/pen/mybRYvd',
  },
  {
    id: 3,
    name: 'Markdown Previewer',
    imgSrc: MarkdownPreviewerImage,
    demoLink: '/projects/markdown-previewer',
    githubLink: '',
    codepenLink: 'https://codepen.io/CanBoztepe/pen/YzmoVQq',
  },
  {
    id: 4,
    name: 'Drum Machine',
    imgSrc: DrumMachineImage,
    demoLink: '/projects/drum-machine',
    githubLink: '',
    codepenLink: 'https://codepen.io/CanBoztepe/pen/jENEQvZ',
  },
  {
    id: 5,
    name: 'JavaScript Calculator',
    imgSrc: JavaScriptCalculatorImage,
    demoLink: '/projects/javascript-calculator',
    githubLink: '',
    codepenLink: 'https://codepen.io/CanBoztepe/pen/KwPMGBx',
  },
]
</script>

<template>
  <div class="projects-list">
    <MainProjectItem
      v-for="project in projects"
      :key="project.id"
      :name="project.name"
      :imgSrc="project.imgSrc"
      :demoLink="project.demoLink"
      :githubLink="project.githubLink"
      :codepenLink="project.codepenLink"
      :href="project.codepenLink"
    />
  </div>
</template>

<style scoped>
.projects-list {
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
}
</style>
