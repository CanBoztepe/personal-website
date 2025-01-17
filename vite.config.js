import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    Components({
      resolvers: [
        // Auto-register icon components
        IconsResolver({
          prefix: 'Icon', // optional, default: 'Icon'
        }),
      ],
      // Optionally, you can set a directory for your components
      // dirs: ['src/components'],
    }),

    // Configure unplugin-icons
    Icons({
      autoInstall: true, // Automatically install icon packages when used
    }),
  ],
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://zenquotes.io',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     },
  //   },
  // },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
