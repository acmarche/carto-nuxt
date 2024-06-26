<script setup>
import {IconDownload} from '@tabler/icons-vue';

const config = useRuntimeConfig()
const filters = ref({localite: null, tags: [], coordinates: null})
const shopRef = ref(null)
const previewOpen = ref(false)
const {
  pending,
  data,
  error
} = updateSearchGet(filters)

const propos = defineProps({
  coords: {
    type: Object,
    required: false
  },
  menuSelected: {
    type: String,
    required: true
  }
})

const menuOpen = defineModel('menuOpen')

watch(() => propos.coords, (newValue, oldValue) => {
  if (newValue.accuracy > 0) {
    const filtersSave = {localite: filters.value.localite, tags: filters.value.tags}
    filtersSave.coordinates = {latitude: newValue.latitude, longitude: newValue.longitude}
    filters.value = filtersSave
  }
})
</script>
<template>
  {{error}}
  <WidgetsError :error="error.message" v-if="error"/>
  <main @esca="menuOpen = false" v-if="data">
    <FiltersMobile v-model:filters="filters" v-model:menu-open="menuOpen" :data="data"/>
    <ShopPreview v-model:preview-open="previewOpen" :shop-ref="shopRef" :key="shopRef"/>
    <div class="mx-auto max-w-full px-0 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div class="border-b border-gray-200 pb-6 px-4 sm:px-0">
        <h1 class="lobster-two-bold
        mx-auto max-w-max
        bg-slate-400
        bg-gradient-to-r from-carto-pink via-carto-main to-carto-gray200
        bg-clip-text text-transparent
        bg-[length:250px_100%] bg-no-repeat
        px-10 py-1 text-center text-4xl font-bold
        animate-shimmer">
          Du local, du circuit court, du solidaire...
        </h1>
        <h1 class="text-4xl font-bold lobster-two-bold tracking-tight text-carto-pink">Carte dynamique</h1>
        <p class="mt-4 text-2xl text-carto-main lobster-two-regular-italic">
          Vous trouverez sur cette carte les acteurs et intervenants de différentes filières liées au circuit court dans
          la commune de Marche-en-Famenne.
        </p>
        <div v-if="coords.accuracy > 0"
             class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
             role="alert">
          <span class="font-medium">Votre géolocalisation {{ coords.latitude }},{{ coords.longitude }}. Recherche dans un rayon de 5km</span>
        </div>
      </div>
      <div class="pt-8 grid grid-cols-1 lg:gap-x-8 lg:grid-cols-[auto_minmax(0,1fr)]"
           v-if="data && (menuSelected==='map' || menuSelected==='list')">
        <FiltersXl v-model:filters="filters" v-model:menu-open="menuOpen" :data/>
        <div class="mt-6 lg:mt-0">
          <div class="flex flex-row items-center justify-between">
            <h2 class="text-xl lg:text-3xl text-carto-pink py-3 px-3"
                id="count-result">
              {{ data.count }} acteurs et intervenants trouvés
            </h2>
            <NuxtLink :to="`${config.public.BOTTIN_URL}/circuit-court.pdf`" class="flex flex-row gap-2 mr-3" target="_blank" download>
              <IconDownload class="h-6 w-6"/>
              <span class="text-sm">Exporter la liste</span>
            </NuxtLink>
          </div>
          <div v-show="menuSelected === 'list'">
            <ListResult :data/>
          </div>
          <MapComponent :data v-model:preview-open="previewOpen" :menu-selected="menuSelected"
                        v-model:shop-ref="shopRef"/>
        </div>
      </div>
      <div class="" v-if="menuSelected === 'about'">
        <About/>
      </div>
    </div>
  </main>
</template>