<script setup>
const menuOpen = defineModel('menuOpen', {
  Type: Boolean,
  default: false
})
const listOpen = defineModel('listOpen', {
  Type: Boolean,
  default: false
})
const mapOpen = defineModel('mapOpen', {
  Type: Boolean,
  default: true
})
</script>
<template>
  <Header v-model:menu-open="menuOpen" v-model:list-open="listOpen" v-model:map-open="mapOpen"/>
  <Main v-model:menu-open="menuOpen" v-model:list-open="listOpen" v-model:map-open="mapOpen"/>
  <Footer/>
</template>