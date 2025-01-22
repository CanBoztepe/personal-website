import { defineStore } from 'pinia'

export let useWorkExpStore = defineStore('workExp', {
  // data
  state() {
    return {
      experiences: [
        {
          id: 1,
          title: 'Intern Frontend Developer',
          company: 'Opsis',
          location: 'Turkey',
          startDate: '2018-07',
          endDate: '2018-09',
          displayStartDate: 'Jul',
          displayEndDate: 'Sep 2018',
          descriptions: [
            'I completed a 3-month internship focused on front-end web development, primarily utilizing Vue2. Throughout the internship, I collaborated closely with a senior developer to build responsive user interfaces, troubleshoot bugs, and optimize application performance.',
          ],
        },
        {
          id: 2,
          title: 'Junior Frontend Developer',
          company: 'Opsis',
          location: 'Turkey',
          startDate: '2018',
          endDate: '2019',
          displayStartDate: '2018',
          displayEndDate: '2019',
          descriptions: [
            'Contributed as part of a small dev team at a startup to develop production-ready Vue.js components, working closely with a Senior Fullstack Developer.',
            'Created a standalone Vue2 application from the ground up. I got hands-on experience implementing and using essential front-end concepts like state management(Vuex) and navigation(Vue Router). Created responsive UI designs using the Buefy CSS library. Implemented several plug-ins like Vue I18n for Turkish/English language support and Vue Moment for date formatting.',
          ],
        },
      ],
    }
  },
})
