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
        <img :src="`${config.public.BOTTIN_URL}/bottin/icons/${secteur.icon}`" v-if="secteur.icon" alt="icon"
             class="h-8 w-8"
             aria-hidden="true"/>
        <IconCat class="h-8 w-8" aria-hidden="true" v-else/>
        <span>{{ secteur.name }}</span>
      </li>
    </ul>
    <ul class="mt-2">
      <li v-for="tag in shop.tagsObject" class="flex flex-row items-center gap-2" :key="tag.id">
        <img :src="`${config.public.BOTTIN_URL}/${tag.icon}`" alt="icon" class="w-8 h-8" v-if="tag.icon"/>
        <IconCat class="h-8 w-8" aria-hidden="true" v-else/>
        <span>{{ tag.name }}</span>
      </li>
    </ul>
  </section>
</template>