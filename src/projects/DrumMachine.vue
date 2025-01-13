<template>
  <div class="drum-machine-app">
    <div id="drum-machine" class="drum-machine">
      <!-- Controls Section -->
      <section class="controls-section">
        <!-- Display -->
        <div id="display" class="display-container">
          <transition name="fade">
            <p v-if="displayText" class="display-text">
              {{ displayText }}
            </p>
          </transition>
        </div>

        <!-- Volume Slider -->
        <div class="volume-container">
          <IconMdiVolumeOff
            v-if="volume == 0"
            @click="muteVolume"
            class="drum-machine-volume-icon"
          ></IconMdiVolumeOff>
          <IconMdiVolumeHigh
            v-else
            @click="muteVolume"
            class="drum-machine-volume-icon"
          ></IconMdiVolumeHigh>

          <!-- <i
            class="fa-solid volume-icon"
            :class="volume.value == 0 ? 'fa-volume-off' : 'fa-volume-high'"
            @click="muteVolume"
          ></i> -->
          <input
            type="range"
            id="volume"
            class="volume-slider"
            v-model="volume"
            min="0"
            max="100"
            @input="updateVolumeSlider"
          />

          <!-- Bank Button -->
          <div class="bank-btn-container">
            <input class="toggle" type="checkbox" @change="handleCheckboxChange" />
          </div>
        </div>
      </section>

      <hr />

      <!-- Drum Pads Section -->
      <section class="drum-pads-section">
        <button
          v-for="drumpad in drumPads"
          :key="drumpad.id"
          :id="drumpad.name"
          class="drum-pad"
          @click="drumpad.action"
        >
          {{ drumpad.label }}

          <!-- Audio -->
          <audio
            class="clip"
            :id="drumpad.id"
            :ref="(el) => setAudioRef(el, drumpad.ref)"
            :src="drumpad.source"
            preload="auto"
          ></audio>
        </button>
      </section>
    </div>
  </div>
</template>

<script setup>
/**
 * README
 * This app is made as part of freeCodeCamp.org's Front End Development Libraries Certificate projects:
 * https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-drum-machine
 *
 * https://github.com/CanBoztepe
 * https://www.freecodecamp.org/CanBoztepe
 */

import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'

const volume = ref(10)
const volumeOld = ref(10)
const displayText = ref('Hello :)')
const fadeTimeout = ref(null)

// We'll store references to each audio element in a reactive object
// keyed by something like 'audio1', 'audio2', etc.
const audioRefs = reactive({})

const drumPads = ref([])

// Sound banks
const soundBank1 = [
  {
    source: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3',
    name: 'Heater 1',
  },
  {
    source: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3',
    name: 'Heater 2',
  },
  {
    source: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3',
    name: 'Heater 3',
  },
  {
    source: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3',
    name: 'Heater 4',
  },
  {
    source: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3',
    name: 'Clap',
  },
  {
    source: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3',
    name: 'Open-HH',
  },
  {
    source: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3',
    name: "Kick-n'-Hat",
  },
  {
    source: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3',
    name: 'Kick',
  },
  {
    source: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3',
    name: 'Closed-HH',
  },
]

const soundBank2 = [
  {
    source: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
    name: 'Chord 1',
  },
  {
    source: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
    name: 'Chord 2',
  },
  {
    source: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
    name: 'Chord 3',
  },
  {
    source: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
    name: 'Shaker',
  },
  {
    source: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
    name: 'Open HH',
  },
  {
    source: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
    name: 'Closed HH',
  },
  {
    source: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
    name: 'Punchy Kick',
  },
  {
    source: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
    name: 'Side Stick',
  },
  {
    source: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
    name: 'Snare',
  },
]

// Setup function to capture refs to audio elements
function setAudioRef(el, refName) {
  if (el) audioRefs[refName] = el
}

