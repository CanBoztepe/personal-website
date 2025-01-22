import { defineStore } from 'pinia'

export let useCertsStore = defineStore('certs', {
  // data
  state() {
    return {
      certList: [
        {
          id: 1,
          name: 'Front End Development Libraries',
          schoolName: 'freeCodeCamp',
          link: 'https://www.freecodecamp.org/certification/CanBoztepe/front-end-development-libraries',
        },
        {
          id: 2,
          name: 'JavaScript Algorithms and Data Structures',
          schoolName: 'freeCodeCamp',
          link: 'https://www.freecodecamp.org/certification/CanBoztepe/javascript-algorithms-and-data-structures',
        },
        {
          id: 3,
          name: 'Responsive Web Design',
          schoolName: 'freeCodeCamp',
          link: 'https://www.freecodecamp.org/certification/CanBoztepe/responsive-web-design',
        },
      ],
    }
  },
})
