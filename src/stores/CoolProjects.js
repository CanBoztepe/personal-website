import { defineStore } from 'pinia'
import PersonalWebsiteImg from '@/assets/images/personal-website.png'

export let useCoolProjectsStore = defineStore('coolProjects', {
  // data
  state() {
    return {
      projects: [
        {
          id: 1,
          name: 'canboztepe.com',
          imgSrc: PersonalWebsiteImg,
          demoLink: '',
          githubLink: 'https://github.com/CanBoztepe/personal-website',
          codepenLink: '',
        },
      ],
    }
  },
})
