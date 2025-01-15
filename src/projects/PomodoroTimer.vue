<template>
  <div class="main-container">
    <h1 class="main-header">Pomodoro Timer</h1>
    <!-- Length controls section -->
    <section
      class="controls-section"
      @mouseover="onControlsHover(true)"
      @mouseout="onControlsHover(false)"
    >
      <!-- Break control -->
      <div class="controls-container">
        <h2 id="break-label" class="control-header">Break Length</h2>
        <div class="control-buttons-div">
          <button
            id="break-increment"
            class="control-button"
            @click="setBreak('inc')"
            :disabled="isRunning"
          >
            <!-- <i class="fa-solid fa-plus fa-2x control-icon"></i> -->
            <IconMdiPlus class="control-icon"></IconMdiPlus>
          </button>
          <p id="break-length" class="control-text">{{ breakLength }}</p>
          <button
            id="break-decrement"
            class="control-button"
            @click="setBreak('dec')"
            :disabled="isRunning"
          >
            <!-- <i class="fa-solid fa-minus fa-2x control-icon"></i> -->
            <IconMdiMinus class="control-icon"></IconMdiMinus>
          </button>
        </div>
      </div>

      <!-- Session control -->
      <div class="controls-container">
        <h2 id="session-label" class="session-header">Session Length</h2>
        <div class="control-buttons-div">
          <button
            id="session-increment"
            class="control-button"
            @click="setSession('inc')"
            :disabled="isRunning"
          >
            <IconMdiPlus class="control-icon"></IconMdiPlus>
            <!-- <i class="fa-solid fa-plus fa-2x control-icon"></i> -->
          </button>
          <p id="session-length" class="control-text">{{ sessionLength }}</p>
          <button
            id="session-decrement"
            class="control-button"
            @click="setSession('dec')"
            :disabled="isRunning"
          >
            <!-- <i class="fa-solid fa-minus fa-2x control-icon"></i> -->
            <IconMdiMinus class="control-icon"></IconMdiMinus>
          </button>
        </div>
      </div>
    </section>

    <!-- Timer section -->
    <section class="timer-section">
      <!-- Tooltip for button disabled -->
      <div id="tooltip" class="tooltip" v-show="tooltipVisible">
        Buttons are disabled when the clock is running :)
      </div>

      <h2 id="timer-label" class="timer-header">{{ breakOrSession }}</h2>
      <p id="time-left" class="timer-display">{{ formattedTime }}</p>
      <div class="timer-buttons-div">
        <!-- Play/Pause button -->
        <button id="start_stop" class="timer-button" @click="playPause">
          <IconMdiPause class="timer-button-icon" v-show="isRunning"></IconMdiPause>
          <IconMdiPlay class="timer-button-icon" v-show="!isRunning"></IconMdiPlay>
          <!-- <i class="fa-solid fa-pause fa-3x timer-button-icon" v-show="isRunning"></i>
          <i class="fa-solid fa-play fa-3x timer-button-icon" v-show="!isRunning"></i> -->
        </button>

        <!-- Reset button -->
        <button id="reset" class="timer-button" @click="resetTimer">
          <IconMdiRefresh class="timer-button-icon"></IconMdiRefresh>
          <!-- <i class="fa-solid fa-refresh fa-3x timer-button-icon"></i> -->
        </button>
      </div>
    </section>

    <!-- Beep sound -->
    <audio
      id="beep"
      ref="beepAudio"
      src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"
      preload="auto"
    ></audio>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeUnmount } from 'vue'

// Reactive state
const breakLength = ref(5)
const sessionLength = ref(25)
const remainingTime = ref(1500) // 1500 seconds = 25 minutes
const isRunning = ref(false)
const isBreak = ref(false)
const intervalId = ref(null)
const tooltipVisible = ref(false)

// We reference our audio element
const beepAudio = ref(null)

// ----- Methods -----

function setSession(arg) {
  if (arg === 'inc' && sessionLength.value < 60) {
    sessionLength.value++
  } else if (arg === 'dec' && sessionLength.value > 1) {
    sessionLength.value--
  }
  // reset remainingTime to updated sessionLength
  remainingTime.value = sessionLength.value * 60
}

function setBreak(arg) {
  if (arg === 'inc' && breakLength.value < 60) {
    breakLength.value++
  } else if (arg === 'dec' && breakLength.value > 1) {
    breakLength.value--
  }
}

