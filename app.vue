<script setup lang="ts">
const title = `Professional Photographer/Videographer in Kolkata`
const description = `Elevate your visual storytelling with professional photographer/videographer Aratrik Nandy. 
From timeless portraits to cinematic narratives, experience the art of visual mastery. 
Book Aratrik Nandy for unparalleled creativity and impeccable craftsmanship.`
const url = "https://redcatpictures.com"

useHead({
  link: [
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
})

useSeoMeta({
  ogType: "profile",
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: url + "/previews/landing.webp",
  ogImageWidth: 1280,
  ogImageHeight: 640,
  ogUrl: url,
  fbAppId: 966242223397117,
  twitterCard: "summary_large_image",
  colorScheme: "light dark",
})

useSchemaOrg([
  definePerson({
    name: "Aratrik Nandy",
    description: "He is a Professional Photographer/Videographer",
    image: url + "/logo.png",
    sameAs: [
      "https://www.instagram.com/photos_by_aratrik/",
      "https://www.facebook.com/profile.php?id=100084481593671"
    ],
  }),
  defineLocalBusiness({
    name: "Aratrik Nandy",
    address: {
      streetAddress: "RN Bhattacharya Road, Kumorpara 2nd Lane",
      addressLocality: "Kolkata",
      addressRegion: "WB",
      postalCode: "700146",
      addressCountry: "IN",
    },
    image: url + "/logo.png",
  }),
  defineWebPage({
    datePublished: new Date(2024, 1, 1).toISOString(),
    dateModified: new Date(2024, 1, 1).toISOString(),
    author: "Shirsendu Bairagi",
  }),
  defineWebSite({
    url: url,
    name: title,
    description: description,
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
  @apply block w-[6px] bg-light-400 dark:bg-dark-400;
}

*::-webkit-scrollbar-thumb {
  @apply rounded-md bg-light-600 dark:bg-dark-600;
}

html {
  @apply relative scroll-smooth overflow-x-hidden;
}

body {
  @apply relative min-h-screen font-body text-black dark:text-white bg-light-400 dark:bg-dark-400 overflow-x-hidden;
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