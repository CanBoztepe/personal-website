import { defineStore } from 'pinia'

export let usePersonalInfoStore = defineStore('personalInfo', {
  // data
  state() {
    return {
      title: 'Jr. Frontend Developer',
      slogan:
        "I'm a self-taught developer who strives to write readable, maintainable and scalable code.",
      skills: ['VueJS', 'JavaScript', 'HTML', 'CSS', 'Git'],
    }
  },
})
