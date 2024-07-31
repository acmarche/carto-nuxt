<script setup>
import {IconCurrentLocation, IconList, IconMap, IconInfoCircle} from '@tabler/icons-vue';
defineProps({
  refreshGeolLoc: {
    Type: Function,
    required: false,
  },
  errorGeoloc: {
    Type: Object,
    required: false,
    default: null
  }
})
</script>
<template>
  <header class="block z-20 bg-carto-green h-20 w-full">
    <nav class="shadow h-20 text-white flex items-center gap-3 justify-between">
      <NuxtLink to="/">
        <h1 class="ml-3 lobster-two-bold flex flex-col md:flex-row flex-wrap md:flex-nowrap md:gap-3">
          <span class="text-xl md:text-3xl">Circuit court</span>
          <span class="text-base md:text-3xl">Marche-en-Famenne</span>
        </h1>
      </NuxtLink>
      <div class="mx-auto flex flex-row gap-4 roboto-medium">
        <NuxtLink class="flex flex-col flex-wrap justify-center items-center hover:text-carto-pink" type="button"
                  title="Carte"
                  to="/">
          <IconMap class="w-8 h-8"/>
          <span class="text-base lg:text-lg">Carte</span>
        </NuxtLink>
        <NuxtLink class="flex flex-col flex-wrap justify-center items-center hover:text-carto-pink" type="button"
                  title="Liste"
                  to="/acteur">
          <IconList class="w-8 h-8"/>
          <span class="text-base lg:text-lg hover:text-carto-main">
                Liste
            </span>
        </NuxtLink>
        <NuxtLink class="flex flex-col flex-wrap justify-center items-center hover:text-carto-pink" type="button"
                  title="Localisation"
                  to="/geolocalisation">
          <IconCurrentLocation class="w-8 h-8"/>
          <span class=" text-base lg:text-lg hover:text-carto-gray300">
                Autour de moi
            </span>
        </NuxtLink>
        <NuxtLink class="flex flex-col flex-wrap justify-center items-center hover:text-carto-pink" type="button"
                  title="Localisation"
                  to="/about">
          <IconInfoCircle class="w-8 h-8"/>
          <span class="hidden md:inline text-base lg:text-lg hover:text-carto-gray300">
                A propos de
            </span>
        </NuxtLink>
      </div>
      <NuxtLink to="https://www.marche.be" target="_blank"
                class="hidden lg:flex mr-3 hover:text-carto-main flex-row gap-2"
                title="Site de la Ville">
        <img class="w-24 hover:opacity-70"
             alt="logo marche"
             src="/images/Marche_logo_transparent_pt.png">
      </NuxtLink>
      <NuxtLink to="https://adl.marche.be" target="_blank"
                class="hidden lg:flex mr-12 hover:text-carto-main flex-row gap-2"
                title="Agence de Développement Local">
        <img class="w-24 hover:opacity-70"
             alt="logo marche"
             src="/images/ADL_Logo.png">
      </NuxtLink>
    </nav>
    <div v-if="errorGeoloc"
         class="p-4 mb-4 text-sm text-carto-pink rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      <span class="font-medium">{{ errorGeoloc.message }}</span>
    </div>
  </header>
</template>