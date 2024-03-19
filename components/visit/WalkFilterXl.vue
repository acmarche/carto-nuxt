<script setup>
import {IconFilter, IconBuildingChurch, IconWalk, IconBike, IconHorse} from '@tabler/icons-vue'

const config = useRuntimeConfig()

const filters = defineModel('filters')
defineProps({
  data: {
    type: Object,
    required: true
  },
  dataFilters: {
    type: Object,
    required: true
  }
})
const menuOpen = defineModel('menuOpen')

function manageFilters2(name, value, event) {
  manageFiltersVisit(filters, name, value, event)
}

function isChecked(name, value) {
  if (name === 'localite') {
    if (filters.value.localite === null) {
      return false
    }
    return filters.value.localite === value
  }
  if (name === 'type') {
    if (filters.value.type === null) {
      return false
    }
    return filters.value.type === value
  }
  return false
}
</script>
<template>
  <aside>
    <h2 class="sr-only">Filières et localités</h2>
    <!-- Mobile filter dialog toggle, controls the 'mobileFilterDialogOpen' state. -->
    <button type="button" class="inline-flex items-center px-4 sm:px-0 lg:hidden" @click="menuOpen = true">
      <IconFilter/>
      <span class="text-sm font-medium text-carto-main">Filières et localités</span>
      <svg class="ml-1 h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
           aria-hidden="true">
        <path
            d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"/>
      </svg>
    </button>

    <div class="hidden lg:block lg:min-w-36">
      <form class="space-y-10 divide-y divide-gray-200">
        <template v-for="(item,facetName,index) in dataFilters" :key="index">
          <div class="[&:not(:first-child)]:pt-10">
            <fieldset>
              <legend class="block text-sm font-medium text-gray-900">
                {{ capitalized(facetName) }}
              </legend>
              <div class="space-y-3 pt-6">
                <div v-for="(filt) in item" class="flex flex-row items-center" :key="item.name">
                  <input :id="`filter-${filt.id}`" :name="`${facetName}`" :value="filt.name"
                         :checked="isChecked(facetName,filt.name)"
                         @change="manageFilters2(facetName,filt.name,$event)"
                         type="radio"
                         class="h-4 w-4 rounded border-carto-gray200 text-carto-pink focus:ring-carto-pink"
                  >
                  <label :for="`filter-${filt.id}`"
                         class="ml-3 flex flex-row gap-2 items-center">
                    <IconBuildingChurch v-if="facetName=== 'localite'"/>
                    <IconWalk v-if="filt.name==='A pied'"/>
                    <IconBike v-if="filt.name==='A Vélo'"/>
                    <IconHorse v-if="filt.name==='Grandes Randonnées Pédestres'"/>
                    <span class="text-sm text-carto-main">{{ filt.name }}</span>
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </template>
      </form>
    </div>
  </aside>
</template>