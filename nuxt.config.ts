// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  devtools: { enabled: true },

  alias:{ "@": resolve(__dirname,"/"), },

  modules: ['@nuxtjs/tailwindcss'],

  // css: ["~/assets/css/tailwind.css"]

  // postcss: {
  //   plugins: {
  //     tailwindcss: {},
  //     autoprefixer: {},
  //   },
  // },

  app: {
    head: {
      title: 'Nuxt Dojo',
      meta: [
        {name: 'description', content: 'Everything about nuxt 3' }
      ],
      link: [
        {rel: 'stylesheet' , href: 'https://fonts.googleapis.com/css2?family=Material+Icons'}
      ]
    }
  },

  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
  }
})
