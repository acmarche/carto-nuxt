<script setup>
import {IconFilter} from "@tabler/icons-vue";
const menuFiltersOpen = defineModel('menuFiltersOpen')
</script>
<template>
  <!-- Mobile filter dialog toggle, controls the 'mobileFilterDialogOpen' state. -->
  <button type="button" class="inline-flex items-center px-4 mt-4 sm:px-0 lg:hidden" @click="menuFiltersOpen = true">
    <IconFilter class="h-8 w-8"/>
    <span class="text-sm font-medium text-carto-main">Filtres</span>
    <svg class="ml-1 h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
         aria-hidden="true">
      <path
          d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"/>
    </svg>
  </button>
</template>