<template>
  <div id="markdown-previewer-app">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="navbar-title">MARKDOWN PREVIEWER</div>
      <div class="navbar-button" @click="showPreview">
        <IconMdiVolumeOff
          :class="previewActive ? 'preview-icon-active' : 'preview-icon'"
        ></IconMdiVolumeOff>
        <!-- <i
          class="fa-solid fa-eye"
          :class="previewActive ? 'preview-icon-active' : 'preview-icon'"
        ></i> -->
      </div>
    </nav>

    <main class="main-wrapper">
      <!-- Editor -->
      <div class="editor-wrapper">
        <div class="header">MARKDOWN</div>
        <textarea id="editor" class="editor" v-model="markdownText"></textarea>
      </div>

      <!-- Preview pc -->
      <div class="preview-wrapper preview-wrapper-pc">
        <div class="header">PREVIEW</div>
        <!-- Using v-html to render HTML output -->
        <div id="preview" class="preview" v-html="previewText"></div>
      </div>

      <!-- Preview Responsive (for phone) -->
      <div class="preview-wrapper preview-wrapper-phone" :class="{ active: previewActive }">
        <div class="header">PREVIEW</div>
        <div id="preview-phone" class="preview" v-html="previewText"></div>
      </div>
    </main>
  </div>
</template>

<script setup>
/**
 * README
 * This app is part of freeCodeCamp.org's Front End Development Libraries Certificate projects:
 * https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer
 *
 * https://github.com/CanBoztepe
 * https://www.freecodecamp.org/CanBoztepe
 */

import { ref, computed, onMounted } from 'vue'
import { marked } from 'marked'

// If you want to sanitize the output, you can import DOMPurify:
// import DOMPurify from 'dompurify'

/**
 * Reactive references
 */
const previewActive = ref(false)
const markdownText = ref(
  '# Welcome to my Vue Markdown Previewer!\n\n' +
    '## This is a sub-heading...\n' +
    "### And here's some other cool stuff:\n\n" +
    'Heres some code, `<div></div>`, between 2 backticks.\n\n' +
    '```\n' +
    '// this is multi-line code:\n\n' +
    'function anotherExample(firstLine, lastLine) {\n' +
    "  if (firstLine == '```' && lastLine == '```') {\n" +
    '    return multiLineCode;\n' +
    '  }\n' +
    '}\n' +
    '```\n\n' +
    'You can also make text **bold**... whoa!\n' +
    'Or _italic_.\n' +
    'Or... wait for it... **_both!_**\n' +
    'And feel free to go crazy ~~crossing stuff out~~.\n\n' +
    "There's also [links](https://www.freecodecamp.org), and\n" +
    '> Block Quotes!\n\n' +
    'And if you want to get really crazy, even tables:\n\n' +
    'Wild Header | Crazy Header | Another Header?\n' +
    '------------ | ------------- | -------------\n' +
    'Your content can | be here, and it | can be here....\n' +
    'And here. | Okay. | I think we get it.\n\n' +
    '- And of course there are lists.\n' +
    '  - Some are bulleted.\n' +
    '     - With different indentation levels.\n' +
    '        - That look like this.\n\n\n' +
    '1. And there are numbered lists too.\n' +
    '1. Use just 1s if you want!\n' +
    "1. And last but not least, let's not forget embedded images:\n\n" +
    '![a cute black dog](https://picsum.photos/id/237/200/300)',
)

// set Marked options
onMounted(() => {
  marked.use({
    gfm: true,
    breaks: true,
  })
})

// for the navbar button in phone view
function showPreview() {
  previewActive.value = !previewActive.value
}

