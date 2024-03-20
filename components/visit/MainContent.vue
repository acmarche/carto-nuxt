<script setup>
const filters = ref({localite: null, type: 11, coordinates: null})
const walks = ref({types: [], id: null, coordinates: null})
const codeCgt = ref(null)
const previewOpen = ref(false)
const {
  pending,
  data,
  error
} = walksGet(filters)

const {
  pending: pendingFilters,
  data: dataFilters,
  error: errorFilters
} = walkFiltersGet()

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
    const walksSave = {localite: walks.value.localite, tags: walks.value.tags}
    walksSave.coordinates = {latitude: newValue.latitude, longitude: newValue.longitude}
    walks.value = walksSave
  }
})
watch(() => filters, (newValue, oldValue) => {
  console.log(newValue)
})
</script>
<template>
  {{ error }}
  <WidgetsError :error="error.message" v-if="error"/>
  <main @esca="menuOpen = false" v-if="data">
    <VisitWalkPreview v-model:preview-open="previewOpen" :code-cgt="codeCgt" :key="codeCgt"/>
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
          Des balades en Famenne...
        </h1>
        <h1 class="text-4xl font-bold lobster-two-bold tracking-tight text-carto-pink">Carte dynamique</h1>
        <p class="mt-4 text-2xl text-carto-main lobster-two-regular-italic">
          Vous trouverez sur cette carte les balades à pied, à vélo et pédestres dans la commune de Marche-en-Famenne.
        </p>
        {{ filters }}
        <div v-if="coords.accuracy > 0"
             class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
             role="alert">
          <span class="font-medium">Votre géolocalisation {{ coords.latitude }},{{ coords.longitude }}. Recherche dans un rayon de 5km</span>
        </div>
      </div>
      <div class="pt-8 grid grid-cols-1 lg:gap-x-8 lg:grid-cols-[auto_minmax(0,1fr)]"
           v-if="data && (menuSelected==='map' || menuSelected==='list')">
        <VisitWalkFilterXl :filters="filters" :dataFilters v-model:menu-open="menuOpen" :data/>
        <div class="mt-6 lg:mt-0">
          <h2 class="text-xl lg:text-3xl text-carto-pink py-3 px-3" id="count-result">
            {{ data.length }} balades trouvées
          </h2>
          <div v-show="menuSelected === 'list'">
            <VisitList :data/>
          </div>
          <VisitMapWalk :data v-model:preview-open="previewOpen" :menu-selected="menuSelected"
                        v-model:code-cgt="codeCgt"/>
        </div>
      </div>
      <div class="" v-if="menuSelected === 'about'">
        ABOUT
      </div>
    </div>
  </main>
</template>