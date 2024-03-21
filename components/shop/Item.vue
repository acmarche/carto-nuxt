<script setup>
const config = useRuntimeConfig()
const {fiche} = defineProps({
  fiche: {
    type: Object,
    required: true
  }
})

const image = computed(() => {
  if (fiche.image)
    return `${config.public.BOTTIN_URL}/${fiche.image}`
  if (fiche.cap) {
    if (fiche.cap.profileMediaPath) {
      return `https://cap.marche.be/${fiche.cap.profileMediaPath}`
    }
  }

  return 'https://picsum.photos/1280'
})

const link = computed(() => {
  if (fiche.facebook) {
    return fiche.facebook
  }

  if (fiche.instagram) {
    return fiche.instagram
  }

  if (fiche.website) {
    return fiche.website
  }

  if (fiche.tiktok) {
    return fiche.tiktok
  }

  if (fiche.twitter) {
    return fiche.twitter
  }

  return fiche.url_cap
})
</script>
<template>
  <article>
    <div class="aspect-square w-full bg-gray-200 group-hover:opacity-75 h-80 md:h-96">
      <img :src="image"
           :alt="fiche.societe"
           class="h-full w-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105">
    </div>
    <div class="flex flex-1 flex-col space-y-2 p-2 h-72">
      <h3 class="text-xl text-carto-gray300 roboto-bold flex flex-col">
        <NuxtLink :to="link" target="_blank">
          <span aria-hidden="true" class="absolute inset-0"></span>
          {{ fiche.societe }}
        </NuxtLink>
        <span class="text-base text-gray-600">{{ fiche.localite }} - {{ fiche.rue }} {{ fiche.numero }}</span>
        <span class="text-sm italic text-gray-500">{{ fiche.telephone }} {{ fiche.mobile }}</span>
      </h3>
      <p class="text-base text-carto-gray200 mr-2" v-if="fiche.comment1">
        {{ fiche.comment1 }}
      </p>
      <p class="block mt-2">
        <span v-for="secteur in fiche.secteurs" class="text-base text-carto-gray200 mr-2">{{ secteur }}</span>
      </p>
    </div>
  </article>
</template>