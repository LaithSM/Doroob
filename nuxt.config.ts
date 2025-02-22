// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import path from 'path'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['./assets/css/main.css',
        '~/assets/css/fonts.css',
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  target: 'static',
  ssr: false,
  nitro: {
    static: true,
    output: {
      publicDir: path.join(__dirname, '../molPortal/statics/individual-frontend/public')
    }
  }
})
