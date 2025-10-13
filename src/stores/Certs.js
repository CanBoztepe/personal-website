import { defineStore } from 'pinia'

export let useCertsStore = defineStore('certs', {
  // data
  state() {
    return {
      certList: [
        {
          id: 1,
          name: 'Programming Methodologies with Python',
          schoolName: 'Stanford University',
          link: 'https://codeinplace.stanford.edu/cip5/certificate/xof3td',
        },
        {
          id: 2,
          name: 'Front End Development Libraries',
          schoolName: 'freeCodeCamp',
          link: 'https://www.freecodecamp.org/certification/CanBoztepe/front-end-development-libraries',
        },
        {
          id: 3,
          name: 'JavaScript Algorithms and Data Structures',
          schoolName: 'freeCodeCamp',
          link: 'https://www.freecodecamp.org/certification/CanBoztepe/javascript-algorithms-and-data-structures',
        },
        {
          id: 4,
          name: 'Responsive Web Design',
          schoolName: 'freeCodeCamp',
          link: 'https://www.freecodecamp.org/certification/CanBoztepe/responsive-web-design',
        },
      ],
    }
  },
})
