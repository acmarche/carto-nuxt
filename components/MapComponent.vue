<script setup>
import 'leaflet/dist/leaflet.css'
import 'vue-leaflet-markercluster/dist/style.css'

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
let markerLayer = null
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

const {$L} = useNuxtApp()

function showPreview(slugname) {
  shopRef.value = slugname
  previewOpen.value = true
  window.scrollTo(0, 0);
}

watch(() => propos.data, (newValue, oldValue) => {
  removeAllMarkers()
  data.value = newValue
  addMarkers(true)
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

  markerLayer = $L.layerGroup().addTo(map);
  addMarkers()
})

function addMarkers(refresh = false) {
  const customIcon = $L.icon({
    iconUrl: '/images/geolocation/marker-icon.png',
    shadowUrl: '/images/geolocation/marker-shadow.png',
  });

  data.value.hits.forEach((fiche) => {
    const point = [fiche.latitude, fiche.longitude]
    addOneMarker(fiche, point, customIcon)
  })

  if (refresh) {
    if (data.value.hits.length > 10) {
      map.panTo(center)
    } else if (data.value.hits.length > 0) {
      map.panTo([data.value.hits[0].latitude, data.value.hits[0].longitude])
    }
  }
}

function addOneMarker(fiche, point, customIcon) {
  const marker = $L.marker(point, {title: fiche.name, icon: customIcon}).addTo(markerLayer);
  marker.addEventListener('click', () => {
    showPreview(fiche.slugname)
  });
}

function removeAllMarkers() {
  markerLayer.clearLayers()
}
</script>
<template>
  <section class="relative overflow-hidden "
           v-show="mapOpen">
    <div class="mx-auto px-0 py-2 sm:px-4 sm:py-2 w-screen h-dvh" id="openmap">

    </div>
  </section>
</template>
