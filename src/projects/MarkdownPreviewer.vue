<template>
  <div class="markdown-previewer-app">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="navbar-title">MARKDOWN PREVIEWER</div>
      <div class="navbar-button" @click="showPreview">
        <IconMdiEye :class="previewActive ? 'preview-icon-active' : 'preview-icon'"></IconMdiEye>
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
import DOMPurify from 'dompurify'

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
  // return marked.parse(markdownText.value)
  return DOMPurify.sanitize(marked.parse(markdownText.value))
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

.markdown-previewer-app {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Rubik', sans-serif;
  overflow: hidden;
  border-bottom: 1px solid #d3d3d3;
}

/* Navbar */
.navbar {
  width: 100%;
  background-color: #373d49;
  height: 48px;
  /* min-height: 48px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-title {
  margin-left: 5px;
  font-size: 1.5em;
  color: #f7f7f7;
}

.navbar-button {
  display: none; /* Shown in media query below for mobile */
}

/* Main content: fill all remaining space below the navbar */
.main-wrapper {
  flex: 1;
  display: flex;
  overflow: hidden;
  background-color: #f4f4f4;
  position: relative;
}

/* Editor area */
.editor-wrapper {
  flex: 1;
  /* width: 50%; */
  min-width: 50%;
  display: flex;
  flex-direction: column;
}

/* The <textarea> */
.editor {
  flex: 1;
  /* min-width: 50%; */
  resize: none;
  padding: 4px;
  border: none;
  outline: none;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
}

/* Preview area for desktop */
.preview-wrapper {
  flex: 1;
  border-left: 1px solid #d3d3d3;
  display: flex;
  flex-direction: column;
  min-width: 0; /* Allow the item to shrink */
}

/* The preview container */
.preview {
  flex: 1;
  /* width: 100%; */
  padding: 8px;
  overflow-y: auto !important;
  overflow-x: auto;
  background-color: white;
  /* min-width: 0;  */
}

/* Header in both editor/preview areas */
.header {
  border-bottom: 1px solid #d3d3d3;
  min-height: 28px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 8px;
  color: grey;
  flex: 0 0 auto; /* fixed height row */
}

/* Preview for phone (hidden on desktop by default) */
.preview-wrapper-phone {
  display: none;
}

/* Responsive: show phone preview, hide PC preview */
@media only screen and (max-width: 768px) {
  .navbar-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 8px;
    cursor: pointer;
  }

  .preview-icon {
    color: #f7f7f7;
    border-radius: 5px;
    font-size: 2.5rem;
    padding: 8px;
  }

  .preview-icon-active {
    color: #03fc4d;
    background-color: #1a1d25;
    border-radius: 5px;
    font-size: 2.5rem;
    padding: 8px;
  }

  .preview-wrapper-pc {
    display: none;
  }

  .preview-wrapper-phone {
    display: flex;
    flex-direction: column;
    /* overflow: hidden; */
    overflow: auto;
    box-sizing: border-box;
    max-width: 100%;
    background-color: #f4f4f4;
    position: absolute;
    width: 100%;
    /* height: 100%; */
    top: 0;
    right: -100vw;
    bottom: 0;
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

/* Preview styling */
::v-deep .preview > * {
  margin-bottom: 1em;
}

::v-deep .preview h1 {
  font-size: 2rem;
  border-bottom: 2px solid #ccc;
  padding-bottom: 5px;
}

::v-deep .preview h2 {
  font-size: 1.6rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
}

::v-deep .preview h3 {
  font-size: 1.44em;
}

::v-deep .preview p {
  line-height: 1.5;
}

::v-deep .preview blockquote {
  border-left: 4px solid #ccc;
  padding-left: 1rem;
  color: #666;
  margin: 1rem 0;
  font-style: italic;
  background-color: #f9f9f9;
}

::v-deep .preview code {
  padding: 2px 4px;
  border-radius: 4px;
  font-family: 'Courier New', Courier, monospace;
}

/* :deep(.preview pre) { */
::v-deep .preview pre {
  background-color: #2d2d2d !important;
  color: #ccc;
  padding: 1rem;
  overflow: auto;
  border-radius: 4px;
}

::v-deep .preview pre,
::v-deep .preview pre code {
  background-color: #2d2d2d !important;
}

::v-deep .preview ul,
::v-deep .preview ol {
  margin-left: 1.5rem;
}

::v-deep .preview li {
  margin-bottom: 0.5rem;
}

::v-deep .preview a {
  color: #3498db;
  text-decoration: none;
}

::v-deep .preview a:hover {
  text-decoration: underline;
}

::v-deep .preview img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 1.5rem auto;
}

::v-deep .preview table {
  border-collapse: collapse;
  margin: 10px 0;
}

::v-deep .preview th,
::v-deep .preview td {
  border: 1px solid #dddddd;
  padding: 8px;
  text-align: left;
  min-width: 160px;
}

::v-deep .preview th {
  background-color: #f4f4f4;
  font-weight: bold;
}

::v-deep .preview pre {
  white-space: pre; /* Ensure long lines are not wrapped */
  overflow-x: auto; /* Should already be set but keep it to be sure */
}

::v-deep .preview code {
  white-space: pre;
}

::v-deep .preview table,
::v-deep .preview img {
  max-width: none;
}
</style>
