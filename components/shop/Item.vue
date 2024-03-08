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
    <div class="flex flex-1 flex-col space-y-2 p-4 h-60">
      <h3 class="text-xl text-carto-gray300 roboto-bold">
        <NuxtLink to="link" target="_blank">
          <span aria-hidden="true" class="absolute inset-0"></span>
          {{ fiche.societe }}
        </NuxtLink>
      </h3>
      <p>
        <span v-for="secteur in fiche.secteurs" class="text-base text-carto-gray200 mr-2">{{ secteur }}</span>
      </p>
      <p>
        <span v-for="tag in fiche.tags" class="text-base text-carto-gray200 mr-2">{{ tag }}</span>
      </p>
      <div class="flex flex-1 flex-col justify-end">
        <p class="text-base font-medium text-gray-900">{{ fiche.localite }} <br/>{{ fiche.rue }} {{ fiche.numero }}</p>
        <p class="text-sm italic text-gray-500">{{ fiche.telephone }} {{ fiche.mobile }}</p>
      </div>
    </div>
  </article>
</template>