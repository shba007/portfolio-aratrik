<script setup lang="ts">
useHead({
  title: "Aratrik Nandy",
  link: [
    {
      rel: 'canonical',
      href: 'https://aratrik-nandy.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: 'anonymous',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Oxanium:wght@300;400;500&display=swap',
    },
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  ogType: "profile",
  title: "Aratrik Nandy",
  ogTitle: "Aratrik Nandy",
  description: "I am a professional photographer, this is my portfolio showcasing my skills, projects, and expertise in a visually appealing manner",
  ogDescription: "I am a professional photographer, this is my portfolio showcasing my skills, projects, and expertise in a visually appealing manner",
  ogImage: "https://aratrik-nandy.dev/previews/landing.jpg",
  ogImageWidth: 1280,
  ogImageHeight: 640,
  ogUrl: 'https://aratrik-nandy.com',
  fbAppId: 966242223397117,
  twitterCard: "summary_large_image",
})

useSchemaOrg([
  definePerson({
    name: "Aratrik Nandy",
    description: "I am a professional photographer",
    image: "https://aratrik-nandy.com/logo.png",
    sameAs: [
      "https://www.instagram.com/photos_by_aratrik/",
      "https://www.facebook.com/profile.php?id=100084481593671"
    ],
  }),
  defineWebSite({
    name: "Aratrik Nandy",
    description: "I am a professional photographer, this is my portfolio showcasing my skills, projects, and expertise in a visually appealing manner",
  }),
  defineWebPage({
    datePublished: new Date(2023, 11, 22).toISOString(),
    dateModified: new Date(2023, 11, 22).toISOString(),
    author: "Shirsendu Bairagi",
  }),
])
</script>

<template>
  <NuxtPwaManifest />
  <!-- <NuxtLoadingIndicator /> -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
  scrollbar-width: 6px
}

*::-webkit-scrollbar {
  @apply block w-[6px] bg-dark-400;
}

*::-webkit-scrollbar-thumb {
  @apply rounded-md bg-dark-600;
}

html {
  scroll-behavior: smooth;
}

body {
  @apply min-h-screen font-body text-white bg-dark-400 overflow-x-hidden;
}

.nuxt-icon>svg {
  @apply !m-0;
}

.scrollbar-hidden {
  -ms-overflow-style: none;
  /* Internet Explorer 10+ */
  scrollbar-width: none;
  /* Firefox */
}

.scrollbar-hidden::-webkit-scrollbar {
  display: none;
  /* Safari and Chrome */
}
</style>