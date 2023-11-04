// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  /* routeRules: {
    '/': { prerender: true },
  }, */
  modules: [
    "@nuxt/image",
    '@nuxtjs/tailwindcss',
    "@nuxtseo/module",
    '@vueuse/nuxt',
    'nuxt-icons',
  ],
  image: {
    format: ['avif', 'webp'],
    width: 1920,
    quality: 80,
  },
  site: {
    url: 'https://aratrik-nandy.me'
  },
})
