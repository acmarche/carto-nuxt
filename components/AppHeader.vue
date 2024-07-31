<script setup>
import {IconCurrentLocation, IconList, IconMap, IconInfoCircle} from '@tabler/icons-vue';

const mobileMenuOpen = ref(false)
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
  <header class="bg-carto-green">
    <nav class="flex items-center justify-between p-6 lg:px-8 text-white" aria-label="Global">
      <div class="flex lg:flex-1">
        <NuxtLink to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Marche-en-Famenne</span>
          <NuxtImg class="w-24 hover:opacity-70" src="/images/Marche_logo_transparent_pt.png" alt=""/>
        </NuxtLink>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                @click="mobileMenuOpen=true">
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
               aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12 roboto-medium">
        <NuxtLink to="/"
                  class="flex flex-col justify-center items-center lg:text-lg font-semibold leading-6 hover:text-carto-pink">
          <IconMap class="w-8 h-8"/>
          <span>Carte</span>
        </NuxtLink>
        <NuxtLink to="/acteur"
                  class="flex flex-col justify-center items-center lg:text-lg font-semibold leading-6 hover:text-carto-pink">
          <IconList class="w-8 h-8"/>
          <span>Liste</span>
        </NuxtLink>
        <NuxtLink to="/geolocalisation"
                  class="flex flex-col justify-center items-center lg:text-lg font-semibold leading-6 hover:text-carto-pink">
          <IconCurrentLocation class="w-8 h-8"/>
          <span>Autour de moi</span>
        </NuxtLink>
        <NuxtLink to="/about"
                  class="flex flex-col justify-center items-center lg:text-lg font-semibold leading-6 hover:text-carto-pink">
          <IconInfoCircle class="w-8 h-8"/>
          <span>A propos de</span>
        </NuxtLink>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div class="lg:hidden" role="dialog" aria-modal="true"
         v-if="mobileMenuOpen">
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="fixed inset-0 z-10"></div>
      <div
          class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700"
                  @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                 aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <NuxtLink to="/" title="Carte"
                        class="flex flex-col justify-center items-center -mx-3  rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-carto-pink">
                <IconMap class="w-8 h-8"/>
                <span>Carte</span>
              </NuxtLink>
              <NuxtLink to="/acteur" title="Liste"
                        class="flex flex-col justify-center items-center -mx-3  rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-carto-pink">
                <IconList class="w-8 h-8"/>
                <span>Liste</span>
              </NuxtLink>
              <NuxtLink to="/geolocalisation" title="Localisation"
                        class="flex flex-col justify-center items-center -mx-3  rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-carto-pink">
                <IconCurrentLocation class="w-8 h-8"/>
                <span>Autour de moi</span>
              </NuxtLink>
              <NuxtLink to="/about" title="A propos de"
                        class="flex flex-col justify-center items-center -mx-3  rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-carto-pink">
                <IconInfoCircle class="w-8 h-8"/>
                <span>A propos de</span>
              </NuxtLink>
            </div>
            <div class="py-6">
              <a href="#"
                 class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log
                in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

</template>