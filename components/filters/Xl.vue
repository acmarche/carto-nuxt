<script setup>
import {IconFilter} from '@tabler/icons-vue';

defineProps({
  data: {
    type: Object,
    required: true
  }
})
const filters = defineModel('filters')
const menuOpen = defineModel('menuOpen')

function nameStartsWithUnderscore(name) {
  return !name.startsWith('_')
}

function itemHasData(item) {
  console.log(item.values)
  return item.length > 0;
}

function capitalized(word) {
  return word.charAt(0).toUpperCase()
      + word.slice(1)
}

function isChecked(name, value) {
  if (name === 'localite') {
    if (filters.value.localite === null) {
      return false
    }
    const index = filters.value.localite === value
    return index !== -1
  }
  const index = filters.value.tags.indexOf(value)
  return index !== -1
}
</script>
<template>
  <h2 class="sr-only">Filtres</h2>
  <!-- Mobile filter dialog toggle, controls the 'mobileFilterDialogOpen' state. -->
  <button type="button" class="inline-flex items-center px-4 sm:px-0 lg:hidden" @click="menuOpen = true">
    <IconFilter/>
    <span class="text-sm font-medium text-carto-main">Filtres</span>
    <svg class="ml-1 h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
         aria-hidden="true">
      <path
          d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"/>
    </svg>
  </button>

  <div class="hidden lg:block lg:min-w-36">
    <form class="space-y-10 divide-y divide-gray-200">
      <template v-for="(item,facetName) in data.facetDistribution">
        <div class="[&:not(:first-child)]:pt-10" v-if="nameStartsWithUnderscore(facetName)">
          <fieldset>
            <legend class="block text-sm font-medium text-gray-900">
              {{ capitalized(facetName) }}
            </legend>
            <div class="space-y-3 pt-6">
              <div v-for="(nb,name) in item" class="flex items-center">
                <input :id="`filter-${name}`" :name="`${facetName}[]`" :value="name"
                       :checked="isChecked(facetName,name)"
                       @change="manageFilters(filters,facetName,name,$event)"
                       type="checkbox"
                       class="h-4 w-4 rounded border-carto-gray200 text-carto-pink focus:ring-carto-pink"
                >
                <label :for="`filter-${name}`"
                       class="ml-3 text-sm text-carto-main">
                  <i :class="data.icons[name]['icon']"
                     :style="`font-size: 1rem;color:${data.icons[name]['color']}`"></i>
                  {{ name }} ({{ nb }})
                </label>
              </div>
            </div>
          </fieldset>
        </div>
      </template>
    </form>
  </div>
</template>