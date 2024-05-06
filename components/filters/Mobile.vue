<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})

const tabOpen = ref(-1)
const menuOpen = defineModel('menuOpen')
const filters = defineModel('filters')

function manageFilters2(name, value, event) {
  manageFilters(filters, name, value, event)
}

function toggleCollapsation(id) {
  if (tabOpen.value === id) {
    tabOpen.value = -1 //close
  } else {
    tabOpen.value = id
  }
}
</script>
<template>
  <!--
  Mobile filter dialog
@click.outside="menuOpen = false"
  Off-canvas menu for mobile, show/hide based on off-canvas menu state.
-->
  <div v-show="menuOpen" class="relative z-[1000] lg:hidden " role="dialog" aria-modal="true">
    <!--
      Off-canvas menu backdrop, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <Transition enter-active-class="transition-opacity ease-linear duration-300"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="transition-opacity ease-linear duration-300"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0">
      <div v-show="menuOpen" class="fixed inset-0 bg-carto-main bg-opacity-25 backdrop-blur-sm"></div>
    </Transition>
    <div class="fixed inset-0  flex">
      <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "translate-x-full"
      -->
      <Transition enter-active-class="transition ease-in-out duration-300 transform"
                  enter-from-class="translate-x-full"
                  enter-to-class="translate-x-0"
                  leave-active-class="transition ease-in-out duration-300 transform"
                  leave-from-class="translate-x-0"
                  leave-to-class="translate-x-full">
        <div v-show="menuOpen"
             class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
          <div class="flex items-center justify-between px-4">
            <h2 class="text-lg font-medium text-carto-main">Filières et localités</h2>
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
            <template v-for="(items,groupName, index) in data.filters" :key="index">
              <div class="border-t border-gray-200 pb-4 pt-4" v-if="nameStartsWithUnderscore(groupName)">
                <fieldset>
                  <legend class="w-full px-2">
                    <!-- Expand/collapse section button -->
                    <button type="button"
                            class="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500"
                            aria-controls="filter-section-0" aria-expanded="false"
                            @click="toggleCollapsation(index)">
                      <span class="text-sm font-medium text-gray-900">{{ capitalized(groupName) }}</span>
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
                      <div class="flex items-center" v-for="(item) in items" :key="item.name">
                        <FiltersItemMobile :item :groupName :icons="data.icons" :manageFilters2="manageFilters2"/>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </template>
          </form>
        </div>
      </Transition>
    </div>
  </div>
</template>