<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import {LIcon, LMap, LMarker, LTileLayer, LTooltip} from "@vue-leaflet/vue-leaflet";
defineProps({
  data: {
    type: Object,
    required: true
  }
})
const mapOpen = defineModel('mapOpen')
const previewOpen = defineModel('previewOpen')
const shopRef = defineModel('shopRef')
const coordinates = ref([50.217845, 5.331049])
const zoom = ref(14);
const map = ref(null);
const iconUrl = computed(() => {
  return `/images/dog.svg`;
})
const iconSize = computed(() => {
  return [20, 20];
})
const init = () => {
  console.log('Leaflet map initialized')
};

function showPreview(shop) {
  console.log('preview ' + shop.slugname)
  shopRef.value = shop.slugname
  previewOpen.value = true
}
</script>
<template>
  <div class="relative overflow-hidden rounded-xl border border-dashed border-gray-400 opacity-75 "
       v-show="mapOpen">
    <div class="mx-auto px-0 py-2 sm:px-4 sm:py-2  h-[60rem] md:h-[100rem]">
      <l-map ref="map" v-model:zoom="zoom" :center="coordinates" :use-global-leaflet="false" @ready="init">
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
  </div>
</template>