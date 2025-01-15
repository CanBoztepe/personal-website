<script setup>
import MainProjectItem from '@/components/MainProjectItem.vue'
import JavaScriptCalculatorImage from '@/assets/images/javascript-calculator-image.png'
import DrumMachineImage from '@/assets/images/drum-machine-image.png'
import MarkdownPreviewerImage from '@/assets/images/markdown-previewer-image.png'
import PomodoroTimerImage from '@/assets/images/pomodoro-timer-image.png'
import RandomQuoteMachine from '@/assets/images/random-quote-machine-image.png'

// Certification Projects, switch to pinia later
const projects = [
  {
    id: 1,
    name: 'JavaScript Calculator',
    imgSrc: JavaScriptCalculatorImage,
    demoLink: '/projects/javascript-calculator',
    githubLink:
      'https://github.com/CanBoztepe/personal-website/blob/main/src/projects/JavascriptCalculator.vue',
    codepenLink: 'https://codepen.io/CanBoztepe/pen/KwPMGBx',
  },
  {
    id: 2,
    name: 'Drum Machine',
    imgSrc: DrumMachineImage,
    demoLink: '/projects/drum-machine',
    githubLink:
      'https://github.com/CanBoztepe/personal-website/blob/main/src/projects/DrumMachine.vue',
    codepenLink: 'https://codepen.io/CanBoztepe/pen/jENEQvZ',
  },
  {
    id: 3,
    name: 'Markdown Previewer',
    imgSrc: MarkdownPreviewerImage,
    demoLink: '/projects/markdown-previewer',
    githubLink:
      'https://github.com/CanBoztepe/personal-website/blob/main/src/projects/MarkdownPreviewer.vue',
    codepenLink: 'https://codepen.io/CanBoztepe/pen/YzmoVQq',
  },
  {
    id: 4,
    name: 'Pomodoro Timer',
    imgSrc: PomodoroTimerImage,
    demoLink: '/projects/pomodoro-timer',
    githubLink:
      'https://github.com/CanBoztepe/personal-website/blob/main/src/projects/PomodoroTimer.vue',
    codepenLink: 'https://codepen.io/CanBoztepe/pen/mybRYvd',
  },
  {
    id: 5,
    name: 'Random Quote Machine',
    imgSrc: RandomQuoteMachine,
    demoLink: '/projects/random-quote-machine',
    githubLink:
      'https://github.com/CanBoztepe/personal-website/blob/main/src/projects/RandomQuoteMachine.vue',
    codepenLink: 'https://codepen.io/CanBoztepe/pen/vYoMBme',
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
  flex-direction: column;
  gap: 1rem;
}
</style>
