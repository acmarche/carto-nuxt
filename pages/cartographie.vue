<script setup>
import {useGeolocation} from '@vueuse/core'

useHead({
  title: 'Circuit court - Producteurs locaux - Marche-en-Famenne',
  link: {
    rel: 'icon',
    type: 'image/ico',
    href: '/favicon.ico'
  },
  meta: [
    {
      name: 'description',
      content: 'Vous trouverez sur cette carte les acteurs et intervenants de différentes filières liées au circuit court dans la commune de Marche-en-Famenne. Fromagerie,boucherie,boulangerie,fermiers...'
    }
  ],
})
const {coords, locatedAt, error, resume, pause} = useGeolocation({immediate: false})

function refreshGeolLoc() {
  resume()
}

const menuOpen = ref(false)
const listOpen = ref(false)
const mapOpen = ref(true)
</script>
<template>
  <AppHeader v-model:menu-open="menuOpen" v-model:list-open="listOpen" v-model:map-open="mapOpen"
             :refreshGeolLoc="refreshGeolLoc" :errorGeoloc="error"/>
  <Main v-model:menu-open="menuOpen" v-model:list-open="listOpen" v-model:map-open="mapOpen" :coords="coords"/>
  <AppFooter/>
</template>