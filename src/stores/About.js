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
      at a startup where I was hired full-time as a Junior Front-End Developer. During that time, I
      worked closely with a senior full-stack developer to build production-ready Vue components,
      further sharpening my problem-solving and communication skills.
      <br /><br />
      Driven by best practices, responsiveness, and accessibility, I thrive in fast-paced startup
      settings where I can combine creativity and technical expertise to solve problems. I’m
      proficient with <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer" class="about-link">Vue</a>
      and always eager to learn new frameworks, tools, and languages.
      <br /><br />
      Outside of coding, I enjoy going for walks, hitting the gym, and making gaming videos—activities
      that help me stay balanced, curious, and solution-oriented. I look forward to contributing my
      adaptability, teamwork, and passion for continuous growth to a forward-thinking development
      team.
    `,
  }),
})
