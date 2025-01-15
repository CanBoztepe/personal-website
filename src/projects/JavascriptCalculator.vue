<template>
  <div class="javascript-calculator-app">
    <section class="calculator">
      <!-- Display Section -->
      <section class="display-section">
        <p class="formula-text">{{ formulaDisplay }}</p>
        <p id="display" class="output-text">{{ mainDisplay }}</p>
      </section>

      <!-- Buttons Section -->
      <section class="buttons-section">
        <button
          v-for="button in buttons"
          :key="button.label"
          :id="button.id"
          :class="button.class"
          class="grid-button"
          @click="handleButtonClick(button.label)"
        >
          {{ button.label }}
        </button>
      </section>
    </section>
  </div>
</template>

<script setup>
/**
 * README
 * This app is made as part of freeCodeCamp.org's Front End Development Libraries Certificate projects:
 * https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-javascript-calculator
 *
 * https://github.com/CanBoztepe
 * https://www.freecodecamp.org/CanBoztepe
 */

import { ref, onMounted } from 'vue'
import { evaluate } from 'mathjs'

const formulaDisplay = ref('')
const mainDisplay = ref('0')
const result = ref('')
const buttons = ref([]) // Initialized in onMounted()
const error = ref(false)

let numberFormatter = null // Initialized in onMounted()

onMounted(() => {
  // Initialize buttons array
  buttons.value = [
    { label: 'AC', id: 'clear', class: 'span-horizontal ac-button' },
    { label: '÷', id: 'divide', class: 'operator-button' },
    { label: 'x', id: 'multiply', class: 'operator-button' },
    { label: '7', id: 'seven' },
    { label: '8', id: 'eight' },
    { label: '9', id: 'nine' },
    { label: '-', id: 'subtract', class: 'operator-button' },
    { label: '4', id: 'four' },
    { label: '5', id: 'five' },
    { label: '6', id: 'six' },
    { label: '+', id: 'add', class: 'operator-button' },
    { label: '1', id: 'one' },
    { label: '2', id: 'two' },
    { label: '3', id: 'three' },
    { label: '=', id: 'equals', class: 'span-vertical equals-button' },
    { label: '0', id: 'zero', class: 'span-horizontal' },
    { label: '.', id: 'decimal' },
  ]

  // Initialize the number formatter
  numberFormatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
  })
})

// --------------------------------------------------
// Methods
// --------------------------------------------------

// Handle CLick for all buttons (Main hub)
function handleButtonClick(label) {
  if (!error.value) {
    switch (label) {
      case 'AC':
        allCLear()
        break
      case '=':
        equalsInput()
        break
      case '+':
      case '-':
      case 'x':
      case '÷':
        operatorInput(label)
        break
      case '.':
        decimalInput()
        break
      default:
        numberInput(label)
        break
    }
  }
}

// All Clear
function allCLear() {
  formulaDisplay.value = ''
  mainDisplay.value = '0'
  result.value = ''
}

// Handle equals Input
function equalsInput() {
  // do nothing if initial input is =
  if (formulaDisplay.value === '') {
    console.log('did nothing')
    return
  }

  resultCleaner()

  // remove the last character(s) if they are not numbers
  const nanChars = ['·', '÷', '-', '+', '.']
  while (nanChars.includes(formulaDisplay.value.charAt(formulaDisplay.value.length - 1))) {
    formulaDisplay.value = formulaDisplay.value.slice(0, -1)
  }

  // replace "÷" and "·" for correct evaluation
  // add a space if there is double minus ("--" -> "- -")
  let correctedFormula = formulaDisplay.value
    .replace(/÷/g, '/')
    .replace(/·/g, '*')
    .replace(/--/g, '- -')
    .replace(/,/g, '')

  try {
    //  evaluate() might NOT work 100% intended
    // need to implement iframe with eval()?
    // evaluate() from math.js
    const evalResult = evaluate(correctedFormula)
    const formattedResult = numberFormatter.format(evalResult)

    // Digit limit for displaying result
    if (formattedResult.toString().length >= 15) {
      error.value = true
      mainDisplay.value = 'Digit Limit'
      setTimeout(() => {
        allCLear()
        error.value = false
      }, 1200)
    } else {
      result.value = formattedResult
      mainDisplay.value = result.value
      formulaDisplay.value += `=${result.value}`
    }
  } catch (e) {
    console.log(e)
    error.value = true
    mainDisplay.value = 'Error'
    setTimeout(() => {
      allCLear()
      error.value = false
    }, 1200)
  }
}

