// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxtseo/module',
    '@vite-pwa/nuxt',
    '@vueuse/nuxt',
    'nuxt-gtag',
    'nuxt-icons',
  ],
  typescript: {
    shim: false,
  },
  image: {
    format: ['avif', 'webp'],
    width: 1024,
    quality: 80,
  },
  colorMode: {
    preference: 'dark',
    fallback: 'light',
    classSuffix: '',
  },
  site: {
    name: 'Aratrik Nandy',
    url: 'https://redcatpictures.com'
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Red Cat Pictures',
      short_name: 'Red Cat Pictures',
      description: 'Aratrik Nandy is a Professional Photographer/Videographer',
      theme_color: '#CABC7C',
      background_color: '#CABC7C',
      orientation: 'portrait',
      start_url: 'https://redcatpictures.com',
      /* shortcuts: [
        {
          'name': 'Book a Session by call',
          'short_name': 'Book Session (Call)',
          'description': 'Book a photography/videography session by call',
          'url': 'tel:+91801-727-5285',
          'icons': [{ 'src': '/icons/play-later.png', 'sizes': '192x192' }]
        },
        {
          'name': 'Book a Session by whatsapp',
          'short_name': 'Book Session (Whatsapp)',
          'description': 'Book a photography/videography session by whatsapp',
          'url': 'https://wa.me/918017275285',
          'icons': [{ 'src': '/icons/play-later.png', 'sizes': '192x192' }]
        }
      ], */
      icons: [
        {
          src: 'logo-48.png',
          sizes: '48x48',
          type: 'image/png',
        },
        {
          src: 'logo-72.png',
          sizes: '72x72',
          type: 'image/png',
        },
        {
          src: 'logo-96.png',
          sizes: '96x96',
          type: 'image/png',
        },
        {
          src: 'logo-144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: 'logo-192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'logo-512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'logo-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
      screenshots: [
        {
          src: 'screenshot-desktop-1.webp',
          sizes: '1024x576',
          type: 'image/webp',
          form_factor: 'wide',
          label: 'Screenshot 1'
        },
        {
          src: 'screenshot-desktop-2.webp',
          sizes: '1024x576',
          type: 'image/webp',
          form_factor: 'wide',
          label: 'Screenshot 2'
        },
        {
          src: 'screenshot-desktop-3.webp',
          sizes: '1024x576',
          type: 'image/webp',
          form_factor: 'wide',
          label: 'Screenshot 3'
        },
        {
          src: 'screenshot-desktop-4.webp',
          sizes: '1024x576',
          type: 'image/webp',
          form_factor: 'wide',
          label: 'Screenshot 4'
        },
        {
          src: 'screenshot-mobile-1.webp',
          sizes: '576x1024',
          type: 'image/webp',
          form_factor: 'narrow',
          label: 'Screenshot 1'
        },
        {
          src: 'screenshot-mobile-2.webp',
          sizes: '576x1024',
          type: 'image/webp',
          form_factor: 'narrow',
          label: 'Screenshot 2'
        },
        {
          src: 'screenshot-mobile-3.webp',
          sizes: '576x1024',
          type: 'image/webp',
          form_factor: 'narrow',
          label: 'Screenshot 3'
        },
        {
          src: 'screenshot-mobile-4.webp',
          sizes: '576x1024',
          type: 'image/webp',
          form_factor: 'narrow',
          label: 'Screenshot 4'
        },
      ]
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,jpg,png,webp,svg,ico}'],
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 3600,
    },
    devOptions: {
      enabled: false,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },
  gtag: {
    id: 'G-3VHZLRCSY5'
  },
})
