import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      redirect: '/projects/javascript-calculator',
      components: {
        default: HomeView, // stays in background
        overlay: () => import('@/views/ProjectsView.vue'), // overlay in front
      },
      children: [
        {
          path: '/projects/javascript-calculator',
          components: {
            default: HomeView,
            overlay: () => import('@/projects/JavascriptCalculator.vue'),
          },
        },
        {
          path: '/projects/random-quote-machine',
          components: {
            default: HomeView,
            overlay: () => import('@/projects/RandomQuoteMachine.vue'),
          },
        },
        {
          path: '/projects/markdown-previewer',
          components: {
            default: HomeView,
            overlay: () => import('@/projects/MarkdownPreviewer.vue'),
          },
        },
        {
          path: '/projects/drum-machine',
          components: {
            default: HomeView,
            overlay: () => import('@/projects/DrumMachine.vue'),
          },
        },
        {
          path: '/projects/pomodoro-timer',
          components: {
            default: HomeView,
            overlay: () => import('@/projects/PomodoroTimer.vue'),
          },
        },
      ],
    },
    {
      path: '/test',
      name: 'test',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/TestView.vue'),
    },
  ],
})

export default router
