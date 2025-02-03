// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['./assests/css/main.css',
        './assests/css/fonts.css',
        './assests/styles/tailwind.css',
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