// Computed
const previewText = computed(() => {
  // If you want to sanitize, do something like:
  // return DOMPurify.sanitize(marked.parse(markdownText.value))
  return marked.parse(markdownText.value)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Rubik');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

/* html,
body,
.markdown-previewer-app {
  height: 100%;
} */

.markdown-previewer-app {
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Rubik', sans-serif;
}

/* navbar */
.navbar {
  width: 100%;
  background-color: #373d49;
  height: 48px;
  min-height: 48px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  z-index: 2;
}

.navbar-title {
  margin-left: 5px;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.5em;
  color: #f7f7f7;
}

/* navbar buttons */
.navbar-button {
  display: none;
}

/* main parent wrapper */
.main-wrapper {
  background-color: #f4f4f4;
  /* flex: 1; */
  display: flex;
  align-items: stretch;
  max-height: 100vh;
  overflow: hidden;
}

/* child wrappers */
.editor-wrapper {
  width: 50%;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  height: 100%;
}

.preview-wrapper {
  flex: 1;
  max-width: 50%;
  border-left: 1px solid #d3d3d3;
  max-height: 100%;
  display: flex;
  flex-direction: column;
}

.preview-wrapper-phone {
  display: none;
}

/* headers */
.header {
  border-bottom: 1px solid #d3d3d3;
  min-height: 28px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 8px;
  color: grey;
}

/* markdown (textarea) */
.editor {
  resize: none;
  outline: none;
  height: 100%;
  width: 100%;
  padding: 4px;
  border: none;
  /* flex: 1; */
  overflow: auto;
  /* max-height: 100%; */
}

/* preview */
.preview {
  background-color: white;
  width: 100%;
  padding: 8px;
  overflow: auto;
  max-height: 100%;
}

/* Preview Styling */
.preview > * {
  margin-bottom: 1em;
}

.preview h1 {
  font-size: 2rem;
  border-bottom: 2px solid #ccc;
  padding-bottom: 5px;
}

.preview h2 {
  font-size: 1.6rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
}

.preview h3 {
  font-size: 1.44em;
}

.preview p {
  line-height: 1.5;
}

.preview blockquote {
  border-left: 4px solid #ccc;
  padding-left: 1rem;
  color: #666;
  margin: 1rem 0;
  font-style: italic;
  background-color: #f9f9f9;
}

.preview code {
  padding: 2px 4px;
  border-radius: 4px;
  font-family: 'Courier New', Courier, monospace;
}

.preview pre {
  background-color: #2d2d2d;
  color: #ccc;
  padding: 1rem;
  overflow: auto;
  border-radius: 4px;
}

.preview ul,
.preview ol {
  margin-left: 1.5rem;
}

.preview li {
  margin-bottom: 0.5rem;
}

.preview a {
  color: #3498db;
  text-decoration: none;
}

.preview a:hover {
  text-decoration: underline;
}

.preview img {
  /* max-width: 100%; */
  width: 100%;
  /* height: auto; */
  display: block;
  margin: 1.5rem 0;
}

.preview table {
  border-collapse: collapse;
  margin: 10px 0;
}

.preview th,
.preview td {
  border: 1px solid #dddddd;
  padding: 8px;
  text-align: left;
  min-width: 160px;
}

.preview th {
  background-color: #f4f4f4;
  font-weight: bold;
}

/* Responsive */
@media only screen and (max-width: 768px) {
  .navbar-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 8px;
  }

  .navbar-button:hover {
    cursor: pointer;
  }

  .preview-icon {
    color: #f7f7f7;
    border-radius: 5px;
    font-size: 26px;
    margin-right: 8px;
    padding: 8px;
  }

  .preview-icon-active {
    color: #03fc4d;
    background-color: #1a1d25;
    border-radius: 5px;
    font-size: 26px;
    margin-right: 8px;
    padding: 8px;
  }

  .preview-wrapper-pc {
    display: none;
  }

  .preview-wrapper-phone {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-sizing: border-box;
    max-width: 100%;
    background-color: #f4f4f4;
    position: fixed;
    z-index: 3;
    width: 100vw;
    height: calc(100% - 48px);
    top: 48px;
    right: -100vw;
    transition: right 0.25s ease-in-out;
  }

  .preview-wrapper-phone.active {
    right: 0;
  }
}

@media only screen and (max-width: 400px) {
  .navbar-title {
    font-size: 5vw;
  }
}
</style>
