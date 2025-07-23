<script setup>
import {IconNavigation} from "@tabler/icons-vue";

useHead({
  script: [
    {
      src: 'https://unpkg.com/tailwindcss-intersect@2.0.1/dist/observer.min.js',
      tagPosition: 'head',
      defer: true
    }
  ]
})
const config = useRuntimeConfig()
const slug = ref(useRoute().params.slug)
const {
  pendingShop,
  shop,
  errorShop
} = shopGet(slug)
const cover = computed(() => {
  if (shop.value?.logo) {
    return shop.value?.logo
  }
  const image = shop.value?.images.length > 0 ? shop.value.images[0] : null
  if (image)
    return `${config.public.BOTTIN_URL}/bottin/fiches/${shop.value.id}/${image.image_name}`
  if (shop.value?.cap) {
    if (shop.value?.cap.profileMediaPath) {
      return `https://cap.marche.be/${shop.value?.cap.profileMediaPath}`
    }
  }
  return 'https://picsum.photos/1280'
})
const icon = computed(() => {
  const tag = shop?.value?.classements?.length > 0 ? shop.value.classements[0] : null
  if (tag)
    return `${config.public.BOTTIN_URL}/bottin/icons/${tag.icon}`
  return tag
})
const breadcrumb = [
  {name: "Retour à la liste", link: "/acteur", id: 1}
]
const url = useRequestURL()
useSeoMeta({
  title: () => `${shop.value?.societe ?? ''}`,
  ogTitle: () => `${shop.value?.societe} | ${config.public.NUXT_SITE_NAME}`,
  description: () => `${shop.value?.comment1}`,
  ogImage: () => `${cover?.value}`,
  ogUrl: () => url,
  twitterTitle: () => {
    `${shop.value?.societe} | ${config.public.NUXT_SITE_NAME}`
  },
  twitterDescription: () => `${shop.value?.comment1}`,
  twitterImage: () => `${cover?.value}`,
})
</script>
<template>
  <main class="">
    <div v-if="pendingShop">Chargement...</div>
    <div v-else-if="errorShop">{{ errorShop }}</div>
    <div v-else>
      <ShopHeader :cover :icon/>
      <section class="mx-auto max-w-full ms-2 md:ms-24 py-2">
        <WidgetsBreadcrumb :breadcrumb/>
      </section>
      <section class="mx-auto max-w-full ms-2 md:ms-24 py-2 border border-dashed border-gray-400 ">
        <section class="flex flex-col w-full h-full gap-2">
          <WidgetsTitle>{{ shop?.societe ?? 'Chargement' }}</WidgetsTitle>
          <address class="flex w-fit flex-row items-start gap-2 text-carto-gray300 p-6">
            <IconNavigation class="h-12 w-12"/>
            <span>{{ shop.rue }} {{ shop.numero }} <br/> {{ shop.cp }} {{ shop.localite }}</span>
          </address>
          <div class="flex flex-col flex-auto gap-2 p-3">
            <h3 class="lg roboto-bold">INFORMATIONS GÉNÉRALES</h3>
            <div class="max-w-md">
              <ShopContact :shop/>
            </div>
            <ShopSocial :shop/>
            <h3 class="lg lobster-two-bold">SECTEURS</h3>
            <ShopSecteur :shop/>
            <p class="prose lg:prose-xl" v-if="shop.comment1">{{ shop.comment1 }}</p>
            <p class="prose lg:prose-xl" v-if="shop.comment2">{{ shop.comment2 }}</p>
            <p class="prose lg:prose-xl" v-if="shop.comment3">{{ shop.comment3 }}</p>
            <ShopGallery :shop/>
          </div>
        </section>
      </section>
    </div>
  </main>
</template>