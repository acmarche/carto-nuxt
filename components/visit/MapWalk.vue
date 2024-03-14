<script setup>
import 'leaflet/dist/leaflet.css'
import {IconMapUp} from "@tabler/icons-vue";

const config = useRuntimeConfig()
const propos = defineProps({
  data: {
    type: Object,
    required: true
  },
  menuSelected: {
    type: String,
    required: true
  }
})
const previewOpen = defineModel('previewOpen')
const shopRef = defineModel('shopRef')
const zoom = 13
let map = null
const center = [50.217845, 5.331049]
const data = ref(propos.data)
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

function iconMarker(offer) {
  return `/images/geolocation/marker-icon.png`
}

watch(() => propos.data, (newValue, oldValue) => {
  data.value = newValue
  addMarkersGrouped()
})

function drawWalk(offer) {
  console.log(offer.locations)
  if (offer.locations.length > 0) {
    const myStyle = {
      "color": "#487F89FF",
      "weight": 5,
      "opacity": 1
    };
    $L.polyline(offer.locations, myStyle).addTo(map);
  }
}

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
  data.value.forEach((offer) => {
    const marker = $L.marker(new $L.LatLng(offer.address.latitude, offer.address.longitude), {
      title: offer.nom,
      icon: new $Icon({iconUrl: iconMarker(offer), iconSize: iconSize})
    });
    marker.addEventListener('click', () => {
      drawWalk(offer)
    });
    markers.addLayer(marker);
  })
  map.addLayer(markers);
}
</script>
<template>
  <section class="relative overflow-hidden "
           v-show="menuSelected === 'map'">
    <div class="mx-auto px-0 py-0 sm:px-4 sm:py-2 w-screen h-dvh" id="openmap">

    </div>
    <button type="button" class="absolute bottom-0 right-0 mx-2 mb-6 z-[1000] md:hidden" @click="scrollUp"
            title="Remonter">
      <IconMapUp class="w-12 h-12  hover:text-carto-pink"/>
    </button>
  </section>
</template>
