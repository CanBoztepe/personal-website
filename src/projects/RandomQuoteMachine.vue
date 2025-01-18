<template>
  <div class="random-quote-app">
    <!-- Navbar -->
    <!-- <nav class="navbar">
      <h1 class="navbar-title geist-mono-title">RANDOM QUOTE MACHINE</h1>
    </nav> -->

    <main id="quote-box">
      <!-- Quote Text -->
      <Transition mode="out-in">
        <div id="quote-text" :key="quote">
          <span id="text">
            <i class="fa fa-quote-left"></i>
            {{ quote }}
          </span>
        </div>
      </Transition>

      <!-- Quote Author -->
      <Transition mode="out-in">
        <div id="author" :key="author">
          <span id="author-text">{{ author }}</span>
        </div>
      </Transition>

      <!-- Buttons -->
      <div id="buttons-div">
        <!-- Twitter Icon -->
        <a
          id="tweet-quote"
          :href="tweetLink"
          target="_blank"
          rel="noopener noreferrer"
          title="Share this quote on X!"
        >
          <!-- <i class="fa-brands fa-x-twitter fa-2x"></i> -->
          <IconMditwitter class="twitter-icon"></IconMditwitter>
        </a>

        <!-- New Quote Button -->
        <button
          :class="isLoading ? 'loading' : ''"
          id="new-quote"
          @click="getRandomQuote"
          :disabled="isLoading"
        >
          <span v-show="isLoading" class="loader"></span>
          {{ isLoading ? '' : 'New quote' }}
        </button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

// Configure Axios
// const axiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL,
// })

// console.log(import.meta.env.VITE_API_BASE_URL)

// Reactive variables
const quote = ref('')
const author = ref('')
const isLoading = ref(false)

// Computed property for tweet link
const tweetLink = computed(() => {
  const tweetText = `${quote.value} ${author.value}`
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`
})

// Fetch random quote from the API
async function getRandomQuote() {
  isLoading.value = true
  try {
    const response = await axios.get('/.netlify/functions/fetchQuotes')

    // const response = await axiosInstance.get('/api/random')

    // const response = await axios.get(
    // 'https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random',
    // 'https://zenquotes.io/api/random',
    //   '/api/api/random',
    // )

    const quoteData = response.data
    // const quoteData = response.data[0]

    // Update refs with new quote
    quote.value = ' ' + quoteData.q
    author.value = '- ' + quoteData.a
  } catch (error) {
    console.error('Error fetching quote:', error)
    quote.value = ' Sorry, could not fetch a quote at this time. '
    author.value = ''
  }
  isLoading.value = false
}

// Fetch a quote when component mounts
onMounted(() => {
  getRandomQuote()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Rubik');
@import url('https://fonts.googleapis.com/css?family=Merriweather');
@import url('https://fonts.googleapis.com/css2?family=Geist+Mono:wght@700&display=swap');

/* html {
  height: 100%;

}
body {
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

} */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

.random-quote-app {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Rubik', sans-serif;
  background: rgb(255, 164, 124);
  background: linear-gradient(85deg, rgba(255, 164, 124, 1) 0%, rgba(255, 202, 144, 1) 42%);
}

/* navbar */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #ffb25d;
  height: 47px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.navbar-title {
  margin-left: 52px;
  display: flex;
  align-items: center;
}

.geist-mono-title {
  font-family: 'Geist Mono', monospace;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-size: 1.5em;
  color: #1d1e22;
}

#quote-box {
  border: 2px solid #1d1e22;
  border-radius: 20px;
  padding: 1rem;
  width: 90%;
  max-width: 700px;
  min-width: 400px;
}

/* quote */
#quote-text {
  font-size: 1.5rem;
}

/* author */
#author {
  text-align: right;
  padding-right: 3vw;
  padding-top: 0.8rem;
  padding-bottom: 2rem;
}

#author-text {
  /* font-family: 'Merriweather', sans-serif; */
  font-size: 1.2rem;
  font-weight: bold;
}

/* buttons */
#buttons-div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
}

#tweet-quote:hover {
  cursor: pointer;
  color: black;
}

#new-quote {
  width: 150px;
  background-color: #ffa33e;
  height: 34px;
  padding: 0 2rem;
  border: 2px solid #1d1e22;
  /* border: none; */
  border-radius: 5px;
  font-family: 'Rubik', sans-serif;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: end;
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px; */
}

#new-quote:hover {
  cursor: pointer;
  background-color: #ffb25d;
}

a {
  color: #1d1e22;
}

.twitter-icon {
  font-size: 2em;
}

/* loading spinner */
.loader {
  width: 24px;
  height: 24px;
  border: 3px solid #1d1e22;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* fade animation */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/* responsive */
@media only screen and (max-width: 768px) {
  #quote-box {
    margin: 0.5rem;
  }
  #quote-text {
    font-size: 1.3rem;
  }
}

@media only screen and (max-width: 500px) {
  .navbar {
    box-shadow: none;
  }
  #quote-box {
    border: none;
    padding: 0;
    margin: 0;
    width: 95%;
    min-width: 200px;
  }
  #app {
    width: 100%;
  }
  .geist-mono-title {
    font-size: 1.1em;
  }
  #quote-text {
    font-size: 1.2rem;
    text-align: center;
  }
  #buttons-div {
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
  }
  #new-quote {
    width: 80%;
    height: 38px;
    border: none;
    align-self: auto;
    margin-bottom: 20px;
  }
  #tweet-quote {
    background-color: #7f869b;
    width: 80%;
    height: 38px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }
  #tweet-quote:hover {
    background-color: #969bad;
  }
  i.fa-x-twitter {
    font-size: 1.8em;
  }
}
</style>
