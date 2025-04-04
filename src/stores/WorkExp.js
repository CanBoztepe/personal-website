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
          startDate: '2020-06',
          endDate: '2020-08',
          displayStartDate: 'Jun',
          displayEndDate: 'Aug 2020',
          description:
            'I completed a 3-month internship focused on front-end web development, primarily utilizing Vue. Throughout the internship, I collaborated closely with a senior developer to build responsive user interfaces, troubleshoot bugs, and optimize application performance.',
          points: [],
        },
        {
          id: 2,
          title: 'Junior Frontend Developer',
          company: 'Opsis',
          location: 'Turkey',
          startDate: '2020',
          endDate: '2022',
          displayStartDate: '2020',
          displayEndDate: '2022',
          description:
            'Contributed as part of a small developer team at a startup, working closely with a Senior Fullstack Developer.',
          points: [
            "Developed production ready Vue components according to the senior's specifications, ensuring cross-browser compatibility and mobile-friendly design.",
            'Developed interactive user interfaces using the Buefy component library.',
            'Implemented tools like vue-router, vuex & vue-i18n',
            'Designed and developed the entire front-end of a travel management application using Vue.js, enabling employees to book, manage, and track travel requests seamlessly.',
          ],
        },
      ],
    }
  },
})
