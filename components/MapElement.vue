<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import {LIcon, LMap, LMarker, LTileLayer, LTooltip} from "@vue-leaflet/vue-leaflet";

const propos = defineProps({
  data: {
    type: Object,
    required: true
  }
})
const mapOpen = defineModel('mapOpen')
const previewOpen = defineModel('previewOpen')
const shopRef = defineModel('shopRef')
const filters = defineModel('filters')
const zoom = ref(12);
const map = ref(null);
const iconUrl = computed(() => {
  return `/images/map-pin.svg`;
})
const iconSize = computed(() => {
  return [30, 30];
})
const init = () => {

};

function showPreview(shop) {
  shopRef.value = shop.slugname
  previewOpen.value = true
  window.scrollTo(0, 0);
}

const coordinates = ref([50.217845, 5.331049])
watch(filters, async (newValue) => {
  const localite = newValue.localite
  const tags = newValue['tags']
  if (localite !== null || tags.length > 0) {
    if (propos.data['hits'].length > 0) {
      coordinates.value = [propos.data['hits'][0].latitude, propos.data['hits'][0].longitude]
    }
  } else {
    const coordinates = ref([50.217845, 5.331049])
  }
})
</script>
<template>
  <section class="relative overflow-hidden "
           v-show="mapOpen">
    <div class="mx-auto px-0 py-2 sm:px-4 sm:py-2 w-screen h-dvh">
      <l-map :ref="map" v-model:zoom="zoom" :center="coordinates" :use-global-leaflet="false" @ready="init">
        <l-tile-layer
            ref="tileLayer"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            layer-type="base"
            name="OpenStreetMap"
        />
        <l-marker :lat-lng="[fiche.latitude,fiche.longitude]" v-for="fiche in data.hits" @click="showPreview(fiche)">
          <l-icon :icon-url="iconUrl" :icon-size="iconSize" :class-name="`text-red-500`"/>
          <l-tooltip>
            {{ fiche.societe }}
          </l-tooltip>
        </l-marker>
      </l-map>
    </div>
  </section>
</template>
<style>
.leaflet-container {
  overflow: hidden;
}

.leaflet-layer {
  position: absolute;
  left: 0;
  top: 0;
}
</style>