function resetTimer() {
  clearInterval(intervalId.value)
  intervalId.value = null
  breakLength.value = 5
  sessionLength.value = 25
  remainingTime.value = 1500
  isBreak.value = false
  isRunning.value = false

  // Pause and reset audio
  if (beepAudio.value) {
    beepAudio.value.pause()
    beepAudio.value.currentTime = 0
  }
}

function playPause() {
  // If NOT running / PLAY
  if (!isRunning.value) {
    isRunning.value = true
    intervalId.value = setInterval(() => {
      remainingTime.value--

      // When remainingTime < 0, switch
      if (remainingTime.value < 0) {
        playBeep()
        if (isBreak.value) {
          remainingTime.value = sessionLength.value * 60
          isBreak.value = false
        } else {
          remainingTime.value = breakLength.value * 60
          isBreak.value = true
        }
      }
    }, 1000)

    // If running / PAUSE
  } else {
    clearInterval(intervalId.value)
    intervalId.value = null
    isRunning.value = false
  }
}

function playBeep() {
  if (beepAudio.value) {
    beepAudio.value.currentTime = 2
    beepAudio.value.volume = 0.2
    beepAudio.value.play()
  }
}

function numberFormatter(number) {
  return number < 10 ? '0' + number : number
}

// Handle tooltip visibility
function onControlsHover(hovering) {
  if (isRunning.value) {
    tooltipVisible.value = hovering
  } else {
    tooltipVisible.value = false
  }
}

// ----- Computed properties -----

const formattedTime = computed(() => {
  const minutes = Math.floor(remainingTime.value / 60)
  const seconds = remainingTime.value % 60
  return `${numberFormatter(minutes)}:${numberFormatter(seconds)}`
})

const breakOrSession = computed(() => {
  return isBreak.value ? 'Break' : 'Session'
})

// Cleanup interval if component is unmounted
onBeforeUnmount(() => {
  clearInterval(intervalId.value)
  intervalId.value = null
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@600&family=Martian+Mono:wght@500&display=swap');

/* html {
  height: 100%;
  color: #ffffff;
  font-family: 'Lexend', serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  height: 100%;
  background-color: #1f1f1f;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
} */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

button {
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

i {
  color: orange;
}

h1,
h2 {
  text-align: center;
}

/* Main Container */
.main-container {
  height: 100%;
  color: #ffffff;
  font-family: 'Lexend', serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  background-color: #1f1f1f;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}
.main-header {
  font-size: 3em;
  border-bottom: 1px solid white;
  padding: 5px;
}

/* Length control */
.controls-section {
  display: flex;
  flex-direction: row-reverse;
  gap: 20px;
  justify-content: space-between;
}

.controls-container {
  width: 200px;
}

/* .control-header {
} */

.control-buttons-div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin: 5px;
}

.control-button {
  border: 3px solid orange;
  border-radius: 50%;
  cursor: pointer;
  width: 44px;
  height: 44px;
}

.control-button:active {
  background-color: #3c3c3c;
}

.control-icon {
  color: orange;
  font-size: 2rem;
}

.control-text {
  font-size: 3rem;
  width: 64px;
  text-align: center;
}

/* Timer */
.timer-section {
  margin-top: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.timer-header {
  font-size: 3rem;
}
.timer-display {
  font-family: 'Martian Mono', serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-variation-settings: 'wdth' 100;
  font-size: 4rem;
}
.timer-buttons-div {
  display: flex;
  gap: 30px;
}

.timer-button {
  border: none;
  cursor: pointer;
  padding: 5px;
}

.timer-button-icon {
  /* width: 36px; */
  color: orange;
  font-size: 3rem;
}

/* Tooltop for buttons disabled */
.tooltip {
  position: absolute;
  top: -2rem;
  border: 1px solid white;
  border-radius: 5px;
  text-align: center;
  padding: 5px;
  width: 420px;
  white-space: nowrap;
}

/* Responsive */
@media only screen and (max-width: 1024px) {
}
@media only screen and (max-width: 500px) {
  .controls-section {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }

  .tooltip {
    width: 300px;
    font-size: 0.7rem;
    /* transform: translateY(4.5rem); */
  }
}
@media only screen and (max-width: 360px) {
  .main-header {
    border: none;
  }
}
</style>
