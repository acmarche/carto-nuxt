<script setup>
import {IconInfoCircle} from '@tabler/icons-vue'

const config = useRuntimeConfig()
const filters = defineModel('filters')

defineProps({
  item: {
    type: Object,
    required: true
  },
  groupName: {
    type: String,
    required: true
  },
  icons: {
    type: Object,
    required: true
  },
  manageFilters2: {
    type: Function,
    required: true
  }
})
const openInfo = ref(false)

function isChecked(name, value) {
  if (name === 'localite') {
    if (filters.value.localite === null) {
      return false
    }
    return filters.value.localite === value
  }
  const index = filters.value.tags.indexOf(value)
  return index !== -1
}
</script>
<template>
  <div v-show="openInfo" class="absolute w-56 mt-4 z-30">
    <Transition
        enter-active-class="transition ease-out duration-700"
        enter-class="opacity-0 transform scale-95"
        enter-to-class="opacity-100 transform scale-100"
        leave-active-class="transition ease-in duration-700"
        leave-class="opacity-100 transform scale-100"
        leave-to-class="opacity-0 transform scale-95">
      <div
          class="absolute bg-gray-700 border shadow-md mt-2 px-4 py-2 rounded-lg">
        <p class="text-white">
          {{ item.description }}
        </p>
      </div>
    </Transition>
  </div>
  <input :id="`filter-${item.name}`" :name="`${groupName}[]`" :value="item.name"
         :checked="isChecked(groupName,item.name)"
         @change="manageFilters2(groupName,item.name,$event)"
         type="checkbox"
         class="h-4 w-4 rounded border-carto-gray200 text-carto-pink focus:ring-carto-pink"
  >
  <label :for="`filter-${item.name}`"
         class="ml-3 flex flex-row gap-2 items-center"
         :title="item.description || ''">
    <img :src="`${config.public.BOTTIN_URL}${icons[item.name]['icon']}`" alt="icon"
         class="w-6 h-6"/>
    <span class="text-sm text-carto-main">{{ item.name }} ({{ item.count }})</span>
  </label>
  <IconInfoCircle class="ml-2 w-6 h-6 text-carto-pink cursor-pointer" :title="item.description || ''"
                  v-if="item.description"
                  @click="openInfo = !openInfo"/>
</template>