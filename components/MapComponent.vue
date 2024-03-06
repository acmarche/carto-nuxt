<script setup>
import 'leaflet/dist/leaflet.css'

const propos = defineProps({
  data: {
    type: Object,
    required: true
  },
  mapOpen: {
    type: Boolean,
    required: true
  }
})
const previewOpen = defineModel('previewOpen')
const shopRef = defineModel('shopRef')
const zoom = 14
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
  window.scrollTo(0, 0);
}

let iconSize = [25, 41]

function iconMarker(fiche) {
  iconSize = [25, 41]
  if (fiche.classements.length > 0) {
    const classement = fiche.classements[0]
    if (classement.icon !== null) {
      iconSize = [41, 41]
      return `https://bottin.marche.be/bottin/icons/${classement.icon}`
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
      icon: new $Icon({iconUrl: iconMarker(fiche),iconSize: iconSize})
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
  <section class="relative overflow-hidden "
           v-show="mapOpen">
    <div class="mx-auto px-0 py-2 sm:px-4 sm:py-2 w-screen h-dvh" id="openmap">

    </div>
  </section>
</template>
