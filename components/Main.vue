<script setup>
const filters = defineModel('filters', {
  Type: Object,
  default: {localite: null, tags: []}
})
const {
  pending,
  data,
  error
} = updateSearchGet(filters)
const previewOpen = defineModel('previewOpen', {
  Type: Boolean,
  default: false
})
const menuOpen = defineModel('menuOpen')
const mapOpen = defineModel('mapOpen')
const listOpen = defineModel('listOpen')
const shopRef = defineModel('shopRef', {
  type: String,
  default: null
})

</script>
<template>
  <div class="bg-white" id="content-result">
    <widgets-error :error="error.message" v-if="error"/>
    <div @keydown.window.escape="menuOpen = false" v-if="data">
      <filters-mobile v-model:filters="filters" v-model:menu-open="menuOpen" :data="data"/>
      <shop-preview v-model:preview-open="previewOpen" v-model:shop-ref="shopRef" :key="shopRef"/>
      <main class="mx-auto max-w-full px-0 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div class="border-b border-gray-200 pb-6 px-4 sm:px-0">
          <h1 class="lobster-two-bold
        mx-auto max-w-max
        bg-slate-400
        bg-gradient-to-r from-carto-pink via-carto-main to-carto-gray200
        bg-clip-text text-transparent
        bg-[length:250px_100%] bg-no-repeat
        px-10 py-1 text-center text-4xl font-bold
        animate-shimmer">
            Du bio, du local, du solidaire...
          </h1>
          <h1 class="text-4xl font-bold lobster-two-bold tracking-tight text-carto-pink">Circuit-Court</h1>
          <p class="mt-4 text-2xl text-carto-main lobster-two-regular-italic">
            On qualifie généralement de circuit court ou circuit de commercialisation le circuit de
            distribution
            dans lequel
            intervient au maximum un intermédiaire entre le producteur et le consommateur.
          </p>
          <p class="text-sm text-carto-gray200 m-2">
            Votre sélection {{filters}}
          </p>
        </div>
        <WidgetsLoader v-if="pending"/>
        <div class="pt-8 grid grid-cols-1 lg:gap-x-8 lg:grid-cols-[auto_minmax(0,1fr)]" v-if="data">
          <aside>
            <filters-xl v-model:filters="filters" v-model:menu-open="menuOpen" :data="data"/>
          </aside>
          <div class="mt-6 lg:mt-0">
            <h2 class="text-xl lg:text-3xl text-carto-pink py-3 px-3" id="count-result">
              {{ data.count }} commerces trouvés
            </h2>
            <div v-show="listOpen">
              <list-result :data="data"/>
            </div>
            <map-element :data="data" v-model:map-open="mapOpen" v-model:preview-open="previewOpen"
                         v-model:shop-ref="shopRef"/>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>