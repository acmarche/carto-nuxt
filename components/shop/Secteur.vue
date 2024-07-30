<script setup lang="ts">
const config = useRuntimeConfig()
import {IconTag} from '@tabler/icons-vue';

const {shop} = defineProps<{
  shop: { type: Object, required: true },
}>()

</script>
<template>
  <section class="flex flex-col">
    <ul>
      <li v-for="secteur in shop.classements" class="flex flex-row items-center gap-2" :key="secteur.id">
        <img :src="`${config.public.BOTTIN_URL}/bottin/icons/${secteur.icon}`" v-if="secteur.icon" alt="icon"
             class="h-8 w-8"
             aria-hidden="true"/>
        <IconTag class="h-8 w-8" aria-hidden="true" v-else/>
        <span>{{ secteur.name }}</span>
      </li>
    </ul>
    <ul class="mt-2">
      <li v-for="tag in shop.tagsObject" class="flex flex-row items-center gap-2" :key="tag.id">
        <img :src="`${config.public.BOTTIN_URL}/bottin/tags/${tag.icon}`" alt="icon" class="w-8 h-8" v-if="tag.icon"/>
        <IconTag class="h-8 w-8" aria-hidden="true" v-else/>
        <span :title="tag.description">{{ tag.name }}</span>
      </li>
    </ul>
  </section>
</template>