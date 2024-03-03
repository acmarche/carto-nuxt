<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})

const tabOpen = ref(0)
const menuOpen = defineModel('menuOpen')
const filters = defineModel('filters')

function nameStartsWithUnderscore(name) {
  return !name.startsWith('_');
}

function capitalized(word) {
  return word.charAt(0).toUpperCase()
      + word.slice(1)
}

function itemHasData(item) {
  return item.length > 0;
}

function manageFilters2(name, value, event) {
  const filt = {localite: filters.value.localite, tags: filters.value.tags}
  if (!event.target.checked) {
    if (name === 'localite') {
      filt.localite = null
    } else {
      const index = filt.tags.indexOf(value)
      if (index !== -1) {
        filt.tags.splice(index, 1)
      }
    }
  } else {
    if (name === 'localite') {
      filt.localite = value
    } else {
      filt.tags.push(value)
    }
  }
  filters.value = filt
}

function toggleCollapsation(id) {
  if (tabOpen.value === id) {
    tabOpen.value = 0 //close
  } else {
    tabOpen.value = id
  }
}
</script>
<!--
   x-transition:enter="transition-opacity ease-linear duration-300"
           x-transition:enter-start="opacity-0"
           x-transition:enter-end="opacity-100"
           x-transition:leave="transition-opacity ease-linear duration-300"
           x-transition:leave-start="opacity-100"
           x-transition:leave-end="opacity-0"-->
<style>
.trans1-enter-from {
  @apply opacity-0
}
.trans1-enter-active {
  @apply transition-opacity ease-linear duration-300
}
.trans1-enter-to {
  @apply opacity-100
}
.trans1-leave-from {
  @apply opacity-100
}
.trans1-leave-active {
  @apply transition-opacity ease-linear duration-300
}
.trans1-leave-to {
  @apply opacity-0
}
.trans2-enter-from {
  @apply translate-x-full
}
.trans2-enter-active {
  @apply transition ease-in-out duration-300 transform
}
.trans2-enter-to {
  @apply translate-x-0
}
.trans2-leave-from {
  @apply translate-x-0
}
.trans2-leave-active {
  @apply transition ease-in-out duration-300 transform
}
.trans2-leave-to {
  @apply translate-x-full
}
</style>
<!-- x-transition:enter="transition ease-in-out duration-300 transform"
           x-transition:enter-start="translate-x-full"
           x-transition:enter-end="translate-x-0"
           x-transition:leave="transition ease-in-out duration-300 transform"
           x-transition:leave-start="translate-x-0"
           x-transition:leave-end="translate-x-full"
           -->
<template>
  <!--
  Mobile filter dialog
@click.outside="menuOpen = false"
  Off-canvas menu for mobile, show/hide based on off-canvas menu state.
-->
  <div v-show="menuOpen" class="relative z-40 lg:hidden " role="dialog" aria-modal="true"
  >
    <!--
      Off-canvas menu backdrop, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <Transition name="trans1">
      <div v-show="menuOpen" class="fixed inset-0 bg-carto-main bg-opacity-25 backdrop-blur-sm"></div>
    </Transition>
    <div class="fixed inset-0 z-40 flex">
      <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "translate-x-full"
      -->
      <div v-show="menuOpen"
           class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
        <div class="flex items-center justify-between px-4">
          <h2 class="text-lg font-medium text-carto-main">Filtres</h2>
          <button type="button"
                  class="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-carto-gray200 hover:text-carto-gray300"
                  @click="menuOpen = false">
            <span class="sr-only">Fermer le menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Filters -->
        <form class="mt-4">

          <template v-for="(item,facetName, index) in data.facetDistribution">
            <div class="border-t border-gray-200 pb-4 pt-4" v-if="nameStartsWithUnderscore(facetName)">
              <fieldset>
                <legend class="w-full px-2">
                  <!-- Expand/collapse section button -->
                  <button type="button"
                          class="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500"
                          aria-controls="filter-section-0" aria-expanded="false"
                          @click="toggleCollapsation(index)">
                    <span class="text-sm font-medium text-gray-900">{{ capitalized(facetName) }}</span>
                    <span class="ml-6 flex h-7 items-center">
                                              <!--
                                                Expand/collapse icon, toggle classes based on section open state.

                                                Open: "-rotate-180", Closed: "rotate-0"
                                              -->
                                              <svg class="rotate-0 h-5 w-5 transform" viewBox="0 0 20 20"
                                                   fill="currentColor"
                                                   aria-hidden="true"
                                                   x-state:on="Open" x-state:off="Closed"
                                                   :class="tabOpen === index ? 'rotate-0': '-rotate-180'">
                                                <path fill-rule="evenodd"
                                                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                      clip-rule="evenodd"/>
                                              </svg>
                                        </span>
                  </button>
                </legend>
                <div class="px-4 pb-2 pt-4" id="filter-section-0" v-show="tabOpen === index">
                  <div class="space-y-6">
                    <div class="flex items-center" v-for="(nb,name) in item">
                      <input :id="`mobile-${name}`" :name="`${facetName}[]`"
                             @change="manageFilters2(facetName,name,$event)"
                             :value="name"
                             type="checkbox"
                             class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                      <label :for="`mobile-${name}`" class="ml-3 text-sm text-gray-500">
                        {{ name }} ({{ nb }})
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </template>
        </form>
      </div>
    </div>
  </div>
</template>