// define default values for drumPads
drumPads.value = [
  { id: 'Q', label: 'Q', action: handleButton1, ref: 'audio1' },
  { id: 'W', label: 'W', action: handleButton2, ref: 'audio2' },
  { id: 'E', label: 'E', action: handleButton3, ref: 'audio3' },
  { id: 'A', label: 'A', action: handleButton4, ref: 'audio4' },
  { id: 'S', label: 'S', action: handleButton5, ref: 'audio5' },
  { id: 'D', label: 'D', action: handleButton6, ref: 'audio6' },
  { id: 'Z', label: 'Z', action: handleButton7, ref: 'audio7' },
  { id: 'X', label: 'X', action: handleButton8, ref: 'audio8' },
  { id: 'C', label: 'C', action: handleButton9, ref: 'audio9' },
]

onMounted(() => {
  document.addEventListener('keydown', handleKeyPress)
  // Set default sound bank to soundBank1
  drumPads.value.forEach((item, index) => {
    item.source = soundBank1[index].source
    item.name = soundBank1[index].name
  })
  // Also set initial volume on each audio
  updateAllVolumes()
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeyPress)
})

// --------------------------------------------------
// Methods
// --------------------------------------------------

// Volume methods
function updateVolumeSlider() {
  updateDisplay(`Volume ${volume.value}%`)
  updateAllVolumes()
}

function muteVolume() {
  if (volume.value < 1 && volumeOld.value < 1) {
    volume.value = 20
    volumeOld.value = 20
  } else if (volume.value < 1 && volumeOld.value > 0) {
    volume.value = volumeOld.value
  } else if (volume.value > 0) {
    volumeOld.value = volume.value
    volume.value = 0
  }
  updateDisplay(`Volume ${volume.value}%`)
  updateAllVolumes()
}

function updateAllVolumes() {
  drumPads.value.forEach((drumpad) => {
    const audioEl = audioRefs[drumpad.ref]
    if (audioEl) {
      audioEl.volume = volume.value / 100
    }
  })
}

// Display Text Update
function updateDisplay(text) {
  displayText.value = text
  if (fadeTimeout.value) {
    clearTimeout(fadeTimeout.value)
  }
  fadeTimeout.value = setTimeout(() => {
    displayText.value = ''
    fadeTimeout.value = null
  }, 1000)
}

// Sound bank switch
function handleCheckboxChange(event) {
  const isChecked = event.target.checked

  if (isChecked) {
    drumPads.value.forEach((item, index) => {
      item.source = soundBank2[index].source
      item.name = soundBank2[index].name
    })
    updateDisplay('Sound Bank 2')
  } else {
    drumPads.value.forEach((item, index) => {
      item.source = soundBank1[index].source
      item.name = soundBank1[index].name
    })
    updateDisplay('Sound Bank 1')
  }
}

// Drumpad Button Methods
function handleButton1() {
  playAudio('audio1', 0)
}
function handleButton2() {
  playAudio('audio2', 1)
}
function handleButton3() {
  playAudio('audio3', 2)
}
function handleButton4() {
  playAudio('audio4', 3)
}
function handleButton5() {
  playAudio('audio5', 4)
}
function handleButton6() {
  playAudio('audio6', 5)
}
function handleButton7() {
  playAudio('audio7', 6)
}
function handleButton8() {
  playAudio('audio8', 7)
}
function handleButton9() {
  playAudio('audio9', 8)
}

function playAudio(refName, index) {
  const audioEl = audioRefs[refName]
  if (!audioEl) return
  audioEl.currentTime = 0
  audioEl.play()
  updateDisplay(drumPads.value[index].name)
}