// Handle operator input
function operatorInput(operator) {
  resultCleaner()

  // remove "." if it's the last character
  if (mainDisplay.value.charAt(mainDisplay.value.length - 1) === '.') {
    formulaDisplay.value = formulaDisplay.value.slice(0, -1)
  }

  // if initial input is an operator, add "0" to the start
  if (formulaDisplay.value === '') {
    formulaDisplay.value = '0'
  }

  // Convert operator symbol before adding to formulaDisplay
  let formulaOperator = operator
  if (operator === 'x') {
    formulaOperator = '·'
  }

  // Input is "-"
  if (formulaOperator === '-') {
    const operators = ['·', '÷', '-', '+']
    // append "-" if the last char of formula is a number
    if (!isNaN(formulaDisplay.value.charAt(formulaDisplay.value.length - 1))) {
      mainDisplay.value = operator
      formulaDisplay.value += formulaOperator

      // DO nothing if the last 2 chars of formula is "--" || "+-" || "·-" || "÷-"
    } else if (
      formulaDisplay.value.endsWith('+-') ||
      formulaDisplay.value.endsWith('·-') ||
      formulaDisplay.value.endsWith('÷-') ||
      formulaDisplay.value.endsWith('--')
    ) {
      console.log('did nothing')

      // append "-" if the last char is an operator and not "--"
    } else if (
      operators.includes(formulaDisplay.value.charAt(formulaDisplay.value.length - 1)) &&
      formulaDisplay.value.slice(-2) !== '--'
    ) {
      mainDisplay.value = operator
      formulaDisplay.value += formulaOperator
    }
  } else {
    // append the operator if the last char of formula is a number
    if (!isNaN(formulaDisplay.value.charAt(formulaDisplay.value.length - 1))) {
      mainDisplay.value = operator
      formulaDisplay.value += formulaOperator

      // if the last 2 chars is "+-" || "·-" || "÷-" || "--", replace it
    } else if (
      formulaDisplay.value.endsWith('+-') ||
      formulaDisplay.value.endsWith('·-') ||
      formulaDisplay.value.endsWith('÷-') ||
      formulaDisplay.value.endsWith('--')
    ) {
      mainDisplay.value = operator
      formulaDisplay.value = formulaDisplay.value.slice(0, -2) + formulaOperator
    } else {
      // else replace the operator
      mainDisplay.value = operator
      formulaDisplay.value = formulaDisplay.value.slice(0, -1) + formulaOperator
    }
  }
}

// Handle Decimal Input
function decimalInput() {
  resultCleaner()

  // Do nothing if there is already a "."
  if (mainDisplay.value.includes('.')) {
    console.log('did nothing')
    return
  }

  // Set digit limit
  if (mainDisplay.value.length >= 15) {
    error.value = true
    const previousDisplay = mainDisplay.value
    mainDisplay.value = 'Digit Limit'
    setTimeout(() => {
      mainDisplay.value = previousDisplay
      error.value = false
    }, 1200)
    return
  }

  // add "0." if formulaDisplay ends with an operator
  if (
    isNaN(formulaDisplay.value.charAt(formulaDisplay.value.length - 1)) &&
    formulaDisplay.value.charAt(formulaDisplay.value.length - 1) !== '.'
  ) {
    formulaDisplay.value += '0.'
    mainDisplay.value = '0.'
  } else {
    // append "."
    mainDisplay.value += '.'
    if (formulaDisplay.value === '') {
      formulaDisplay.value = '0.'
    } else {
      formulaDisplay.value += '.'
    }
  }
}

// Handle number input
function numberInput(number) {
  resultCleaner()

  // if initial input is "0"
  if (number === '0' && mainDisplay.value === '0') {
    formulaDisplay.value = '0'
    return
  }

  // replace mainDisplay if appending a number to "0"
  if (mainDisplay.value === '0' && number !== '0') {
    mainDisplay.value = number
    formulaDisplay.value = number
    return
  }

  // Set digit limit
  if (mainDisplay.value.length >= 15) {
    error.value = true
    const previousDisplay = mainDisplay.value
    mainDisplay.value = 'Digit Limit'
    setTimeout(() => {
      mainDisplay.value = previousDisplay
      error.value = false
    }, 1200)
    return
  }

  // append new number
  mainDisplay.value += number
  formulaDisplay.value += number
}

// Clean the formulaDisplay after "=" is used
function resultCleaner() {
  if (formulaDisplay.value.includes('=')) {
    formulaDisplay.value = result.value.toString()
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.cdnfonts.com/css/digital-7-mono');
/* @import url("https://fonts.cdnfonts.com/css/ds-digital?styles=17998"); */

/* * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
} */

.javascript-calculator-app {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1d1e22;
  padding: 5px;
}

.calculator {
  width: 400px;
}

/* Display Section */
/* .display-section {
} */

.formula-text {
  font-family: 'Digital-7 Mono', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.8em;
  color: orange;
  text-align: right;
  line-height: 70%;
  min-height: 22px;
  max-width: 100%;
  white-space: normal;
  overflow-wrap: break-word;
  word-break: break-all;
  margin: 5px;
}

.output-text {
  font-family: 'Digital-7 Mono', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 3.5em;
  color: white;
  text-align: right;
  line-height: 70%;
  overflow: hidden;
  margin: 5px;
}

/* Buttons Section */
.buttons-section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  height: 400px;
  gap: 1px;
}

/* Individual Button */
.grid-button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.3em;
  border-radius: 0;
  border: none;
  color: #fff;
  background-color: #4d4d4d;
  cursor: pointer;
}
.grid-button:hover {
  border: 1px solid white;
}

.span-horizontal {
  grid-column: span 2;
}
.span-vertical {
  grid-row: span 2;
}
.ac-button {
  background-color: #ac3939;
}
.operator-button {
  background-color: #666;
}
.equals-button {
  background-color: #004466;
}

/* Responsive */
@media only screen and (max-width: 500px) {
  .javascript-calculator-app {
    padding: 0;
  }

  .calculator {
    width: 100%;
    height: 100%;
    /* flex: 1; */
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .buttons-section {
    height: 80%;
  }

  .formula-text {
    font-size: 9vw;
    height: auto;
  }

  .output-text {
    font-size: 14vw;
  }
}
</style>
