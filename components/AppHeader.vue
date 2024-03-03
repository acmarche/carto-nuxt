<script setup>
import {IconCurrentLocation, IconList, IconMap} from '@tabler/icons-vue';

defineProps({
  refreshGeolLoc: {
    Type: Function
  },
  errorGeoloc: {
    Type: Object,
    required: false,
    default: null
  }
})

const mapOpen = defineModel('mapOpen')
const listOpen = defineModel('listOpen')
</script>
<template>
  <header class="block z-20 bg-carto-green h-16 w-full">
    <nav class="shadow h-16 text-white flex items-center gap-3 justify-between">
      <NuxtLink to="/"><h1 class="text-xl lg:text-3xl ml-3 lobster-two-bold">Producteurs locaux</h1></NuxtLink>
      <div class="mx-auto flex flex-row gap-4 roboto-medium">
        <button class="flex flex-col flex-wrap justify-center items-center hover:text-carto-pink" type="button"
                title="Carte"
                @click="mapOpen = true; listOpen = false"
                v-if="listOpen">
          <IconMap/>
          <span class="text-base lg:text-lg">Carte</span>
        </button>
        <button class="flex flex-col flex-wrap justify-center items-center hover:text-carto-pink" type="button"
                title="Liste"
                @click="listOpen = true;
                mapOpen = false"
                v-if="mapOpen">
          <IconList/>
          <span class="text-base lg:text-lg hover:text-carto-main">
                Liste
            </span>
        </button>
        <button class="flex flex-col flex-wrap justify-center items-center hover:text-carto-pink" type="button"
                title="Localisation" @click="refreshGeolLoc">
          <IconCurrentLocation/>
          <span class=" text-base lg:text-lg hover:text-carto-gray300">
                Autour de moi
            </span>
        </button>
      </div>
      <a href="https://www.marche.be" target="_blank" class="hidden lg:flex mr-12 hover:text-carto-main flex-row gap-2"
         title="Site de la Ville">
        <img class="w-24 hover:opacity-70"
             alt="logo marche"
             src="/images/Marche_logo_transparent_pt.png">
      </a>
    </nav>
    <div v-if="errorGeoloc"
         class="p-4 mb-4 text-sm text-carto-pink rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      <span class="font-medium">{{ errorGeoloc.message }}</span>
    </div>
  </header>

</template>