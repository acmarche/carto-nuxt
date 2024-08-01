<script setup>
import {IconDownload} from '@tabler/icons-vue';
const config = useRuntimeConfig()
const filters = ref({localite: null, tags: [], coordinates: null})
const shopRef = ref(null)
const previewOpen = ref(false)
const name = 'Carte'
const description = ''
useSeoMeta({
  title: () => `${name ?? ''}`,
  description: () => `${description ?? ''}`
})
useHead({
  script: [
    {
      src: 'https://unpkg.com/tailwindcss-intersect@2.0.1/dist/observer.min.js',
      tagPosition: 'head',
      defer: true
    }
  ]
})
const {
  status,
  data,
  error
} = updateSearchGet(filters)
const menuFiltersOpen = defineModel('menuFiltersOpen')
</script>
<template>
  <main @esca="menuFiltersOpen = false" v-if="data">
    <WidgetsError :error="error.message" v-if="error"/>
    <WidgetsLoader v-if="status==='pending'"/>
    <FiltersMobile v-model:filters="filters" v-model:menu-filters-open="menuFiltersOpen" :data/>
    <ShopPreview v-model:preview-open="previewOpen" :shop-ref="shopRef" :key="shopRef"/>
    <div class="mx-auto max-w-full px-0 py-8 sm:px-6 sm:py-12 lg:px-8">
      <CarteWelcome/>
      <FiltersBtnOpenMenu v-model:menu-filters-open="menuFiltersOpen"/>
      <div class="pt-4 grid grid-cols-1 lg:gap-x-8 lg:grid-cols-[auto_minmax(0,1fr)]">
        <FiltersXl v-model:filters="filters" :data/>
        <div class="">
          <div class="flex flex-row items-center justify-between">
            <ListTitle :count="data.count"/>
            <NuxtLink :to="`${config.public.BOTTIN_URL}/circuit-court.pdf`" class="flex flex-row gap-2 mr-3"
                      target="_blank" download>
              <IconDownload class="h-6 w-6"/>
              <span class="text-sm">Exporter la liste</span>
            </NuxtLink>
          </div>
          <MapComponent :data v-model:preview-open="previewOpen"
                        v-model:shop-ref="shopRef"/>
        </div>
      </div>
    </div>
  </main>
</template>