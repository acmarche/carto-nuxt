<script setup>
const filters = defineModel('filters')
defineProps({
  data: {
    type: Object,
    required: true
  }
})
function manageFilters2(name, value, event) {
  manageFilters(filters, name, value, event)
}
</script>
<template>
  <aside>
    <h2 class="sr-only">Filtres</h2>
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