<script setup lang="ts">
const config = useRuntimeConfig()
import {IconCat} from '@tabler/icons-vue';

const {shop} = defineProps<{
  shop: { type: Object, required: true },
}>()

</script>
<template>
  <section class="flex flex-col">
    <ul>
      <li v-for="secteur in shop.classements" class="flex flex-row items-center  gap-2" :key="secteur.id">
        <img :src="`${config.public.API_URL}/bottin/icons/${secteur.icon}`" v-if="secteur.icon" alt="icon"
             class="h-8 w-8"
             aria-hidden="true"/>
        <IconCat class="h-8 w-8" aria-hidden="true" v-else/>
        <span>{{ secteur.name }}</span>
      </li>
    </ul>
    <ul class="mt-2">
      <li v-for="(tag,key,index) in shop.tags" class="flex flex-row items-center gap-2" :key="index">
        <IconCat class="h-8 w-8" aria-hidden="true"/>
        <span>{{ tag }}</span>
      </li>
    </ul>
  </section>
</template>