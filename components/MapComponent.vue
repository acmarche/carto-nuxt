<script setup>
//todo https://medium.com/@smhabibjr/implement-an-interactive-map-in-the-vue-js-8a865010fb41
//todo https://github.com/nuxt-modules/leaflet/tree/main
import 'leaflet/dist/leaflet.css'
import {IconMapUp} from "@tabler/icons-vue";

const config = useRuntimeConfig()
const propos = defineProps({
  data: {
    type: Object,
    required: true
  },
})
const previewOpen = defineModel('previewOpen')
const shopRef = defineModel('shopRef')
const zoom = 13
let map = null
const center = [50.217845, 5.331049]
const data = ref(propos.data)
// Fix leaflet not importing marker icons correctly.
/*
if (import.meta.env.PROD) {
  Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon,
    iconUrl: markerIcon,
    shadowUrl: markerIconShadow,
  })
}*/

const {$L, $Icon} = useNuxtApp()
let markers = null

function showPreview(slugname) {
  shopRef.value = slugname
  previewOpen.value = true
  scrollUp()
}

function scrollUp() {
  window.scrollTo(0, 0);
}

let iconSize = [25, 41]

function iconMarker(fiche) {
  iconSize = [25, 41]
  if (fiche.classements.length > 0) {
    const classement = fiche.classements[0]
    if (classement.icon !== null) {
      iconSize = [41, 41]
      return `${config.public.BOTTIN_URL}/bottin/icons/${classement.icon}`
    }
  }
  return `/images/geolocation/marker-icon.png`
}

watch(() => propos.data, (newValue, oldValue) => {
  data.value = newValue
  addMarkersGrouped()
})

onMounted(() => {
  const coordinates = ref([50.217845, 5.331049])

  map = $L.map('openmap').setView(center, zoom)

  $L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 1,
    maxZoom: 20,
    scrollWheelZoom: false
  }).addTo(map)

  markers = $L.markerClusterGroup();
  addMarkersGrouped()
})

function addMarkersGrouped() {
  markers.clearLayers()
  data.value.hits.forEach((fiche) => {
    const point = [fiche.latitude, fiche.longitude]
    const marker = $L.marker(new $L.LatLng(fiche.latitude, fiche.longitude), {
      title: fiche.societe,
      icon: new $Icon({iconUrl: iconMarker(fiche), iconSize: iconSize})
    });
    marker.addEventListener('click', () => {
      showPreview(fiche.slugname)
    });
    markers.addLayer(marker);
  })
  map.addLayer(markers);
}
</script>
<template>
  <section class="relative overflow-hidden ">
    <div class="mx-auto px-0 py-0 sm:px-4 sm:py-2 w-screen h-dvh" id="openmap">

    </div>
    <button type="button" class="absolute bottom-0 right-0 mx-2 mb-6 z-20 md:hidden" @click="scrollUp"
            title="Remonter">
      <IconMapUp class="w-12 h-12  hover:text-carto-pink"/>
    </button>
  </section>
</template>
<style>
.leaflet-control {
  z-index: 18; /*800*/
}

.leaflet-top,
.leaflet-bottom {
  z-index: 20; /*1000*/
}

.leaflet-pane {
  z-index: 14; /*400*/
}

.leaflet-tile-pane {
  z-index: 12; /*200*/
}

.leaflet-overlay-pane {
  z-index: 14; /*400*/
}

.leaflet-shadow-pane {
  z-index: 15; /*500*/
}

.leaflet-marker-pane {
  z-index: 16; /*600*/
}

.leaflet-tooltip-pane {
  z-index: 16; /*650*/
}

.leaflet-popup-pane {
  z-index: 17; /*700*/
}

.leaflet-map-pane canvas {
  z-index: 11; /*100*/
}

.leaflet-map-pane svg {
  z-index: 12; /*200*/
}

.leaflet-zoom-box {
  z-index: 18; /*800*/
}
</style>
