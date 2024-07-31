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
  return `/acteur/${fiche.slug}`
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
        <NuxtLink :to="link">
          <span aria-hidden="true" class="absolute inset-0"></span>
          {{ fiche.societe }}
        </NuxtLink>
        <span class="text-base text-gray-600">{{ fiche.localite }} - {{ fiche.rue }} {{ fiche.numero }}</span>
        <span class="text-sm italic text-gray-500">{{ fiche.telephone }} {{ fiche.gsm }}</span>
      </h3>
      <p class="text-base text-carto-gray300 mr-2 prose lg:prose-xl" v-if="fiche.comment1">
        {{ fiche.comment1 }}
      </p>
      <p class="block mt-2 prose lg:prose-xl">
        <span v-for="secteur in fiche.secteurs" class="text-base text-carto-gray200 mr-2">{{ secteur }}</span>
      </p>
    </div>
  </article>
</template>