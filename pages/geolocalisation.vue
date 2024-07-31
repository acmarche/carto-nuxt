<script setup>
import {IconCurrentLocation} from '@tabler/icons-vue';
import {useGeolocation} from '@vueuse/core'

useSeoMeta({
  title: () => 'Géolocalisation',
})
const filters = ref({localite: null, tags: [], coordinates: null})
const {coords, locatedAt, error, resume, pause} = useGeolocation({immediate: false})

watch(() => coords, (newValue, oldValue) => {
  if (newValue.value.accuracy > 0) {
    filters.value = {
      localite: null, tags: [],
      coordinates: {latitude: coords.value.latitude, longitude: coords.value.longitude}
    }
  }
}, {deep: true})

function refreshGeolLoc() {
  resume()
}

const {
  status,
  data,
  error: errorSearch
} = updateSearchGet(filters)
</script>
<template>
  <section class="mx-auto h-svh max-w-full px-0 py-8 sm:px-6 sm:py-12 lg:px-8 border border-dashed border-gray-400 ">
    <WidgetsTitle>Recherche par géolocalisation</WidgetsTitle>
    <WidgetsError :error="error.message" v-if="error"/>
    <WidgetsLoader v-if="status==='pending'"/>
    <div v-if="coords.accuracy > 0"
         class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
         role="alert">
      <span class="font-medium">Votre géolocalisation {{ coords.latitude }},{{ coords.longitude }}. Recherche dans un rayon de 5km</span>
    </div>
    <div class="flex flex-col items-start">
      <button @click="refreshGeolLoc" class="flex flex-row items-center gap-5">
        <IconCurrentLocation class="h-12 w-12"/>
        <span>Rafraîchir ma géolocalisation</span>
      </button>
      <ListTitle :count="data.count"/>
      <ListResult :data v-if="data"/>
    </div>
  </section>
</template>