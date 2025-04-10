import { defineStore } from 'pinia'

export const useAboutStore = defineStore('about', {
  state: () => ({
    content: `
      I’m a bilingual (English/Turkish) Front-End Developer with a diverse background in culinary arts
      and tech. Originally born in Australia and raised in Turkey, I studied engineering in Australia
      before pivoting to culinary school in Istanbul—an experience that honed my ability to perform
      under pressure and collaborate effectively in high-paced, team-oriented environments.
      <br /><br />
      After COVID I transitioned into web development, learning JavaScript, HTML, and CSS, and landed an internship
      at a startup where I was hired full-time as a Junior Front-End Developer.
      <br /><br />
      Driven by best practices, I thrive in fast-paced startup
      settings where I can combine creativity and technical expertise to solve problems. I’m
      proficient with <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer" class="about-link">Vue</a>
      and always eager to learn new frameworks, tools, and languages.
    `,
  }),
})
