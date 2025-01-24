import { defineStore } from 'pinia'

export let usePersonalInfoStore = defineStore('personalInfo', {
  // data
  state() {
    return {
      title: 'Jr. Frontend Developer',
      slogan:
        "I'm a self-taught developer who strives to write readable, maintainable and scalable code.",
      skills: ['VueJS', 'JavaScript', 'HTML', 'CSS', 'Git'],
      links: {
        github: 'https://github.com/CanBoztepe',
        linkedin: 'https://www.linkedin.com/in/can-boztepe/',
        codepen: 'https://codepen.io/CanBoztepe',
        leetcode: 'https://leetcode.com/u/can-boztepe/',
      },
    }
  },
})
