<script setup>
import {useGeolocation} from '@vueuse/core'
useHead({
  title: 'Circuit court - Producteurs locaux - Marche-en-Famenne',
  meta: [
    {name: 'description', content: 'My amazing site.'}
  ],
})
const {coords, locatedAt, error, resume, pause} = useGeolocation({immediate: false})

function refreshGeolLoc() {
  resume()
}

const menuSelected = ref('map')
</script>
<template>
  <AppHeader :refreshGeolLoc="refreshGeolLoc" :errorGeoloc="error" v-model:menu-selected="menuSelected"/>
  <Main :coords="coords" v-model:menu-selected="menuSelected"/>
  <AppFooter/>
</template>