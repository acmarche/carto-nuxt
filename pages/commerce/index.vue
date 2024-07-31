<script setup>
import {IconFilters} from "@tabler/icons-vue";

useSeoMeta({
  title: () => 'Liste des commerces et acteurs',
})
const filters = ref({localite: null, tags: [], coordinates: null})
const {
  pending,
  data,
  error
} = updateSearchGet(filters)
const menuFiltersOpen = ref(false)
</script>
<template>
  <section class="mx-auto max-w-full px-0 py-8 sm:px-6 sm:py-12 lg:px-8">
    <WidgetsError :error="error.message" v-if="error"/>
    <div v-if="pending">Chargement...</div>
    <div>
      <WidgetsTitle>Liste des acteurs</WidgetsTitle>
      <FiltersBtnOpenMenu/>
      <div class="pt-4 grid grid-cols-1 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-x-8">
        <FiltersXl v-model:filters="filters" v-model:menu-filters-open="menuFiltersOpen" :data/>
        <ListResult :data v-if="data"/>
      </div>
    </div>
  </section>
</template>