// Keypress
function handleKeyPress(event) {
  const keyName = event.key.toLowerCase()
  switch (keyName) {
    case 'q':
      handleButton1()
      break
    case 'w':
      handleButton2()
      break
    case 'e':
      handleButton3()
      break
    case 'a':
      handleButton4()
      break
    case 's':
      handleButton5()
      break
    case 'd':
      handleButton6()
      break
    case 'z':
      handleButton7()
      break
    case 'x':
      handleButton8()
      break
    case 'c':
      handleButton9()
      break
    default:
      break
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Parkinsans:wght@300..800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

.no-select {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.drum-machine-app {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(287deg, rgba(139, 139, 140, 1) 25%, rgba(113, 114, 115, 1) 76%);
  background-size: cover;
  color: #f4f4f4;
  position: relative;
  bottom: 0;
}

/* Drum machine and sections */
.drum-machine {
  background-color: #404145;
  border: 2px solid black;
  border-radius: 5px;
  width: 400px;
  padding: 12px;
}

/*.controls-section {
} */

hr {
  border: none;
  border-bottom: 1px solid grey;
  margin: 18px;
}

.drum-pads-section {
  aspect-ratio: 1 / 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px;
}

/* Display */
.display-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 18px 36px;
  margin-bottom: 0;
  border: 2px solid white;
  border-radius: 5px;
  height: 52px;
}

.display-text {
  font-family: 'Parkinsans', serif;
  font-weight: 500;
  font-size: 1.2rem;
  padding: 12px;
  width: 220px;
  text-align: center;
  white-space: nowrap;
}

/* text fade out */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Volume Slider */
.volume-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 18px;
  margin-bottom: 0;
}

.drum-machine-volume-icon {
  margin-right: 12px;
  padding: 0 6px;
  font-size: 3rem;
  width: 60px;
  height: 40px;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 8px;
  background: linear-gradient(135deg, #2e2f33, #3a3d42);
}

.volume-slider {
  width: 100%;
  outline: none;
}

input[type='range'] {
  appearance: none;
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  background: white;
  cursor: pointer;
  border-radius: 5px;
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 32px;
  background: linear-gradient(135deg, #2e2f33, #3a3d42);
  border-radius: 5px;
  border: 2px solid white;
}

input[type='range']:hover {
  background: #ccc;
}

.bank-btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Toggle switch from: https://danklammer.com/articles/simple-css-toggle-switch */
.toggle {
  font-size: 10px;
  appearance: none;
  position: relative;
  display: inline-block;
  box-sizing: content-box;
  width: 4.5em;
  height: 2em;
  padding: 0.2em;
  border: none;
  cursor: pointer;
  border-radius: 1.5em;
  overflow: hidden;
  background-color: #d90007;
  transition: background ease 0.3s;
  margin-left: 12px;
  outline: none;
}

.toggle:before {
  content: '';
  display: block;
  position: absolute;
  z-index: 2;
  width: 2em;
  height: 2em;
  font-family: system-ui;
  font-size: 1em;
  line-height: 2em;
  font-weight: 500;
  text-transform: uppercase;
  text-indent: -2em;
  word-spacing: 2.55em;
  text-shadow: -1px -1px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
  background: #fff;
  color: #fff;
  border-radius: 1.5em;
  outline: none;
  transition: transform cubic-bezier(0.3, 1.5, 0.7, 1) 0.3s;
}

.toggle:checked {
  background-color: #d90007;
  outline: none;
}

.toggle:checked:before {
  transform: translateX(2.5em);
  outline: none;
}

/* Individual Drum Pads */
.drum-pad {
  background: linear-gradient(135deg, #2e2f33, #3a3d42);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  color: white;
  width: 100%;
  height: 100%;
  border: 2px solid red;
  border-radius: 6px;
  font-family: 'Parkinsans', serif;
  font-weight: 500;
  font-size: 1.4rem;
  cursor: pointer;
  outline: none;
  transition: all 0.3 ease-in-out;
}

.drum-pad:active {
  background: linear-gradient(135deg, #242527, #2e2f33);
  border: 2px solid DarkRed;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  transform: translateY(2px);
}

/* Responsive */
@media only screen and (max-width: 768px) {
  html,
  body {
    background: #404145;
  }
  .drum-machine {
    background-color: #404145;
    border: none;
    border-radius: 0;
    width: 500px;
    padding: 5vw;
    display: flex;
    flex-direction: column;
  }
}

@media only screen and (max-width: 500px) {
  .drum-machine {
    padding: 2vw;
    width: 90vw;
  }
  .display-text {
    font-weight: 500;
    padding: 12px;
    width: 220px;
    height: 3rem;
    text-align: center;
  }
}
</style>
