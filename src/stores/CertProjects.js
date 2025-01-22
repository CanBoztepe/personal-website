import { defineStore } from 'pinia'
import JavaScriptCalculatorImg from '@/assets/images/javascript-calculator-image.png'
import DrumMachineImg from '@/assets/images/drum-machine-image.png'
import MarkdownPreviewerImg from '@/assets/images/markdown-previewer-image.png'
import PomodoroTimerImg from '@/assets/images/pomodoro-timer-image.png'
import RandomQuoteMachineImg from '@/assets/images/random-quote-machine-image.png'

export let useCertProjectsStore = defineStore('certProjects', {
  // state
  state() {
    return {
      projects: {
        JavascriptCalculator: {
          id: 1,
          name: 'JavaScript Calculator',
          imgSrc: JavaScriptCalculatorImg,
          demoLink: '/projects/javascript-calculator',
          githubLink:
            'https://github.com/CanBoztepe/personal-website/blob/main/src/projects/JavascriptCalculator.vue',
          codepenLink: 'https://codepen.io/CanBoztepe/pen/KwPMGBx',
        },
        drumMachine: {
          id: 2,
          name: 'Drum Machine',
          imgSrc: DrumMachineImg,
          demoLink: '/projects/drum-machine',
          githubLink:
            'https://github.com/CanBoztepe/personal-website/blob/main/src/projects/DrumMachine.vue',
          codepenLink: 'https://codepen.io/CanBoztepe/pen/jENEQvZ',
        },
        markdownPreviewer: {
          id: 3,
          name: 'Markdown Previewer',
          imgSrc: MarkdownPreviewerImg,
          demoLink: '/projects/markdown-previewer',
          githubLink:
            'https://github.com/CanBoztepe/personal-website/blob/main/src/projects/MarkdownPreviewer.vue',
          codepenLink: 'https://codepen.io/CanBoztepe/pen/YzmoVQq',
        },
        pomodoroTimer: {
          id: 4,
          name: 'Pomodoro Timer',
          imgSrc: PomodoroTimerImg,
          demoLink: '/projects/pomodoro-timer',
          githubLink:
            'https://github.com/CanBoztepe/personal-website/blob/main/src/projects/PomodoroTimer.vue',
          codepenLink: 'https://codepen.io/CanBoztepe/pen/mybRYvd',
        },
        RandomQuoteMachine: {
          id: 5,
          name: 'Random Quote Machine',
          imgSrc: RandomQuoteMachineImg,
          demoLink: '/projects/random-quote-machine',
          githubLink:
            'https://github.com/CanBoztepe/personal-website/blob/main/src/projects/RandomQuoteMachine.vue',
          codepenLink: 'https://codepen.io/CanBoztepe/pen/vYoMBme',
        },
      },

      activeProject: {},
    }
  },

  // actions
  actions: {
    setActiveProject(obj) {
      this.activeProject = obj
    },
  },

  // getters
  getters: {
    getActiveProject(state) {
      return state.activeProject
    },
  },
})
