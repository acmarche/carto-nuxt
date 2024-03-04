<script setup>
import {useGeolocation} from '@vueuse/core'

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