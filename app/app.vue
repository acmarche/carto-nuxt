<script setup>
const config = useRuntimeConfig()
useHead({
  link: [
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      href: `${config.public.NUXT_APP_BASE_URL}favicon/apple-touch-icon.png`,
      sizes: '180x180'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: `${config.public.NUXT_APP_BASE_URL}favicon/favicon-32x32.png`,
      sizes: '32x32'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: `${config.public.NUXT_APP_BASE_URL}favicon/favicon-16x16.png`,
      sizes: '16x16'
    },
    {rel: 'manifest', type: 'image/png', href: `${config.public.NUXT_APP_BASE_URL}favicon/site.webmanifest`}
  ],
})
useSeoMeta({
  titleTemplate: (title) => `${title} | Circuit court - Producteurs locaux - Marche-en-Famenne`,
  ogTitle: (title) => `${title} | Circuit court - Producteurs locaux - Marche-en-Famenne`,
  description: (description) => description ?? 'Vous trouvez de nombreux produits locaux:fraise, fromage, glace, légume, bière, viande, pain, farine...',
  ogDescription: (description) => description ?? 'Vous trouvez de nombreux produits locaux:fraise, fromage, glace, légume, bière, viande, pain, farine...',
  ogUrl: (url) => url ?? 'https://circuit-court.marche.be',
  ogImage: (image) => image ?? 'https://circuit-court.marche.be/images/screenshot.png',
  twitterTitle: (title) => `${title} | Circuit court - Producteurs locaux - Marche-en-Famenne`,
  twitterDescription: (description) => description ?? 'Vous trouvez de nombreux produits locaux:fraise, fromage, glace, légume, bière, viande, pain, farine...',
  twitterImage: (image) => image ?? 'https://circuit-court.marche.be/images/screenshot.png',
  applicationName: 'Circuit court',
  ogLocale: 'fr_FR',
  twitterCard: 'summary_large_image',
})
</script>
<template>
  <NuxtLoadingIndicator/>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>