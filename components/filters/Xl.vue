<script setup>
import {IconFilter} from '@tabler/icons-vue'
const filters = defineModel('filters')
defineProps({
  data: {
    type: Object,
    required: true
  }
})
const menuOpen = defineModel('menuOpen')
function manageFilters2(name, value, event) {
  manageFilters(filters, name, value, event)
}
</script>
<template>
  <aside>
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
        <template v-for="(items,groupName,index) in data.filters" :key="index">
          <div class="[&:not(:first-child)]:pt-5">
            <fieldset>
              <legend class="block text-sm font-medium text-gray-900">
                {{ capitalized(groupName) }}
              </legend>
              <div class="space-y-3 pt-6">
                <div v-for="item in items" class="flex flex-row items-center" :key="item.name">
                  <FiltersItemXl :item :groupName :icons="data.icons" v-model:filters="filters" :manageFilters2="manageFilters2"/>
                </div>
              </div>
            </fieldset>
          </div>
        </template>
      </form>
    </div>
  </aside>
</template>