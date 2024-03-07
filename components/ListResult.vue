<script setup>
const config = useRuntimeConfig()
defineProps({
  data: {
    type: Object,
    required: true
  }
})

function imageFiche(fiche) {
  if (fiche.image)
    return `${config.public.BOTTIN_URL}/${fiche.image}`
  if (fiche.cap) {
    if (fiche.cap.profileMediaPath) {
      return `https://cap.marche.be/${fiche.cap.profileMediaPath}`
    }
  }

  return 'https://picsum.photos/1280'
}

function urlFiche(fiche) {
  if (fiche.facebook)
    return fiche.facebook
  if (fiche.instagram)
    return fiche.instagram
  if (fiche.website)
    return fiche.website
  if (fiche.tiktok)
    return fiche.tiktok
  if (fiche.twitter)
    return fiche.twitter

  return fiche.url_cap
}
</script>
<style>
.list-enter-active,
.list-leave-active {
  @apply transition-all duration-700 ease-in-out  transform translate-x-0 opacity-100
}

.list-enter-from,
.list-leave-to {
  @apply opacity-0 translate-x-full
}
</style>
<template>
  <section class="relative h-full overflow-hidden rounded-xl border border-dashed border-gray-400 opacity-100">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-8 lg:max-w-full lg:px-8">
      <TransitionGroup name="list" tag="ul"
                       class="grid grid-cols-1 gap-y-4 lg:grid-cols-3 sm:gap-x-6 sm:gap-y-4 lg:gap-x-4">
        <li class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white45"
            v-for="fiche in data.hits" :key="fiche.id">
          <div class="aspect-square bg-gray-200 sm:aspect-none group-hover:opacity-75 h-80 sm:h-96">
            <img :src="imageFiche(fiche)"
                 :alt="fiche.societe"
                 class="h-full w-full object-cover object-center sm:h-full sm:w-full transition-transform duration-500 ease-in-out group-hover:scale-105">
          </div>
          <div class="flex flex-1 flex-col space-y-2 p-4 h-36">
            <h3 class="text-xl text-carto-gray300 roboto-bold">
              <a :href="urlFiche(fiche)" target="_blank">
                <span aria-hidden="true" class="absolute inset-0"></span>
                {{ fiche.societe }}
              </a>
            </h3>
            <p>
              <span v-for="secteur in fiche.secteurs" class="text-base text-carto-gray200 mr-2">{{ secteur }}</span>
            </p>
            <p>
              <span v-for="tag in fiche.tags" class="text-base text-carto-gray200 mr-2">{{ tag }}</span>
            </p>
            <div class="flex flex-1 flex-col justify-end">
              <p class="text-base font-medium text-gray-900">{{ fiche.localite }}</p>
              <p class="text-sm italic text-gray-500">{{ fiche.telephone }} {{ fiche.mobile }}</p>
            </div>
          </div>
        </li>
      </TransitionGroup>
    </div>
  </section>
</template>