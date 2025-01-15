<script setup>
import { ref, defineEmits, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const emit = defineEmits(['projectLinks'])

// switch to pinia later
const certProjectLinks = {
  JavascriptCalculator: {
    githubLink:
      'https://github.com/CanBoztepe/personal-website/blob/main/src/projects/JavascriptCalculator.vue',
    codepenLink: 'https://codepen.io/CanBoztepe/pen/KwPMGBx',
  },
  drumMachine: {
    githubLink:
      'https://github.com/CanBoztepe/personal-website/blob/main/src/projects/DrumMachine.vue',
    codepenLink: 'https://codepen.io/CanBoztepe/pen/jENEQvZ',
  },
  markdownPreviewer: {
    githubLink:
      'https://github.com/CanBoztepe/personal-website/blob/main/src/projects/MarkdownPreviewer.vue',
    codepenLink: 'https://codepen.io/CanBoztepe/pen/YzmoVQq',
  },
  pomodoroTimer: {
    githubLink:
      'https://github.com/CanBoztepe/personal-website/blob/main/src/projects/PomodoroTimer.vue',
    codepenLink: 'https://codepen.io/CanBoztepe/pen/mybRYvd',
  },
  RandomQuoteMachine: {
    githubLink:
      'https://github.com/CanBoztepe/personal-website/blob/main/src/projects/RandomQuoteMachine.vue',
    codepenLink: 'https://codepen.io/CanBoztepe/pen/vYoMBme',
  },
}

// Access the router instance
const router = useRouter()

// console.log(router.currentRoute.value.path)
const selectedRoute = ref(router.currentRoute.value.path)

onMounted(() => {
  emitLinks()
})

// HandleDropdownInput
function handleChange() {
  emitLinks()

  navigate()
}

// Emit project links to ProjectsNav.vue
function emitLinks() {
  switch (selectedRoute.value) {
    case '/projects/javascript-calculator':
      emit('projectLinks', certProjectLinks.JavascriptCalculator)
      // console.log(`emitted: ${certProjectLinks.JavascriptCalculator}`)
      break
    case '/projects/drum-machine':
      emit('projectLinks', certProjectLinks.drumMachine)
      // console.log(`emitted: ${certProjectLinks.drumMachine}`)
      break
    case '/projects/markdown-previewer':
      emit('projectLinks', certProjectLinks.markdownPreviewer)
      // console.log(`emitted: ${certProjectLinks.markdownPreviewer}`)
      break
    case '/projects/pomodoro-timer':
      emit('projectLinks', certProjectLinks.pomodoroTimer)
      // console.log(`emitted: ${certProjectLinks.pomodoroTimer}`)
      break
    case '/projects/random-quote-machine':
      // emit('projectLinks', certProjectLinks.RandomQuoteMachine)
      break
    default:
      console.log(`Sorry, no bueno`)
      break
  }
}

// Navigate function
function navigate() {
  router.push(selectedRoute.value)
}
</script>

<template>
  <div class="project-select-wrapper">
    <label for="project-select"></label>
    <select
      id="project-select"
      class="project-select"
      v-model="selectedRoute"
      @change="handleChange"
    >
      <option class="project-option" value="/projects/javascript-calculator">
        JavaScript Calculator
      </option>
      <option class="project-option" value="/projects/drum-machine">Drum Machine</option>
      <option class="project-option" value="/projects/markdown-previewer">
        Markdown Previewer
      </option>
      <option class="project-option" value="/projects/pomodoro-timer">Pomodoro Timer</option>
      <option class="project-option" value="/projects/random-quote-machine">
        Random Quote Machine
      </option>
    </select>
  </div>
</template>

<style scoped>
.project-select-wrapper {
  position: relative;
  display: inline-block;
  width: 250px;
  height: 48px;
  padding: 1px;
}

.project-select-wrapper:hover {
  border-right: 2px solid var(--color-text-dark);
  width: 251px;
  /* to fix arrow moving */
}

.project-select-wrapper label {
  display: inline-block;
  /* margin-bottom: 0.25rem; */
  font-size: 1rem;
  color: var(--color-text-dark);
}

.project-select {
  /* Remove default browser appearance */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 100%;
  height: 100%;
  padding: 0.5rem 2.5rem 0.5rem 1rem; /* Extra right padding to reserve space for the arrow */
  font-size: 1rem;
  /* line-height: 1.5; */
  font-family: 'Poppins', Inter, sans-serif !important;
  color: var(--color-text-dark);
  background-color: #fff;
  /* border: 1px solid #ccc; */
  /* border-radius: 4px; */
  border: none;
  cursor: pointer;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}

/* .project-select:hover {
  background-color: var(--color-light-highlight) !important;
}

.project-option {
  font-family: 'Poppins', Inter, sans-serif !important;
}

.project-option:hover,
.project-option:focus {
  background-color: var(--color-secondary) !important;
  color: var(--color-secondary) !important;
  cursor: pointer !important;
} */

/* Add a custom, static arrow */
.project-select-wrapper::after {
  /* color: var(--color-text-dark); */
  content: '';
  position: absolute;
  top: 50%;
  right: 1rem;
  width: 0.8rem;
  height: 0.8rem;
  background: url("data:image/svg+xml;charset=UTF-8,<svg width='512' height='512' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'><path fill='%23333' d='M256 294.1l-187.3-187C62.6 99.9 80.3 96 96 96c20.9 0 38.9 8.3 52 21.8L256 210.7l107.9-107.8C384.1 104.3 402.1 96 423 96c15.7 0 33.4 3.9 27.3 11.1L256 294.1z'/></svg>")
    no-repeat center;
  background-size: contain;
  transform: translateY(-50%);
  pointer-events: none;
}
</style>
